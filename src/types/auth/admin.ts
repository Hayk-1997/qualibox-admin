export type TAdminLoginForm = {
  email: string;
  password: string;
};

export type TUserRegistration = {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  phone: string;
  password: string;
};

export type TAdmin = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
};
