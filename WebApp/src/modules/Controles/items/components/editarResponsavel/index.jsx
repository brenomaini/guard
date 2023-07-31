import { PencilIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import SelectOptions from "../selectOptions";

export default function editarResponsavel({ item }) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const itemResponsavelSchema = z
    .object({
      status: z.string().nonempty("Selecione o novo status do item."),
      responsavel: z
        .string()
        .email("Digite um e-mail válido")
        .optional()
        .or(z.literal("")),
    })
    .refine(
      (data) =>
        (data.status === "RETIRADO" && data.responsavel !== "") ||
        data.status != "RETIRADO",
      {
        message: "Email obrigatório para item retirado.",
        path: ["responsavel"],
      }
    );

  const {
    register,

    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itemResponsavelSchema),
  });

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function editarItem(data) {
    const form = new FormData();
    form.append("responsavel", data?.responsavel ?? "");
    form.append("status", data.status);
    form.append("_method", "PATCH");
    form.append("agente", "emailagente@gran.com");

    const options = {
      method: "POST",
      body: form,
    };

    const url = `${baseURL}/itemestoque/${item.id}`;

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          setShowModalAddItem(false);
          reset();
          Swal.fire({
            title: "Sucesso",
            text: `Pedido editado com sucesso.`,
            icon: "success",
            confirmButtonColor: "#0D134C",
            confirmButtonText: "OK",
          });
        }
      })
      .then((result) => console.log(result))
      .catch((error) => Swal.showValidationMessage(`Erro: ${error}`));
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
          <PencilIcon
            className="h-4 w-4 text-gran-blue hover:text-white"
            aria-hidden="true"
          />
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
                    Editar responsável pelo item
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
                <div className="relative flex p-4 flex-col items-center justify-center">
                  <div className="flex w-full flex-col justify-center flex-wrap h-full items-center ">
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Item
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
                        {item.item.nome}
                      </span>
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Patrimônio
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
                        {item.patrimonio}
                      </span>
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Status
                      <select
                        {...register("status")}
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                      >
                        <SelectOptions />
                      </select>
                      {errors.status && (
                        <span className="text-gran-red opacity-90">
                          {errors.status.message}
                        </span>
                      )}
                    </label>

                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      E-mail do recebedor
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                        type="text"
                        id="responsavel"
                        placeholder="Digite aqui"
                        {...register("responsavel")}
                      />
                      {errors.responsavel && (
                        <span className="text-gran-red opacity-90">
                          {errors.responsavel.message}
                        </span>
                      )}
                    </label>

                    <div></div>
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
                    onClick={handleSubmit(editarItem)}
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
