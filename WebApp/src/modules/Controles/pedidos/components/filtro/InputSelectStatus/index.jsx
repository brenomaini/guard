import React, { useState } from "react";

export default function InputSelectStatus() {
  const [statusList, setstatusList] = useState([
    {
      status: "DISPONÍVEL",
    },

    {
      status: "AGUARDANDO FINANCEIRO",
    },
    {
      status: "AGUARDANDO FORNECEDOR",
    },
    {
      status: "AGUARDANDO PATRIMONIAMENTO",
    },
    {
      status: "RETIRADO",
    },
  ]);

  return (
    <>
      <option value="" hidden className="font-light">
        Selecione o status
      </option>
      {statusList.map((status, index) => {
        return (
          <option value={status.status} key={index}>
            {status.status}
          </option>
        );
      })}
    </>
  );
}
