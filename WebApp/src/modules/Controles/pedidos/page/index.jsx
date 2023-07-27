import React, { useEffect, useState } from "react";
import InputText from "../../../../components/Inputs/inputText";
import BotaoNextPrev from "../components/botaoNextPrev";
import HeaderControlePedidos from "../components/headerControlePedidos";
import LinhaControlePedidos from "../components/linhaControlePedidos";
import ModalInserirPedido from "../components/modalInserirPedido";

export default function pedidos() {
  const [listaPedidos, setPedidos] = useState([]);
  const [firstPage, setFirstPage] = useState(1);
  const [currentPage, setCurrentPage] = useState("");
  const [lastPage, setLastPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/pedido?page=${firstPage}`;
  async function buscarItensEstoque(link) {
    const lista = await fetch(link)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const pedidos = res.data;
        const nextLink = res.next_page_url;
        const prevLink = res.prev_page_url;
        const lastPage = res.last_page;
        const currentPage = res.current_page;
        setCurrentPage(currentPage);
        setLastPage(lastPage);
        setPrevPage(prevLink);
        setNextPage(nextLink);
        setPedidos([...pedidos]);

        //colocar um reload na pagina no final da query
      });
  }
  useEffect(() => {
    buscarItensEstoque(url);
  }, []);

  function filtrarEstoque() {
    let selectText = `SELECT * FROM ItensEstoque WHERE `;
    // for (const item in filter) {
    //   if (filter[item] != "") {
    //     selectText = selectText + `${item} = ${filter[item]} AND `;
    //   }
    // }
    console.log("Filtrando");
  }
  // useEffect(() => {
  //   buscarEstoque();
  // }, []);

  return (
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
          onClick={filtrarEstoque}
        >
          Pesquisar
        </button>
      </div>

      <ModalInserirPedido />

      <div className="table  gap-2 row-auto h-16 w-full  place-items-center p-2">
        <HeaderControlePedidos />
        {listaPedidos.map((pedido) => {
          return <LinhaControlePedidos pedido={pedido} key={pedido.id} />;
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
