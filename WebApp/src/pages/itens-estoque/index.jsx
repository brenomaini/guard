import React, { useEffect, useState } from "react";
import InputText from "../../components/Inputs/inputText";
import HeaderControle from "../../components/headerControleEstoque";
import LinhaControle from "../../components/linhaControleDeEstoque";
import ModalInserirItem from "../../components/modalInserirNoEstoque";

export default function ItensEstoque() {
  const [itemsEstoque, setItemEstoque] = useState([]);
  const [page, setPage] = useState(1);
  async function buscarItensEstoque() {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/estoque?page=${page}`;
    const lista = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const items = res.data;
        setItemEstoque([...items]);
      });
  }
  useEffect(() => {
    buscarItensEstoque();
  }, [itemsEstoque]);

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
          className="mb-8 bg-gran-red bg-opacity-70 hover:scale-105 text-white font-semibold py-1 px-2 rounded hover:shadow-xl   "
          onClick={filtrarEstoque}
        >
          Pesquisar
        </button>
      </div>

      <ModalInserirItem />

      <div className="table  gap-2 row-auto h-16 w-full  place-items-center p-2 ">
        <HeaderControle />
        {itemsEstoque.map((item) => {
          return <LinhaControle item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
