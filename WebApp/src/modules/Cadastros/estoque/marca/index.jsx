import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import CadastroButton from "../../../../components/cadastroButton";
import HeaderCadastroItem from "../components/headerCadastroItem";

export default function CadastroMarca() {
  const insereMarcaSchema = z.object({
    nomeMarca: z.string().nonempty("Nome da marca é obrigatório"),
  });

  const baseURL = import.meta.env.VITE_BASE_URL;
  const {
    register,
    handleSubmit,
    resetField,

    formState: { errors },
  } = useForm({ resolver: zodResolver(insereMarcaSchema) });
  function cadastrar(data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: `${data.nomeMarca}` }),
    };
    const url = `${baseURL}/marca?all`;
    try {
      fetch(url, options).then((response) => {
        if (response.ok) {
          resetField("nomeMarca");
          Swal.fire({
            title: "Sucesso",
            text: `Marca ${data.nomeMarca} cadastrada.`,
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
      <HeaderCadastroItem name={"MARCA"} />
      <div className="flex w-full justify-around h-96 items-center ">
        <label className="flex flex-col text-sm font-medium leading-6 text-black">
          Nome da nova marca
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            type="text"
            id="NomeMarca"
            placeholder="Digite aqui"
            {...register("nomeMarca")}
          />
          {errors.nomeMarca && (
            <span className="text-gran-red opacity-90">
              {errors.nomeMarca.message}
            </span>
          )}
        </label>
      </div>
      <CadastroButton confirmarCadastro={handleSubmit(cadastrar)} />
    </div>
  );
}
