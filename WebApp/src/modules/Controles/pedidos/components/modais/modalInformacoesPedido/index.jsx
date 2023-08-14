import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import LabelSemEdicao from "./labelSemEdicao";

export default function ModalInformacoesPedido({ pedido }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="  mr-1 mb-1 ease-linear transition-all duration-150 h-full rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <Tooltip content={`Informações do pedido`} placement="top-end">
          <InformationCircleIcon
            className="h-6 w-6 text-gran-blue rounded-md hover:scale-125 hover:opacity-50"
            aria-hidden="true"
          />
        </Tooltip>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Informações do pedido
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed font-bold underline">
                    Pedido número: {pedido.id}
                  </p>
                  <div className="flex flex-col w-full justify-around h-96 items-center ">
                    <span></span>
                    <LabelSemEdicao
                      info={pedido.motivo}
                      titulo={"Motivo do pedido"}
                    />

                    <LabelSemEdicao
                      info={pedido.numero_ticket_freshdesk}
                      titulo={"Ticket Relacionado"}
                    />
                    <LabelSemEdicao
                      info={pedido.solicitante}
                      titulo={"Solicitante"}
                    />
                    <LabelSemEdicao
                      info={pedido.aprovador}
                      titulo={"Aprovador"}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-gran-red bg-opacity-80 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
