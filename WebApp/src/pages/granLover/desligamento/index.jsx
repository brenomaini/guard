import React, { useState } from "react";
import Input from "../../../components/Inputs/inputText";

export default function desligamento() {
  const [inputs, setInputs] = useState({
    emailDesligado: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setInputs({
      ...inputs,
      [event.target.name]: value,
    });
  }
  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      {/*header*/}
      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        <h3 className="text-3xl font-semibold">Desligamento</h3>
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
          Desligamento
        </p>
        <div className="flex w-full justify-around flex-wrap h-96 items-center ">
          <Input
            name={"E-mail do GranLover desligado"}
            onChange={handleChange}
            value={inputs.emailDesligado}
            htmlName={"emailDesligado"}
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
  );
}
