import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useBuscaItensEstoque from "../../../../hooks/useBuscaItensEstoque";
import BotaoNextPrev from "../components/botaoNextPrev";
import EditarResponsavel from "../components/editarResponsavel";
import Filtro from "../components/filtro";
import HeaderItens from "../components/headerItens";
import ModalManutencao from "../components/modalManutencoes";
import SelectItensPorPagina from "../components/selectItensPorPagina";

export default function itens() {
  const [page, setPage] = React.useState(1);
  const [filtro, setFiltros] = React.useState([""]);
  const [qtdItensPagina, setQtdItensPagina] = React.useState(25);

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function setPrimeiraPagina() {
    setPage(1);
  }
  function setProxPagina() {
    setPage((old) => old + 1);
  }
  function setPrevPagina() {
    setPage((old) => Math.max(old - 1, 0));
  }
  const { isLoading, isError, error, data, isFetching } = useBuscaItensEstoque(
    page,
    filtro,
    qtdItensPagina
  );

  return (
    <>
      {isLoading ? (
        <>
          <div className="table gap-2 row-auto h-16 w-full  text-center p-2">
            <HeaderItens />
          </div>

          <div className="m-2 gap-2">
            <Skeleton count={20} height={25} />
          </div>
        </>
      ) : isError && data.data != undefined ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <Filtro setFiltro={setFiltros} />

          <div className="table row-auto w-full  text-center p-2">
            <HeaderItens />
            {data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="table-row-group group text-center border even:bg-black even:bg-opacity-20"
                >
                  <div className="table-row group-hover:bg-guard-green group-hover:bg-opacity-25 ">
                    <div className="table-cell align-middle">
                      <ModalManutencao idItem={item.id} />
                    </div>
                    <div className="table-cell">
                      {item.numeroSerie || "N/A"}{" "}
                    </div>
                    <div className="table-cell">
                      {item.patrimonio || "N/A"}{" "}
                    </div>
                    <div className="table-cell">{item.item.nome} </div>
                    <div
                      className={
                        item.status === "DISPONÍVEL"
                          ? "bg-green border-b font-semibold table-cell align-middle"
                          : item.status === "QUEBRADO"
                          ? "bg-guard-red text-white border-b border-black font-semibold table-cell align-middle"
                          : item.status === "PARA EMPRÉSTIMO"
                          ? "bg-yellow text-black border-b border-black  font-semibold table-cell align-middle"
                          : "bg-orange border-b font-semibold table-cell align-middle"
                      }
                    >
                      {item.status.toUpperCase()}
                    </div>
                    <div className="table-cell"> {item.localizacao} </div>
                    <div className="table-cell"> {item.setor.nome} </div>
                    <div className="table-cell"> {item?.responsavel} </div>
                    <div className="table-cell ">
                      <EditarResponsavel item={item} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <BotaoNextPrev
              pagina={page}
              setPrevPagina={setPrevPagina}
              setProxPagina={setProxPagina}
              setPrimeiraPagina={setPrimeiraPagina}
              setUltimaPagina={setPage}
              infosPaginacao={data}
            />
            <SelectItensPorPagina setQtdItensPagina={setQtdItensPagina} />
          </div>
        </>
      )}
    </>
  );
}
