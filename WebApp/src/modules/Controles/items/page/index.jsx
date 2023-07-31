import React, { useEffect, useState } from "react";
import BotaoNextPrev from "../components/botaoNextPrev";
import EditarResponsavel from "../components/editarResponsavel";
import HeaderItens from "../components/headerItens";

export default function itens() {
  const [listaItens, setItens] = useState([]);
  const [firstPage, setFirstPage] = useState(1);
  const [currentPage, setCurrentPage] = useState("");
  const [lastPage, setLastPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?page=${firstPage}`;
  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  async function buscarItensEstoque(link) {
    const lista = await fetch(link)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const itens = res.data;
        const nextLink = res.next_page_url;
        const prevLink = res.prev_page_url;
        const lastPage = res.last_page;
        const currentPage = res.current_page;
        setCurrentPage(currentPage);
        setLastPage(lastPage);
        setPrevPage(prevLink);
        setNextPage(nextLink);
        setItens([...itens]);

        //colocar um reload na pagina no final da query
      });
  }
  useEffect(() => {
    buscarItensEstoque(url);
  }, []);

  return (
    <>
      <div className="table gap-2 row-auto h-16 w-full  text-center p-2">
        <HeaderItens />
        {listaItens.map((item, index) => {
          return (
            <div
              key={index}
              className="table-row-group group text-center border even:bg-black even:bg-opacity-20"
            >
              <div className="table-row group-hover:bg-gran-blue group-hover:bg-opacity-25 ">
                <div className="table-cell">{item.numeroSerie} </div>
                <div className="table-cell">{item.patrimonio} </div>
                <div className="table-cell">{item.item.nome} </div>
                <div
                  className={
                    item.status == "DISPONÍVEL"
                      ? "bg-green border-b"
                      : item.status == "QUEBRADO"
                      ? "bg-gran-red text-white border-b border-black"
                      : "bg-orange border-b"
                  }
                >
                  {item.status.toUpperCase()}
                </div>
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
      <BotaoNextPrev
        next={nextPage}
        prev={prevPage}
        last={lastPage}
        atualizaLista={buscarItensEstoque}
        current={currentPage}
      />
    </>
  );
}
