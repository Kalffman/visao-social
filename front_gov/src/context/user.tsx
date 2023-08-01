import { createContext, useContext, useEffect, useState } from "react";
import { IPropsUserContext, IUserContextType } from "../@types/userContext";
import { IUserResponse } from "../@types/user";

const UserContext = createContext<IUserContextType>({} as any);

export function useContextUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: IPropsUserContext) {
  const [loading, setLoading] = useState(false);

  const value = {
    loading,
    setLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
