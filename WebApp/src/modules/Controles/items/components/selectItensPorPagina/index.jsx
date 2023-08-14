import React from "react";

export default function SelectItensPorPagina({ setQtdItensPagina }) {
  return (
    <select
      onChange={(e) => {
        setQtdItensPagina(e.target.value);
      }}
    >
      <option value="25" className="font-light">
        25
      </option>
      <option value="50" className="font-light">
        50
      </option>
      <option value="75" className="font-light">
        75
      </option>
    </select>
  );
}
