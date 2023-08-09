import { createContext, useContext, useEffect } from "react";
import { IAuthContextType, IPropsAuthContext } from "../@types/authContext";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { useContextUser } from "./user";
import { IUserResponse } from "../@types/user";

const AuthContext = createContext<IAuthContextType>({} as any);

export function useContextAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: IPropsAuthContext) {
  const navigation = useNavigate();
  const { setLoading } = useContextUser();

  const login = async (data: any) => {
    setLoading(true);
    console.log(data);
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("gov_rr:token", res.data.token);
        console.log(res.data.user);
        localStorage.setItem("gov_rr:user", JSON.stringify(res.data.user));
        toast.success(`Bem vindo, ${res.data.user.nome}`);
        setLoading(false);
        navigation("/home");
      })
      .catch((err: AxiosError) => {
        console.log(err);

        const error: any = err.response?.data;
        toast.error(error.message || "Algo enesperado");
      });
    setLoading(false);
  };

  const logout = () => {
    localStorage.clear();
    navigation("/");
  };

  const user: IUserResponse = JSON.parse(
    localStorage.getItem("gov_rr:user") as any
  );
  const token = localStorage.getItem("gov_rr:token") as string;

  useEffect(() => {
    if (!token) {
      navigation("/");
    }
  }, []);

  const value = {
    token,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
