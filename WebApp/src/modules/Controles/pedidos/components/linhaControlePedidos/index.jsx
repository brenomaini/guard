import { InformationCircleIcon, TicketIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import ExcluirPedido from "../modais/excluirPedido";
import ModalEditarStatusFin from "../modais/modalEditarStatusFin";
import ModalEditarStatusForn from "../modais/modalEditarStatusForn";
import ModalEditarStatusPat from "../modais/modalEditarStatusPat";
import Modal from "../modais/modalInformacoesPedido";
import ModalNotasPedidos from "../modais/modalNotasPedidos";

export default function LinhaControle({ pedido, ...props }) {
  return (
    <>
      {pedido.enable ? (
        <div className="table-row-group group text-center border even:bg-black even:bg-opacity-20 ">
          <div className="table-row group-hover:bg-guard-green group-hover:bg-opacity-25 ">
            <div
              className={`text-xl text-black table-cell items-center max-sm:text-base `}
            >
              <Modal pedido={pedido} />
            </div>
            <div
              className={`text-xl text-black table-cell items-center  max-sm:text-base `}
            >
              <ModalNotasPedidos pedido={pedido} />
            </div>
            <div
              className={`text-xl text-black table-cell justify-center items-center p-2 max-sm:text-base w-1/12 `}
            >
              {pedido.id}
            </div>

            <div className="text-xl flex items-center justify-center p-2 max-sm:text-base">
              {pedido.item.nome}
              <Tooltip content={`${pedido.item.descricao}`} placement="top">
                <InformationCircleIcon
                  className="h-5 w-5 text-guard-green cursor-pointer m-2 hover:scale-110 hover:opacity-50"
                  aria-hidden="true"
                />
              </Tooltip>
            </div>

            <div className="text-base table-cell font-semibold justify-center items-center p-2 max-sm:text-base 3/6">
              {pedido.setor.nome}
            </div>

            <div
              className={
                pedido.status == "DISPONÍVEL"
                  ? `text-base table-cell border-b border-b-guard-green items-center text-center p-1 max-sm:text-base w-3/12 bg-green font-bold `
                  : pedido.status == "Aguardando fornecedor"
                  ? `text-base table-cell text-center border-b items-center p-1 max-sm:text-base w-3/12 bg-yellow font-bold`
                  : pedido.status == "Em falta"
                  ? `text-base table-cell text-white border-b text-center items-center p-1 max-sm:text-base w-3/12 bg-guard-red font-bold`
                  : pedido.status == "Aguardando financeiro"
                  ? `text-base table-cell text-center border-b items-center p-1 max-sm:text-base w-3/12 bg-orange font-bold`
                  : pedido.status == "Aguardando patrimoniamento"
                  ? `text-base table-cell text-center border-b items-center p-1 max-sm:text-base w-3/12 bg-yellow font-bold`
                  : "null"
              }
            >
              {pedido.status.toUpperCase()}
              {pedido.status == "Aguardando fornecedor" ? (
                <ModalEditarStatusForn
                  pedido={pedido}
                  nome={pedido.item.nome}
                />
              ) : pedido.status == "Aguardando patrimoniamento" ? (
                <ModalEditarStatusPat pedido={pedido} nome={pedido.item.nome} />
              ) : pedido.status == "Aguardando financeiro" ? (
                <ModalEditarStatusFin pedido={pedido} nome={pedido.item.nome} />
              ) : null}
            </div>
            <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
              {pedido.quantidade - pedido.qtdRetirados}
            </div>
            <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
              {pedido.quantidade}
            </div>
            <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
              {pedido.qtdRetirados}
            </div>

            <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12"></div>
            <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
              <Tooltip
                content={` Número do ticket vinculado: ${pedido.numero_ticket_freshdesk}`}
                placement="top"
              >
                <TicketIcon
                  className="h-6 w-6 text-guard-green cursor-pointer  hover:scale-110 hover:opacity-50"
                  aria-hidden="true"
                />
              </Tooltip>
            </div>
            <ExcluirPedido pedido={pedido} />
          </div>
        </div>
      ) : null}
    </>
  );
}
