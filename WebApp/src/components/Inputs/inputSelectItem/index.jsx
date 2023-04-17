import React from "react";
import { useEffect, useState } from "react";

export default function inputSelectItem() {
  const [itemList, setItemList] = useState([
    {
      id: 1,
      nome: "Carregando..",
    },
  ]);
  async function buscarItens() {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/item`;
    const lista = await fetch(url).then((res) => {
      let filtrada = res.json();
      return filtrada;
    });
    const items = lista.data;

    setItemList([...items]);
  }
  useEffect(() => {
    buscarItens();
  }, []);
  return (
    <>
      <option value="" hidden>
        Selecione o item
      </option>
      {itemList.map((item) => {
        return (
          <option value={item.nome + "!" + item.id} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
