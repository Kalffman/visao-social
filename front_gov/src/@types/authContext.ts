import { ReactNode } from "react";
import { IUserResponse } from "./user";

export type IAuthContextType = {
  login: (data: any) => void;
  logout: () => void;
  user: IUserResponse;
  token: string;
};

export type IPropsAuthContext = {
  children: ReactNode;
};
