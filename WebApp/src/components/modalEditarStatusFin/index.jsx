import { PencilIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function modalEditarStatusFin({ item }) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm();

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function editarPedido(data) {
    const form = new FormData();
    form.append("status", "Aguardando fornecedor");
    form.append("agente", "agenteQueEditou@email.com");
    form.append("id", item.id);
    const options = {
      method: "POST",
      body: form,
    };
    options.headers = new Headers({
      Accept: "application/json",
    });

    Swal.fire({
      title: "O Time do financeiro realizou a compra deste item?",
      text: "Não será possível reverter essa alteração!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D134C",
      cancelButtonColor: "#DD303E",
      confirmButtonText: "Sim, o item foi comprado!",
      cancelButtonText: "Não, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${baseURL}/pedido/${item.id}`;
        console.log(url);
        try {
          fetch(url, options).then((response) => {
            if (response.ok) {
              setShowModalAddItem(false);
              reset();

              Swal.fire({
                title: "Confirmado",
                text: "Status editado com sucesso",
                icon: "success",
                confirmButtonColor: "#0D134C",
                confirmButtonText: "OK",
              });
            }
          });
        } catch (e) {
          Swal.showValidationMessage(`Erro: ${e.message}`);
        }
      }
    });
  }

  return (
    <>
      <Tooltip content="Editar status do pedido" placement="top-end">
        <button
          className="ml-4 mb-1 ease-linear transition-all duration-150 hover:scale-125"
          type="button"
          data-tooltip-target="tooltip-default"
          onClick={() => setShowModalAddItem(true)}
        >
          <PencilIcon className="h-4 w-4 text-gran-blue" aria-hidden="true" />
        </button>
      </Tooltip>

      {showModalAddItem ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Editar pedido ID: {item.id}
                  </h3>
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
                <div className="relative flex p-6 flex-col items-center justify-center overflow-y-scroll overflow-x-hidden">
                  <div className="flex w-full justify-around flex-wrap h-full items-center ">
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Item
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
                        {item.item.nome}
                      </span>
                    </label>

                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Novo status
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
                        Aguardando fornecedor
                      </span>
                    </label>
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
                    className="text-white bg-gran-blue font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={handleSubmit(editarPedido)}
                  >
                    Salvar
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
