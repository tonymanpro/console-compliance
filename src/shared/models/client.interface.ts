
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
  jobInfo?: Job,
  PEP?: PEP,
  accounts?: Account[]
}

export interface Job {
  profession: string;
  jobPlace: string;
  jobStartDate: Date;
  marketStall: string;
  jobPhone: string;
  jobEmail: string;
  jobAddres: string;
}


export interface PEP {
  sourceFunds: string,
  monthlyToTransac: number;
  isPEP: boolean;
  PEPDate: Date;
  PEPmarketStall: string;
}

export interface Account {
  fullName: string;
  identification: string;
  nationality: string;
  bornDate: Date;
  bornCountryId: number,
  professionId: string;
  addres1: string;
}