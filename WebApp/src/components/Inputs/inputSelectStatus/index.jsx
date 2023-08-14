import React from "react";

import { useState } from "react";

export default function inputSelectMarca() {
  const [statusList, setStatusList] = useState([
    {
      id: 1,
      nome: "Carregando..",
    },
  ]);

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
