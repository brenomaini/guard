import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import HeaderManutencoes from "./headerManutencoes";

import LinhasManutencoes from "./linhasManutencoes";

export default function ModalManutencoes({ idItem }) {
  const [showModal, setShowModal] = React.useState(false);

  //Fazer uma consulta no banco e puxar todos os itens retirados onde a NOTA e o SETOR foram iguais.

  return (
    <>
      <button
        className=" ease-linear transition-all duration-150 max-h-max rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <Tooltip content={`Manutenções realizadas no item`} placement="top">
          <Cog8ToothIcon
            className="w-6 text-guard-green  hover:scale-125 hover:opacity-50"
            aria-hidden="true"
          />
        </Tooltip>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-3/4 my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Manutenções realizadas
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
                <div className=" flex-auto">
                  <div className="table  gap-4 row-auto w-full  place-items-center ">
                    <HeaderManutencoes />
                    <LinhasManutencoes idItem={idItem} />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-guard-green bg-opacity-90 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    OK
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
