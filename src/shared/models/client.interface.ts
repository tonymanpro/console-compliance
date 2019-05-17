
export interface Client {
    clientId: string;
    email: string;
    status: string;
    createAt?: Date;
    firstName?: string;
    lastName?: string;
    identification?: string;
    identificationPeriod?: Date;
    bornDate?: string;
    bornCountryId?: number;
    livingCountryId?: string;
    nationality?: string;
    province?: string;
    canton?: string;
    distrito?: string;
    primaryPhone?: number;
    civilStatusId?: number;
    genderId?: number;
    addres1?: string;
  }