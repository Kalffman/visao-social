import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SubHeader from "../../components/subHeader";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/card";
import { toast } from "react-toastify";

import { useState } from "react";
import { api } from "../../service/api";
import { useContextUser } from "../../context/user";
import Loading from "../../loading";
import { IBeneficiary, familiar } from "../../@types/beneficiary";

function Home() {
  const { loading, setLoading } = useContextUser();
  const [isOpenDateils, setIsOpenDetails] = useState(false);
  const [search, setSearch] = useState("");
  const [beneficiary, setBeneficiary] = useState<IBeneficiary>(
    {} as IBeneficiary
  );

  async function handleSearch(cpf: string) {
    const regex = /\w{11}/;

    if (!regex.test(cpf)) {
      return alert("Digite um cpf válido");
    }
    const data = {
      cpf: cpf,
    };
    setLoading(true);
    await api
      .post("/searchBeneficiary", data)
      .then((res) => setBeneficiary(res.data))
      .catch((err) => toast.error(err.response.data.message));
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-full">
      <Header />
      <SubHeader>
        <div className="rounded-lg py-1  bg-white flex xl:w-1/2 max-w-lg justify-center items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-base w-full mx-3 text-black focus:outline-none"
            placeholder="Pesquise por um cpf"
          />
          {loading ? (
            <Loading />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                handleSearch(search);
              }}
              className="text-zinc-400 w-7 border-l px-3 cursor-pointer"
              icon={faSearch}
            />
          )}
        </div>
      </SubHeader>
      {beneficiary.cpf ? (
        <main className="flex flex-col  flex-1 items-center gap-6 xl:text-base text-xs p-6 text-black bg-secondary ">
          <Card
            className="bg-white  p-4 w-full max-w-5xl rounded-lg drop-shadow-lg"
            nameCard="DADOS PESSOAIS"
          >
            <div className="mt-6 flex justify-between p-3 flex-wrap gap-4">
              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">NOME</label>
                <span className="">{beneficiary.nome}</span>
              </div>

              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">CPF</label>
                <span className="">{beneficiary.cpf}</span>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="mt-6 flex justify-between p-3 flex-wrap gap-4">
              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">DATA DE NASCIMENTO</label>
                <span className="">{beneficiary.data_nascimento}</span>
              </div>
              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">TELEFONE</label>
                <span className="">{beneficiary.contatos}</span>
              </div>
              {/* <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">RG</label>
                <span className="pl-3">{}</span>
              </div> */}
            </div>

            <Card
              className={`mt-10 w-full -z-30 overflow-hidden  ease-in-out duration-500 ${isOpenDateils ? "max-h-screen" : "max-h-0"
                }`}
              nameCard="EXTRATO DE USO"
            >
              <div className="overflow-auto mt-4 p-3">
                <table className="border-collapse table-auto w-full">
                  <thead className="table-auto text-left">
                    <tr className="border-b border-zinc-950">
                      <th>DATA</th>
                      <th>MODALIDADE</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="table-auto text-left overflow-scroll">
                    {beneficiary.extractUse &&
                      beneficiary.extractUse.map((e) => {
                        return (
                          <tr key={e.cod_id} className="border-b">
                            <td className="border-b p-2">
                              {e.data_liberacao.toString()}
                            </td>
                            <td className="border-b p-2">{e.modalidade}</td>
                            <td className="border-b p-2">{e.status}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="flex w-full justify-end mt-4 ">
              {isOpenDateils ? (
                <button
                  onClick={() => setIsOpenDetails(!isOpenDateils)}
                  className="bg-blue-800 py-1 z-50 px-4 text-white rounded-lg"
                >
                  VOLTAR
                </button>
              ) : (
                <button
                  onClick={() => setIsOpenDetails(!isOpenDateils)}
                  className="bg-blue-800 py-1 z-50 px-4 text-white rounded-lg"
                >
                  DETALHES
                </button>
              )}
            </div>
          </Card>
          <Card
            className="bg-white p-4 w-full max-w-5xl rounded-lg drop-shadow-lg"
            nameCard="ENDEREÇO"
          >
            <div className="mt-6 flex justify-between p-3 flex-wrap gap-4">

              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">CIDADE</label>
                <span className="">{beneficiary.cidade}</span>
              </div>
              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">BAIRRO</label>
                <span className="">{beneficiary.bairro}</span>
              </div>
              {/* <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">CEP</label>
                <span className="pl-3">{}</span>
              </div> */}
            </div>
            <hr className="mt-4" />
            <div className="mt-6 flex justify-between p-3 flex-wrap gap-4">
              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">RUA</label>
                <span className="">
                  {beneficiary.logradouro.split("Nº")[0]}
                </span>
              </div>
              <div className="flex flex-col max-w-xs w-full">
                <label className="text-zinc-400">N° RESIDENCIAL</label>
                <span className="">
                  {beneficiary.logradouro.split("Nº")[1]}
                </span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-white p-4 w-full max-w-5xl rounded-lg drop-shadow-lg"
            nameCard="COMPOSIÇÃO FAMILIAR"
          >
            <div className="my-10 w-full flex justify-center p-3">
              {beneficiary.familiar.length > 0 ? (
                <table className="border-collapse table-auto w-[90%]">
                  <thead className="table-auto text-left">
                    <tr className="border-b border-zinc-950">
                      <th className="">NOME</th>
                      <th>CPF</th>
                      <th>RELAÇÃO</th>
                    </tr>
                  </thead>
                  <tbody className="table-auto text-left">
                    {beneficiary.familiar.length > 0 &&
                      beneficiary.familiar.map((parent: familiar) => {
                        console.log(parent)
                        return (
                          <tr key={parent.familiar_id} className="border-b">
                            <td className="border-b py-2">
                              {parent.familiar_nome}
                            </td>
                            <td className="border-b py-2">
                              {parent.familiar_cpf}
                            </td>
                            <td className="border-b py-2">
                              {parent.familiar_vinculo}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              ) : (
                <span>Sem familiares cadastrados na base de dados</span>
              )}
            </div>
          </Card>
        </main>
      ) : (
        <main className="flex flex-col flex-1 items-center gap-6 xl:text-base text-xs p-6 text-blue-900 bg-secondary">
          <img src="./assets/icons/buscar.svg" alt="Buscar" width="185" height="185" />
          <span className="text-blue-900" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
            Realize uma nova pesquisa por um beneficiário...
          </span>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default Home;