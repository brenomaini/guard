import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import CadastroButton from "../../../../components/cadastroButton";

export default function cadastroAgente() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const inseteUserSchema = z.object({
    nome: z.string().nonempty("Nome é obrigatório"),
    cargo: z.string().nonempty("Cargo do GranLover é obrigatório"),
    acesso: z.string().nonempty("Nível de acesso é obrigatório"),
  });
  const {
    register,
    handleSubmit,
    resetField,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(inseteUserSchema),
  });

  // const [item, setitem] = useState({
  //   data: "Automatico via sistema",
  //   agente: "Automatico Via sistema",
  // });

  function confirmarCadastro(data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: data.nome,
        cargo: data.cargo,
        acesso: data.acesso,
      }),
    };
    console.log(options);

    const url = `${baseURL}/item?all`;
    try {
      fetch(url, options).then((response) => {
        if (response.ok) {
          resetField("nome");
          resetField("cargo");
          resetField("acesso");

          Swal.fire({
            title: "Sucesso",
            text: `Usuário ${data.nome} cadastrado.`,
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
    <form className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <div className="text-white font-semibold text-4xl bg-gran-blue  flex justify-center items-center p-6 w-full">
        CADASTRO DE AGENTE
      </div>
      <div className="flex flex-col items-center justify-around h-1/2 w-full flex-wrap gap-2">
        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Nome do novo usuário
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            type="text"
            id="nome"
            placeholder="Nome do agente"
            {...register("nome")}
          />
          {errors.nome && (
            <span className="text-gran-red opacity-90">
              {errors.nome.message}
            </span>
          )}
        </label>

        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Cargo
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            type="text"
            id="cargo"
            placeholder="Cargo do agente"
            {...register("cargo")}
          />
          {errors.cargo && (
            <span className="text-gran-red opacity-90">
              {errors.cargo.message}
            </span>
          )}
        </label>
        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Nível de acesso
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            type="text"
            id="cargo"
            placeholder="Nível de acesso do agente"
            {...register("acesso")}
          />
          {errors.acesso && (
            <span className="text-gran-red opacity-90">
              {errors.acesso.message}
            </span>
          )}
        </label>
      </div>
      <CadastroButton confirmarCadastro={handleSubmit(confirmarCadastro)} />
    </form>
  );
}
