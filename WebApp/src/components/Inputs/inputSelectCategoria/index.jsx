import React, { useEffect, useState } from "react";
export default function inputSelectCategoria() {
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      name: "Carregando..",
    },
  ]);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    const lista = await fetch("http://127.0.0.1:8000/api/categoria").then(
      (res) => {
        let filtrada = res.json();
        return filtrada;
      }
    );
    const teste2 = lista.data;

    setCategoryList([...teste2]);
  }
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione a categoria
      </option>
      {categoryList.map((item) => {
        return (
          <option value={item.nome} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
