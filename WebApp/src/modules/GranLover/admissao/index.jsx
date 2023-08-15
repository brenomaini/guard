import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import Header from "../../../components/headerGranLover";
import InputSelectSetor from "../../../components/inputs/inputSelectSetor";

export default function admissao() {
  const admissaoSchema = z.object({
    emailGranLover: z
      .string()
      .nonempty("E-mail do novo GranLover é obrigatório")
      .email("Formato de e-mail inválido")
      .toLowerCase()
      .refine((emailGranLover) => {
        return emailGranLover.endsWith("@grancursosonline.com.br");
      }, "O e-mail deve ser @grancursosonline.com.br"),
    setor: z.string().nonempty("Setor do GranLover é obrigatório"),
    emailAprovador: z
      .string()
      .nonempty("E-mail do aprovador é obrigatório")
      .email("Formato de e-mail inválido")
      .toLowerCase()
      .refine((email) => {
        return email.endsWith("@grancursosonline.com.br");
      }, "O e-mail deve ser @grancursosonline.com.br"),
    itens: z.array(
      z.object({
        notaf: z.string().nonempty("Nota é obrigatório"),
        patrimonio: z.string(),
      })
    ),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(admissaoSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "itens",
  });
  function adicionarNovoItem() {
    append({ notaf: "", patrimonio: "" });
  }

  function vincular(data) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Não será possível reverter essa alteração!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D134C",
      cancelButtonColor: "#DD303E",
      confirmButtonText: "Sim, vincular itens!",
      cancelButtonText: "Não, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmado",
          text: "Itens vinculados",
          icon: "success",
          confirmButtonColor: "#0D134C",
          confirmButtonText: "OK",
        });
      }
    });
  }
  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      {/*header*/}
      <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
        <Header name="Admissão" />
      </div>
      {/*body*/}

      <p className="my-4 text-slate-500 text-lg leading-relaxed flex justify-center">
        Insira o e-mail do colaborador admitido.
      </p>
      <div className="flex flex-col w-full justify-around flex-grow flex-wrap gap-6  h-full items-center ">
        <div className="flex items-center gap-6 justify-around">
          <label className="flex flex-col text-sm font-medium leading-6 text-black">
            E-mail do novo GranLover
            <input
              className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
              type="text"
              id="solicitante"
              placeholder="Digite aqui"
              {...register("emailGranLover")}
            />
            {errors.emailGranLover && (
              <span className="text-gran-red opacity-90">
                {errors.emailGranLover.message}
              </span>
            )}
          </label>

          <label className="flex flex-col text-sm font-medium leading-6 text-black">
            Setor
            <select
              {...register("setor")}
              className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            >
              <InputSelectSetor />
            </select>
            {errors.setor && (
              <span className="text-gran-red opacity-90">
                {errors.setor.message}
              </span>
            )}
          </label>
          <label className="flex flex-col justify-center text-sm font-medium leading-6 text-black">
            E-mail do GranLover aprovador
            <input
              className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
              type="text"
              id="solicitante"
              placeholder="Digite aqui"
              {...register("emailAprovador")}
            />
            {errors.emailAprovador && (
              <span className="text-gran-red opacity-90">
                {errors.emailAprovador.message}
              </span>
            )}
          </label>
          <button
            onClick={adicionarNovoItem}
            className="bg-gran-blue bg-opacity-50 hover:bg-opacity-80 text-white font-bold p-2 mt-5 w-36 rounded"
          >
            Adicionar item
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 mb-6">
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="grid grid-flow-col grid-rows-1 gap-6 border rounded p-4"
              >
                <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                  Nota fiscal do item
                  <input
                    className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                    type="text"
                    id="notaItem"
                    placeholder="NF do item"
                    {...register(`techs.${index}.notaf`)}
                  />
                  {errors.itens?.[index]?.notaf && (
                    <span className="text-gran-red opacity-90">
                      {errors.itens?.[index]?.notaf.message}
                    </span>
                  )}
                </label>
                <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                  Patrimônio do item
                  <input
                    className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                    type="text"
                    id="Patrimonio"
                    placeholder="Patrimonio do item"
                    {...register(`techs.${index}.patrimonio`)}
                  />
                  {errors.itens?.[index]?.patrimonio && (
                    <span className="text-gran-red opacity-90">
                      {errors.itens?.[index]?.patrimonio.message}
                    </span>
                  )}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/*footer*/}
      <div className="flex items-center justify-around p-4 border-t border-solid border-slate-200 rounded-b">
        <button
          className="text-white bg-gran-blue bg-opacity-90 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
          type="button"
          onClick={handleSubmit(vincular)}
        >
          Vincular itens
        </button>
      </div>
    </div>
  );
}
