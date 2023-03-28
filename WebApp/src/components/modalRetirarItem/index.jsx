import { MinusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Input from "../inputText";

export default function ModalRetirarItem({ item }) {
  const [showModal, setShowModal] = React.useState(false);
  const [valuePat, setValuePat] = useState("");
  const [valueApr, setValueApr] = useState("");
  const [valueRec, setValueRec] = useState("");

  function handleChange(event) {
    if (event.target.id == "E-mail do recebedor") {
      setValueRec(event.target.value);
    }
    if (event.target.id == "E-mail do aprovador") {
      setValueApr(event.target.value);
    }
    if (event.target.id == "Patrimônio") {
      setValuePat(event.target.value);
    } else {
      return;
    }
  }

  return (
    <>
      <button
        className="  mr-1 mb-1 ease-linear transition-all duration-150 h-full rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <MinusCircleIcon
          className="h-6 w-6 text-gran-blue rounded-md hover:scale-125"
          aria-hidden="true"
        />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Retirar item</h3>
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
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Você deseja retirar um {item.item}?
                  </p>
                  <div className="flex w-full justify-around flex-wrap h-96 items-center ">
                    <Input
                      name={"E-mail do recebedor"}
                      onChange={handleChange}
                      value={valueRec}
                    />
                    <Input
                      name={"E-mail do aprovador"}
                      onChange={handleChange}
                      value={valueApr}
                    />
                    <Input
                      name={"Patrimônio"}
                      onChange={handleChange}
                      value={valuePat}
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
                  <button
                    className="text-white bg-gran-blue bg-opacity-90 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={() => {
                      alert(
                        "Items retirados para: " +
                          valueRec +
                          "Aprovado por: " +
                          valueApr +
                          "Patrimônio:" +
                          valuePat +
                          "Item:" +
                          item.item +
                          "Setor:" +
                          item.setor
                      );
                      setShowModal(false);
                    }}
                  >
                    Retirar
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
