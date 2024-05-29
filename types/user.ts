export type TUserLoginForm = {
  email: string;
  password: string;
};

export type TUserData = {
  name: string;
  email: string;
  role: string[];
  permission: {
    id: number;
    name: string;
  }[];
};
