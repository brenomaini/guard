import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Input from "../inputText";

export default function ModalInserirItem() {
  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  const [inputInserir, setinputInserir] = useState({
    item: "Prenchido via select",
    setor: "",
    status: "",
    nf: "",
    imagemNf: "",
    quantidade: "",
    data: "Automatico via sistema",
    solicitante: "",
    agente: "Automatico Via sistema",
  });
  function handleChange(event) {
    const value = event.target.value;
    setinputInserir({
      ...inputInserir,
      [event.target.name]: value,
    });
  }

  return (
    <>
      <button
        className="  mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-125"
        type="button"
        onClick={() => setShowModalAddItem(true)}
      >
        <PlusCircleIcon
          className="h-12 w-12 text-gran-blue  "
          aria-hidden="true"
        />
      </button>
      {showModalAddItem ? (
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
                    onClick={() => setShowModalAddItem(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Qual item você deseja retirar?
                  </p>
                  <div className="flex w-full justify-around flex-wrap h-96 items-center ">
                    <span>InputSelect ITEM "NotebookG15"</span>
                    <Input
                      name={"Solicitante"}
                      onChange={handleChange}
                      value={inputInserir.solicitante}
                      htmlName={"solicitante"}
                    />
                    <Input
                      name={"Setor destino"}
                      onChange={handleChange}
                      value={inputInserir.setor}
                      htmlName={"setor"}
                    />
                    <Input
                      name={"Status"}
                      onChange={handleChange}
                      value={inputInserir.status}
                      htmlName={"status"}
                    />
                    {/* CRIAR A LSITA */}
                    <Input
                      name={"Nota Fiscal"}
                      onChange={handleChange}
                      value={inputInserir.nf}
                      htmlName={"nf"}
                    />
                    <Input
                      name={"Imagem NF"}
                      onChange={handleChange}
                      value={inputInserir.imagemNf}
                      htmlName={"imagemNf"}
                    />
                    <Input
                      name={"Quantidade"}
                      onChange={handleChange}
                      value={inputInserir.quantidade}
                      htmlName={"quantidade"}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-gran-red bg-opacity-80 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={() => setShowModalAddItem(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-gran-blue bg-opacity-90 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={() => {
                      let estaVazio = true;
                      for (const item in inputInserir) {
                        if (inputInserir[item] == "") {
                          estaVazio = `O campo ${item} não pode estar vazio`;
                        }
                      }
                      if (estaVazio === true) {
                        Swal.fire({
                          title: "Confirmado",
                          text: "Item cadastrado no estoque!",
                          icon: "success",
                          confirmButtonColor: "#0D134C",
                          confirmButtonText: "OK",
                        });
                        setShowModalAddItem(false);
                      } else {
                        Swal.fire({
                          title: "Atenção",
                          text: `${estaVazio}`,
                          icon: "warning",
                          confirmButtonColor: "#DD303E",
                          confirmButtonText: "OK",
                        });
                      }
                    }}
                  >
                    Inserir
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
