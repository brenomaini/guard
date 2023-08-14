import React from "react";

export default function SelectItensPorPagina({ setQtdItensPagina }) {
  return (
    <select
      onChange={(e) => {
        setQtdItensPagina(e.target.value);
      }}
    >
      <option value="15" className="font-light">
        15
      </option>
      <option value="30" className="font-light">
        30
      </option>
      <option value="50" className="font-light">
        50
      </option>
    </select>
  );
}
