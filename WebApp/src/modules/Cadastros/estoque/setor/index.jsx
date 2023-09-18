import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useAuthHeader } from "react-auth-kit";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import CadastroButton from "../../../../components/cadastroButton";
import HeaderCadastroItem from "../components/headerCadastroItem";

export default function cadastroSetor() {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const insereSetorSchema = z.object({
    nomeSetor: z.string().nonempty("Nome da marca é obrigatório"),
    numeroCentroDeCusto: z
      .string()
      .nonempty("O Número do centro de custo é obrigatório"),
  });

  const baseURL = import.meta.env.VITE_BASE_URL;
  const {
    register,
    handleSubmit,
    resetField,

    formState: { errors },
  } = useForm({ resolver: zodResolver(insereSetorSchema) });
  function cadastrar(data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: getToken },
      body: JSON.stringify({
        nome: `${data.nomeSetor}`,
        centro_de_custo: `${data.numeroCentroDeCusto}`,
      }),
    };
    const url = `${baseURL}/setor`;
    try {
      fetch(url, options).then((response) => {
        if (response.ok) {
          resetField("nomeSetor");
          resetField("numeroCentroDeCusto");
          Swal.fire({
            title: "Sucesso",
            text: `Setor ${data.nomeSetor} cadastrado.`,
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
      <HeaderCadastroItem name={"SETOR"} />
      <div className="flex w-full flex-col items-center mt-14 ">
        <label className="flex flex-col text-sm font-medium leading-6 text-black">
          Nome do novo setor
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
            type="text"
            id="NomeSetor"
            placeholder="Digite aqui"
            {...register("nomeSetor")}
          />
          {errors.nomeSetor && (
            <span className="text-guard-red opacity-90">
              {errors.nomeSetor.message}
            </span>
          )}
        </label>
        <div className="flex w-full justify-around h-96 items-center ">
          <label className="flex flex-col text-sm font-medium leading-6 text-black">
            Número do centro de custo
            <input
              className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
              type="text"
              id="CentroDeCusto"
              placeholder="Digite aqui"
              {...register("numeroCentroDeCusto")}
            />
            {errors.numeroCentroDeCusto && (
              <span className="text-guard-red opacity-90">
                {errors.numeroCentroDeCusto.message}
              </span>
            )}
          </label>
        </div>
        <CadastroButton confirmarCadastro={handleSubmit(cadastrar)} />
      </div>
    </div>
  );
}
