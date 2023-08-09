import Footer from "../../components/footer";
import Header from "../../components/header";
import SubHeader from "../../components/subHeader";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useContextUser } from "../../context/user";
import Loading from "../../loading";
import { useNavigate } from "react-router-dom";

import { useContextAuth } from "../../context/auth";
import { useEffect } from "react";

const schema = z.object({
  cpf: z
    .string()
    .min(11, { message: "digite apenas números" })
    .max(11, { message: "digite apenas os números" }),
  password: z.string().min(5, { message: "deve ter no mínimo 5 caracteres" }),
});

function Login() {
  const { loading } = useContextUser();
  const { login, token } = useContextAuth();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (token) {
      navigation("/home");
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <SubHeader>
        <h1>VISÃO SOCIAL RR</h1>
      </SubHeader>
      <section className="flex flex-1 gap-40 bg-secondary  justify-center items-center text-zinc-500 py-10">
        <img src="./assets/icons/logoRR.png" className="max-md:hidden" />
        <form
          onSubmit={handleSubmit(login)}
          className="bg-white flex  w-full max-w-sm flex-col p-6 gap-6 drop-shadow-lg rounded-lg "
        >
          <div className="flex flex-col w-full gap-3">
            <span className="font-bold text-3xl border-b py-2 px-10 text-center">
              Login
            </span>
            <div className="flex flex-col">
              {errors.cpf?.message ? (
                <span>{errors.cpf?.message?.toString()}</span>
              ) : (
                <label htmlFor="">CPF</label>
              )}

              <input
                type="text"
                {...register("cpf")}
                className={`bg-secondary rounded-lg py-2 px-3 focus:outline-none placeholder:text-zinc-300 ${
                  errors.cpf?.message ? "border border-red-600" : null
                }`}
                placeholder="Informe seu CPF"
              />
            </div>
            <div className="flex flex-col">
              {errors.password?.message ? (
                <span>{errors.password?.message?.toString()}</span>
              ) : (
                <label htmlFor="">Senha</label>
              )}
              <input
                type="password"
                {...register("password")}
                className={`bg-secondary rounded-lg py-2 px-3 focus:outline-none placeholder:text-zinc-300 ${
                  errors.password?.message ? "border border-red-600" : null
                }`}
                placeholder="Digite sua senha"
              />
            </div>
            <span className="text-xs">Esqueci minha senha</span>
            {loading ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="w-full px-5 py-2 rounded-lg text-white bg-blue-700"
              >
                ENTRAR
              </button>
            )}
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
