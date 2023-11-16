export interface IBackendRes<T> {
  error?: string | string[];
  message: string;
  statusCode: number | string;
  data?: T;
}
// export interface IUser<T> {
//   password: string;
//   email: string;
//   name: string;
//   phoneNumber: string;
// }
export interface IUser {
  name: string;
  email: string;
  password?: string;
  phoneNumber: string;
}
export interface IAccount {
  access_token: string;
  user: {
    _id: string;
    email: string;
    name: string;
    password: string;
    phoneNumber: string;
  }
  permissions: {
    _id: string;
    name: string;
    apiPath: string;
    method: string;
    module: string;
  }[]
}
export interface IBackendRes<T> {
  error?: string | string[];
  message: string;
  statusCode: number | string;
  data?: T;
}

export interface IModelPaginate<T> {
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  },
  result: T[]
}



export interface IGetAccount extends Omit<IAccount, "access_token"> { }

export interface ICompany {
  _id?: string;
  name?: string;
  address?: string;
  logo: string;
  description?: string;
  createdBy?: string;
  isDeleted?: boolean;
  deletedAt?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
}



export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  age: number;
  gender: string;
  address: string;
  role?: {
    _id: string;
    name: string;
  }

  company?: {
    _id: string;
    name: string;
  }
  createdBy?: string;
  isDeleted?: boolean;
  deletedAt?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
}




export interface IPermission {
  _id?: string;
  name?: string;
  apiPath?: string;
  method?: string;
  module?: string;

  createdBy?: string;
  isDeleted?: boolean;
  deletedAt?: boolean | null;
  createdAt?: string;
  updatedAt?: string;

}

export interface IRole {
  _id?: string;
  name: string;
  description: string;
  isActive: boolean;
  permissions: IPermission[] | string[];

  createdBy?: string;
  isDeleted?: boolean;
  deletedAt?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISubscribers {
  _id?: string;
  name?: string;
  email?: string;
  skills: string[];
  createdBy?: string;
  isDeleted?: boolean;
  deletedAt?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
}
