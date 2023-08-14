import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useBuscaPedidos from "../../../../hooks/useBuscaPedidos";
import BotaoNextPrev from "../components/botaoNextPrev";
import Filtro from "../components/filtro";
import HeaderControlePedidos from "../components/headerControlePedidos";
import LinhaControlePedidos from "../components/linhaControlePedidos";
import ModalInserirPedido from "../components/modais/modalInserirPedido";
import SelectItensPorPagina from "../components/selectItensPorPagina";

export default function pedidos() {
  const [page, setPage] = useState(1);
  const [filtro, setFiltros] = React.useState([""]);
  const [qtdItensPagina, setQtdItensPagina] = React.useState(15);

  const pedidos = useBuscaPedidos(page, filtro, qtdItensPagina);
  function setPrimeiraPagina() {
    setPage(1);
  }
  function setProxPagina() {
    setPage((old) => old + 1);
  }
  function setPrevPagina() {
    setPage((old) => Math.max(old - 1, 0));
  }

  return (
    <>
      {pedidos.isLoading ? (
        <>
          <div className="p-16 row-auto h-16 w-screen  place-items-center">
            <HeaderControlePedidos />
          </div>
          <Skeleton count={20} height={40} />
        </>
      ) : pedidos.isError && pedidos.data != undefined ? (
        <div>Error: {pedidos.error.message}</div>
      ) : (
        <>
          <Filtro setFiltro={setFiltros} />
          <ModalInserirPedido />

          <div className="table  gap-2 row-auto h-16 w-full  place-items-center p-2">
            <HeaderControlePedidos />

            {pedidos.data.data.map((pedido, index) => {
              return <LinhaControlePedidos pedido={pedido} key={index} />;
            })}
          </div>
          <div className="flex justify-center">
            <BotaoNextPrev
              pagina={page}
              setPrevPagina={setPrevPagina}
              setProxPagina={setProxPagina}
              setPrimeiraPagina={setPrimeiraPagina}
              setUltimaPagina={setPage}
            />
            <SelectItensPorPagina setQtdItensPagina={setQtdItensPagina} />
          </div>
        </>
      )}
    </>
  );
}
