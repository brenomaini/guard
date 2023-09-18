import React from "react";

import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";

export default function inputSelectMarca() {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
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
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/marca?all`;
    const lista = await fetch(url, {
      headers: { Authorization: getToken },
    }).then((res) => {
      let filtrada = res.json();
      return filtrada;
    });
    const marcas = lista;

    setMarcasList([...marcas]);
  }
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione a marca
      </option>
      {marcasList.map((item) => {
        return (
          <option value={item.nome + "!" + item.id} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
