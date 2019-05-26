### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:10-alpine as builder
ARG _ENVIRONMENT
COPY package.json package-lock.json ./

#Prevent exists node_modules
RUN rm -rf node_modules

#Prevent exists package-lock
RUN rm package-lock.json

#Install git
RUN apk add --no-cache git

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN echo "Using Hacher ${_ENVIRONMENT}"
## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --configuration=$_ENVIRONMENT

### STAGE 2: Setup ###
FROM nginx:1.15.5-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]