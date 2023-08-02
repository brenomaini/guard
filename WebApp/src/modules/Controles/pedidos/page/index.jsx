import React from "react";
import { useQuery } from "react-query";
import InputText from "../../../../components/Inputs/inputText";
import BotaoNextPrev from "../components/botaoNextPrev";
import HeaderControlePedidos from "../components/headerControlePedidos";
import LinhaControlePedidos from "../components/linhaControlePedidos";
import ModalInserirPedido from "../components/modalInserirPedido";

export default function pedidos() {
  const [page, setPage] = React.useState(1);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/pedido?page=`;
  async function buscarPedidos() {
    const response = await fetch(url + page);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
  function setPrimeiraPagina() {
    setPage(1);
  }
  function setProxPagina() {
    setPage((old) => old + 1);
  }
  function setPrevPagina() {
    setPage((old) => Math.max(old - 1, 0));
  }
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["itensEstoque", page],
      queryFn: () => buscarPedidos(page),
      keepPreviousData: true,
      notifyOnChangeProps: ["data", "error"],
    });
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div className="flex flex-col items-center mt-4">
            <div className="flex h-16  gap-8">
              <InputText name={"Setor/CC"} htmlName={"setor"} />
              <InputText name={"Solicitante"} htmlName={"solicitante"} />
              <InputText name={"Ítem"} htmlName={"item"} />
            </div>
            <div className="flex h-28 gap-8">
              <InputText name={"Nota"} htmlName={"nf"} />
              <InputText name={"Patrimônio"} htmlName={"patrimonio"} />
              <InputText name={"Status"} htmlName={"status"} />
              <InputText name={"Recebedor"} htmlName={"recebedor"} />
            </div>
            <button
              className="mb-8 bg-gran-red bg-opacity-70 hover:scale-105 text-white font-semibold py-1 px-2 rounded hover:shadow-xl"
              onClick={() => console.log("CriarFuncaoDoFiltro")}
            >
              Pesquisar
            </button>
          </div>

          <ModalInserirPedido />

          <div className="table  gap-2 row-auto h-16 w-full  place-items-center p-2">
            <HeaderControlePedidos />
            {data.data.map((pedido) => {
              return <LinhaControlePedidos pedido={pedido} key={pedido.id} />;
            })}
          </div>
        </>
      )}
      <BotaoNextPrev
        setPrimeiraPagina={setPrimeiraPagina}
        setPrevPagina={setPrevPagina}
        setProxPagina={setProxPagina}
        isPreviousData={isPreviousData}
        page={page}
        dataHasMore={data?.hasMore}
      />
    </>
  );
}
