export interface LoginInfo {
    email: string;
    password: string;
    loading: boolean;
  }
  
  export interface RegisterInfo extends LoginInfo {
    name: string;
  }
  