import React from "react";

import { useEffect, useState } from "react";

export default function inputSelectMarca() {
  const [setorList, setSetorList] = useState([
    {
      id: 1,
      nome: "Carregando..",
    },
  ]);
  useEffect(() => {
    buscarSetor();
  }, []);

  async function buscarSetor() {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/setor?all`;
    const lista = await fetch(url).then((res) => {
      let filtrada = res.json();
      return filtrada;
    });
    const setores = lista;

    setSetorList([...setores]);
  }
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione o setor
      </option>
      {setorList.map((item) => {
        return (
          <option value={item.nome + "!" + item.id} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
