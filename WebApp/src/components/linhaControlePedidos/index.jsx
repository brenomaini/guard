import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React, { useEffect } from "react";
import ModalEditarStatusFornecedor from "../modalEditarStatusFornecedor";
import ModalEditarStatusPat from "../modalEditarStatusPat";
import ModalNotasPedidos from "../modalNotasPedidos";
import Modal from "../modalRetirarItem";

export default function LinhaControle({ item }) {
  useEffect(() => {}, []);

  return (
    <div className="table-row-group group text-center border even:bg-black even:bg-opacity-20 ">
      <div className="table-row group-hover:bg-gran-blue group-hover:bg-opacity-25 ">
        <div
          className={`text-xl text-black table-cell items-center max-sm:text-base `}
        >
          <Modal item={item} />
        </div>
        <div
          className={`text-xl text-black table-cell items-center  max-sm:text-base `}
        >
          <ModalNotasPedidos item={item} />
        </div>
        <div
          className={`text-xl text-black table-cell justify-center items-center p-2 max-sm:text-base w-1/12 `}
        ></div>

        <div className="text-xl flex items-center justify-center p-2 max-sm:text-base">
          {item.item.nome}
          <Tooltip
            content={`Descriçao do item: ${item.item.nome}`}
            placement="top"
          >
            <InformationCircleIcon
              className="h-5 w-5 text-gran-blue cursor-pointer m-2 hover:scale-110"
              aria-hidden="true"
            />
          </Tooltip>
        </div>

        <div className="text-lg table-cell justify-center items-center p-2 max-sm:text-base 3/6">
          {item.setor.nome}
        </div>

        <div
          className={
            item.status.nome == "Disponível"
              ? `text-xl table-cell justify-around border-b border-b-gran-blue items-center text-center p-2 max-sm:text-base w-2/12 bg-green `
              : item.status.nome == "Aguardando fornecedor"
              ? `text-base table-cell justify-around text-center items-center p-2 max-sm:text-base w-2/12 bg-yellow`
              : item.status.nome == "Em falta"
              ? `text-xl table-cell text-white justify-around text-center items-center p-2 max-sm:text-base w-2/12 bg-gran-red`
              : null
          }
        >
          <div className="flex items-center justify-between text-center">
            {item.status.nome}
            {item.status.nome == "Aguardando fornecedor" ? (
              <ModalEditarStatusPat item={item} nome={item.nome} />
            ) : item.status.nome == "Aguardando patrimoniamento" ? (
              <ModalEditarStatusFornecedor item={item} nome={item.nome} />
            ) : null}
          </div>
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
          {item.quantidade - 0}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
          {item.quantidade}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
          0
        </div>

        <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12"></div>
        <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
          <TrashIcon
            className="h-6 w-6 text-gran-blue cursor-pointer  hover:scale-110"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
