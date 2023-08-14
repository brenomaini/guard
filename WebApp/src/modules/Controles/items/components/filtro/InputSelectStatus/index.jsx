import React, { useState } from "react";

export default function InputSelectStatus() {
  const [statusList, setstatusList] = useState([
    {
      status: "DISPONÍVEL",
    },
    {
      status: "RETIRADO",
    },

    {
      status: "MANUTENÇÃO",
    },
    {
      status: "QUEBRADO",
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
