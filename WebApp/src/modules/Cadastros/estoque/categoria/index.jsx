import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import CadastroButton from "../../../../components/cadastroButton";
import HeaderCadastroItem from "../components/headerCadastroItem";

export default function CadastroCategoria() {
  const insereCategoriaSchema = z.object({
    nomeCategoria: z.string().nonempty("Nome da categoria é obrigatório"),
  });

  const baseURL = import.meta.env.VITE_BASE_URL;
  const {
    register,
    handleSubmit,
    resetField,

    formState: { errors },
  } = useForm({ resolver: zodResolver(insereCategoriaSchema) });
  const url = `${baseURL}/categoria`;
  function cadastrar(data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: `${data.nomeCategoria}` }),
    };

    try {
      fetch(url, options).then((response) => {
        if (response.ok) {
          resetField("nomeCategoria");
          Swal.fire({
            title: "Sucesso",
            text: `Categoria ${data.nomeCategoria} cadastrada.`,
            icon: "success",
            confirmButtonColor: "#0D134C",
            confirmButtonText: "OK",
          });
        }
      });
    } catch (e) {
      Swal.showValidationMessage(`Erro no cadastro: ${e.message}`);
    }
  }

  return (
    <div className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"CATEGORIA"} />
      <div className="flex w-full justify-around h-96 items-center ">
        <label className="flex flex-col text-sm font-medium leading-6 text-black">
          Nome da nova categoria
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            type="text"
            id="NomeCategoria"
            placeholder="Digite aqui"
            {...register("nomeCategoria")}
          />
          {errors.nomeCategoria && (
            <span className="text-gran-red opacity-90">
              {errors.nomeCategoria.message}
            </span>
          )}
        </label>
      </div>
      <CadastroButton confirmarCadastro={handleSubmit(cadastrar)} />
    </div>
  );
}
