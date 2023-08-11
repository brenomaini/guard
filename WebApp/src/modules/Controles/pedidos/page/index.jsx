import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InputText from "../../../../components/Inputs/inputText";
import useBuscaPedidos from "../../../../hooks/useBuscaPedidos";
import BotaoNextPrev from "../components/botaoNextPrev";
import HeaderControlePedidos from "../components/headerControlePedidos";
import LinhaControlePedidos from "../components/linhaControlePedidos";
import ModalInserirPedido from "../components/modalInserirPedido";

export default function pedidos() {
  const [listaPedido, setListaPedido] = useState([""]);

  const [page, setPage] = useState(1);
  const pedidos = useBuscaPedidos(page);
  function setPrimeiraPagina() {
    setPage(1);
  }
  function setProxPagina() {
    setPage((old) => old + 1);
  }
  function setPrevPagina() {
    setPage((old) => Math.max(old - 1, 0));
  }
  console.log(pedidos);
  //CRIAR Componente para filtros.
  return (
    <>
      {pedidos.isLoading ? (
        <>
          <div className="p-16 row-auto h-16 w-screen  place-items-center">
            <HeaderControlePedidos />
          </div>
          <Skeleton count={20} height={40} />
        </>
      ) : pedidos.isError ? (
        <div>Error: {pedidos.error.message}</div>
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
            {pedidos.data.data.map((pedido, index) => {
              return <LinhaControlePedidos pedido={pedido} key={index} />;
            })}
          </div>

          <BotaoNextPrev
            pagina={page}
            setPrevPagina={setPrevPagina}
            setProxPagina={setProxPagina}
            setPrimeiraPagina={setPrimeiraPagina}
            setUltimaPagina={setPage}
          />
        </>
      )}
    </>
  );
}
