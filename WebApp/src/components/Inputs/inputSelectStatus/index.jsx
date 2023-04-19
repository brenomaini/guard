import React from "react";

import { useEffect, useState } from "react";

export default function inputSelectMarca() {
  const [statusList, setStatusList] = useState([
    {
      id: 1,
      nome: "Carregando..",
    },
  ]);
  useEffect(() => {
    buscarStatus();
  }, []);

  async function buscarStatus() {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/status`;
    const lista = await fetch(url).then((res) => {
      let filtrada = res.json();

      return filtrada;
    });
    const status = lista.data;

    setStatusList([...status]);
  }
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione o status
      </option>
      {statusList.map((item) => {
        return (
          <option value={item.nome + "!" + item.id} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
