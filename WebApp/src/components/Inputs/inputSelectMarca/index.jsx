import React from "react";

import { useEffect, useState } from "react";

export default function inputSelectMarca() {
  const [marcasList, setMarcasList] = useState([
    {
      id: 1,
      nome: "Carregando..",
    },
  ]);
  useEffect(() => {
    buscarMarcas();
  }, []);

  async function buscarMarcas() {
    const lista = await fetch("http://127.0.0.1:8000/api/marca").then((res) => {
      let filtrada = res.json();
      return filtrada;
    });
    const marcas = lista.data;

    setMarcasList([...marcas]);
  }
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione a marca
      </option>
      {marcasList.map((item) => {
        return (
          <option value={item.nome} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
