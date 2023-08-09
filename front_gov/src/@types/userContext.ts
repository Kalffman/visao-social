import { Dispatch, ReactNode, SetStateAction } from "react";

export type IUserContextType = {
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;

};

export type IPropsUserContext = {
  children: ReactNode;
};
