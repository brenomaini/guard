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
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = `${baseURL}/categoria?all`;
    const lista = await fetch(url).then((res) => {
      let filtrada = res.json();
      return filtrada;
    });
    const categorias = lista;

    setCategoryList([...categorias]);
  }
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione a categoria
      </option>
      {categoryList.map((item) => {
        return (
          <option value={item.nome + "!" + item.id} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
