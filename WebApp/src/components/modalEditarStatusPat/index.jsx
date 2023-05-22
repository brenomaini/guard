import { PencilIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export default function modalEditarStatusPatrimonio({ item }) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["application/pdf", "image/png"];
  const itemEstoqueSchema = z.object({
    numeroDeNotas: z.string().nonempty("Quantidade de notas é obrigatório"),
    notas: z.array(
      z.object({
        notaf: z.string().nonempty("Nota é obrigatório"),
        imagemNF: z
          .any()
          .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Tamanho máximo do arquivo é 5MB.`
          )
          .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Só são aceitos arquivos .pdf e .png"
          ),
        quantidadeNaNF: z.string().nonempty("Quantidade é obrigatório"),
      })
    ),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itemEstoqueSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "notas",
  });
  function adicionarNovaNota() {
    append({ notaf: "", imagemNF: "", quantidadeNaNF: "" });
  }
  function removerNota() {
    let index = fields.lastIndexOf();
    remove(index);
  }

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function editarPedido(data) {
    const form = new FormData();
    // form.append("item_id", itemID);
    // form.append("status_id", statusID);
    // form.append("setor_id", setorID);
    form.append("agente", "teste@email.com");

    const options = {
      method: "POST",
      body: form,
    };
    options.headers = new Headers({
      Accept: "application/json",
    });
    const enviarBD = {
      pedido_id: item.id,
      setor_id: item.setor_id,
      item_id: item.item_id,
      status_id: "Aguardando fornecedor (ID do status aqui)",
      notas: data.notas,
      qtd_notas: data.numeroDeNotas,
    };
    console.log(enviarBD);

    // const url = `${baseURL}/estoque`;
    // try {
    //   fetch(url, options).then((response) => {
    //     if (response.ok) {
    //       setShowModalAddItem(false);
    //       reset();

    //       Swal.fire({
    //         title: "Sucesso",
    //         text: `Pedido editado com sucesso.`,
    //         icon: "success",
    //         confirmButtonColor: "#0D134C",
    //         confirmButtonText: "OK",
    //       });
    //     }
    //   });
    // } catch (e) {
    //   Swal.showValidationMessage(`Erro: ${e.message}`);
    // }
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
                  <h3 className="text-3xl font-semibold">Editar pedido</h3>
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
                  <label className="flex flex-col   font-medium my-4 text-slate-500 text-lg leading-relaxed text-black">
                    Quantas notas o pedido gerou?
                    <input
                      className="relative cursor-default  rounded-md bg-white py-1.5 pl-3 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                      type="number"
                      id="numeroDeNotas"
                      placeholder="00"
                      {...register("numeroDeNotas")}
                    />
                    {errors.numeroDeNotas && (
                      <span className="text-gran-red opacity-90">
                        {errors.numeroDeNotas.message}
                      </span>
                    )}
                  </label>

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
                        Aguardando patrimoniamento
                      </span>
                    </label>

                    {fields.map((field, index) => {
                      return (
                        <div
                          key={field.id}
                          className="grid grid-flow-col grid-rows-1 gap-6 border rounded p-4 m-2"
                        >
                          <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                            Nota fiscal
                            <input
                              className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                              type="text"
                              id="notaItem"
                              placeholder="NF do item"
                              {...register(`notas.${index}.notaf`)}
                            />
                            {errors.notas?.[index]?.notaf && (
                              <span className="text-gran-red opacity-90">
                                {errors.notas?.[index]?.notaf.message}
                              </span>
                            )}
                          </label>

                          <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                            Imagem NF
                            <input
                              type="file"
                              id="imagemNF"
                              className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                              {...register(`notas.${index}.imagemNF`)}
                            />
                            {errors.notas?.[index]?.imagemNF && (
                              <span className="text-gran-red opacity-90">
                                {errors.notas?.[index]?.imagemNF.message}
                              </span>
                            )}
                          </label>
                          <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                            Quantidade
                            <input
                              type="number"
                              id="quantidadeNaNF"
                              className="relative w-24 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                              {...register(`notas.${index}.quantidadeNaNF`)}
                            />
                            {errors.notas?.[index]?.quantidadeNaNF && (
                              <span className="text-gran-red opacity-90">
                                {errors.notas?.[index]?.quantidadeNaNF.message}
                              </span>
                            )}
                          </label>
                        </div>
                      );
                    })}
                    <div>
                      <button
                        onClick={adicionarNovaNota}
                        className="bg-gran-blue bg-opacity-80 hover:bg-opacity-100 text-white font-bold p-2 mt-5 w-36 rounded m-2"
                      >
                        Adicionar NF
                      </button>
                      <button
                        onClick={removerNota}
                        className="bg-gran-red bg-opacity-80 hover:bg-opacity-100 text-white font-bold p-2 mt-5 w-36 rounded"
                      >
                        Remover NF
                      </button>
                    </div>
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