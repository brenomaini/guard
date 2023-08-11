import { PencilIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { z } from "zod";
import Contador from "./contador";

export default function modalEditarStatusForn({ pedido, atualizar }) {
  const queryClient = useQueryClient();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    append({
      nf: "",
      file: "",
      qtd: "",
      idItem: pedido.item_id,
      idPedido: pedido.id,
    });
  };

  const handleDecrement = () => {
    if (count === 0) {
    } else {
      setCount(count - 1);

      let index = fields.lastIndexOf();
      remove(index);
    }
  };

  const baseURL = import.meta.env.VITE_BASE_URL;
  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["application/pdf", "image/png"];
  const itemEstoqueSchema = z
    .object({
      numeroDeNotas: z.string().refine(() => {
        if (count != 0) {
          return true;
        }
      }, "Quantidade de notas é obrigatório"),
      notas: z.array(
        z.object({
          nf: z.string().nonempty("Nota é obrigatório"),
          file: z
            .any()
            .refine(
              (files) => files?.[0]?.size <= MAX_FILE_SIZE,
              `Tamanho máximo do arquivo é 5MB.`
            )
            .refine(
              (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
              "Só são aceitos arquivos .pdf e .png"
            ),
          qtd: z.string().nonempty("Quantidade é obrigatório"),
          idItem: z.any(),
          idPedido: z.any(),
        })
      ),
    })
    .refine(
      (array) => {
        if (array.notas.length == count) {
          return true;
        }
      },
      {
        message: "Número de notas diferente do informado.",
        path: ["numeroDeNotas"],
      }
    )
    .refine(
      (array) => {
        let qtdTotal = 0;
        for (const nota of array.notas) {
          qtdTotal = qtdTotal + parseInt(nota.qtd, 10);
        }

        if (qtdTotal == pedido.quantidade) {
          return true;
        }
      },
      {
        message:
          "Soma de itens diferente do total informado no pedido. Verifique as quantidades",
        path: ["notas[0].qtd"],
      }
    );

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itemEstoqueSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "notas",
  });

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function editarPedido(data) {
    setValue("numeroDeNotas", count);
    const notas = JSON.stringify(data.notas);
    const form = new FormData();
    const novaData = Intl.DateTimeFormat("pt-BR").format(new Date());
    form.append("qtdNotas", count);
    form.append("status", "Aguardando patrimoniamento");
    form.append("agente", "agente@email.com");
    form.append("_method", "PATCH");
    form.append("data_update", novaData);
    form.append("notasData", notas);
    data.notas.forEach((file, i) => {
      form.append(`notasFile${i}`, file["file"][0]);
    });

    const options = {
      method: "POST",
      body: form,
    };

    const url = `${baseURL}/pedido/${pedido.id}`;

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          setShowModalAddItem(false);
          reset();
          queryClient.invalidateQueries({ queryKey: ["pedidos"] });
          Swal.fire({
            title: "Sucesso",
            text: `Pedido editado com sucesso.`,
            icon: "success",
            confirmButtonColor: "#0D134C",
            confirmButtonText: "OK",
          });
        }
      })
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
                  <label className="flex flex-col items-center font-medium my-4 text-slate-500 text-lg leading-relaxed text-black">
                    Quantas notas o pedido gerou?
                    <input
                      className="hidden"
                      type="text"
                      id="numeroDeNotas"
                      placeholder="00"
                      {...register("numeroDeNotas")}
                    />
                    <span className=" w-16 text-center flex items-center justify-center cursor-default font-bold text-4xl rounded-md bg-white p-2 text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
                      {count}
                    </span>
                    <Contador
                      handleIncrement={handleIncrement}
                      handleDecrement={handleDecrement}
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
                        {pedido.item.nome}
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
                              {...register(`notas.${index}.nf`)}
                            />
                            {errors.notas?.[index]?.nf && (
                              <span className="text-gran-red opacity-90">
                                {errors.notas?.[index]?.nf.message}
                              </span>
                            )}
                          </label>

                          <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                            Imagem NF
                            <input
                              type="file"
                              id="file"
                              className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                              {...register(`notas.${index}.file`)}
                            />
                            {errors.notas?.[index]?.file && (
                              <span className="text-gran-red opacity-90">
                                {errors.notas?.[index]?.file.message}
                              </span>
                            )}
                          </label>
                          <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                            Quantidade
                            <input
                              min="0"
                              type="number"
                              id="qtd"
                              className="relative w-24 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                              {...register(`notas.${index}.qtd`)}
                            />
                            {errors.notas?.[index]?.qtd && (
                              <span className="text-gran-red opacity-90">
                                {errors.notas?.[index]?.qtd.message}
                              </span>
                            )}
                          </label>
                        </div>
                      );
                    })}
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
