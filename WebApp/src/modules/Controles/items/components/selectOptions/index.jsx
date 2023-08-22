import React from "react";

import { useState } from "react";

export default function optionsItensList() {
  const [statusList, setStatusList] = useState([
    {
      id: 1,
      nome: "DISPONÍVEL",
    },
    {
      id: 2,
      nome: "RETIRADO",
    },
    {
      id: 3,
      nome: "MANUTENÇÃO",
    },
    {
      id: 4,
      nome: "QUEBRADO",
    },
    {
      id: 5,
      nome: "EMPRESTADO",
    },
    {
      id: 6,
      nome: "PARA EMPRÉSTIMO",
    },
  ]);

  return (
    <>
      <option value="" hidden className="font-light">
        Selecione o setor
      </option>
      {statusList.map((item) => {
        return (
          <option value={item.nome} id={item.id} key={item.id}>
            {item.nome}
          </option>
        );
      })}
    </>
  );
}
