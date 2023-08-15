import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { z } from "zod";
import Header from "../../../components/headerGranLover";
import useBuscaItensGranLover from "../../GranLover/hooks/useBuscaItensGranLover";
import HeaderInfosGranLover from "./headerInfosGranLover";
import LinhaPorItem from "./linhaPorItem";

export default function infos() {
  const [showModal, setShowModal] = React.useState(false);
  const [emailGranLover, setEmailGranLover] = React.useState("");
  const itens = useBuscaItensGranLover(emailGranLover);
  console.log(itens);
  const emailSchema = z.object({
    email: z
      .string()
      .email("Digite um e-mail válido")
      .nonempty("E-mail é obrigatório"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });
  function buscarInfos(data) {
    setEmailGranLover(data.email);
    setShowModal(true);
  }

  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      {/*header*/}
      <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
        <Header name="Informações do GranLover" />
      </div>
      {/*body*/}

      <div className="flex w-full justify-around flex-wrap h-96 items-center ">
        <label className="flex flex-col">
          E-mail do GranLover
          <input
            type="text"
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            placeholder="nome.sobrenome@grancursosonline.com.br"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-gran-red opacity-90">
              {errors.email.message}
            </span>
          )}
        </label>
      </div>

      {/*footer*/}
      <div className="flex items-center justify-center p-4 border-t border-solid border-slate-200 rounded-b">
        <button
          className="ease-linear transition-all duration-150 h-full rounded-md text-white bg-gran-blue bg-opacity-90 font-bold uppercase py-2 text-sm   w-24 hover:scale-105"
          type="button"
          onClick={handleSubmit(buscarInfos)}
        >
          Buscar
        </button>
      </div>
      {itens.isIdle || itens.isLoading ? (
        <>
          <div className="table gap-4 row-auto w-full  place-items-center ">
            <HeaderInfosGranLover />
          </div>
          <Skeleton count={4} height={40} />
        </>
      ) : itens.isError && itens.data != undefined ? (
        <div>Error: {itens.error.message}</div>
      ) : (
        <>
          <div className="table gap-4 row-auto w-full  place-items-center ">
            <HeaderInfosGranLover />
            {itens.data.map((item, index) => {
              return <LinhaPorItem item={item} key={index} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
