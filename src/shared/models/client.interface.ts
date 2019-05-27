
export class Client {
  clientId: string;
  email: string;
  status: string;
  createAt?: Date;
  firstName?: string;
  lastName?: string;
  identification?: string;
  idExpirationDate?: Date;
  bornDate?: string;
  bornCountryId?: number;
  livingCountryId?: string;
  nationality?: string;
  provinceId?: string;
  cantonId?: string;
  distritoId?: string;
  primaryPhone?: number;
  civilStatusId?: number;
  genderId?: number;
  addres1?: string;
  jobInfo?: Job;
  PEP?: PEP;
  accounts?: AccountUser[];
  observations?: string;
}

export class Job {
  professionId: string;
  jobPlace: string;
  jobStartDate: Date;
  marketStall: string;
  jobPhone: string;
  jobEmail: string;
  jobAddres: string;
  monthlyIncome: number
}


export class PEP {
  sourceFunds: string;
  monthlyToTransac: number;
  isPEP: boolean;
  PEPDate: Date;
  PEPmarketStall: string;
}

export class AccountUser {
  fullName: string;
  identification: string;
  nationality: string;
  bornDate: Date;
  bornCountryId: number;
  professionId: string;
  addres1: string;
}