import { createContext, useContext, useState } from "react";
import { IPropsUserContext, IUserContextType } from "../@types/userContext";


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
