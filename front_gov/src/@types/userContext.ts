import { Dispatch, ReactNode, SetStateAction } from "react";
import { IUserResponse } from "./user";

export type IUserContextType = {
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;

};

export type IPropsUserContext = {
  children: ReactNode;
};
