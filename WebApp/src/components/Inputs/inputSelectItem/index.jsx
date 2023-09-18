import React, { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";

export default function inputSelectItem() {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const [itemList, setItemList] = useState([
    {
      id: 1,
      nome: "Carregando..",
    },
  ]);
  async function buscarItens() {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/item?all`;
    const lista = await fetch(url, {
      headers: { Authorization: getToken },
    }).then((res) => {
      let filtrada = res.json();

      return filtrada;
    });
    const items = lista;

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
