import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CSVLink } from "react-csv";
import { useForm } from "react-hook-form";
import { z } from "zod";
import HeaderEntradaSaida from "../components/headerEntradaSaida";
import LinhaEntradaSaida from "../components/linhaEntradaSaida";
import useBuscaSaidasData from "../components/useBuscaSaidasData";

export default function entradas() {
  const itemsEstoque = [{}];
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const dadosItensRetirados = useBuscaSaidasData(dataInicial, dataFinal);
  const emailSchema = z.object({
    inicial: z.string(),

    final: z.string(),
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
    const dataI = Intl.DateTimeFormat("pt-BR").format(
      new Date(data.inicial.replace(/-/g, "/").replace(/T.+/, ""))
    );
    const dataF = Intl.DateTimeFormat("pt-BR").format(
      new Date(data.final.replace(/-/g, "/").replace(/T.+/, ""))
    );

    setDataInicial(dataI);
    setDataFinal(dataF);
  }

  dadosItensRetirados?.data?.forEach((item) => {
    itemsEstoque.push({
      pedido: item.pedido_id,
      nf: item?.notas_fiscais?.nf,
      item: item?.item?.nome,
      setor: item?.setor?.nome,
      aprovador: item?.pedido?.aprovador,
      responsavel: item?.responsavel,
      agente: item.agente,
      data: item.data_update,
      patrimonio: item.patrimonio,
    });
  });

  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="flex gap-2 text-center">
          <label className="flex flex-col  text-sm font-medium leading-6 text-black">
            Data Inicial
            <input
              className="relative w-42 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
              type="date"
              id="inicial"
              placeholder=""
              {...register("inicial")}
            ></input>
            {errors.inicial && (
              <span className="text-guard-red opacity-90">
                {errors.inicial.message}
              </span>
            )}
          </label>
          <label className="flex flex-col  text-sm font-medium leading-6 text-black">
            Data Final
            <input
              className="relative w-42 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
              type="date"
              id="final"
              placeholder=""
              {...register("final")}
            ></input>
            {errors.final && (
              <span className="text-guard-red opacity-90">
                {errors.final.message}
              </span>
            )}
          </label>
          <button
            className="mt-4 bg-guard-green bg-opacity-70 hover:scale-105 text-white font-semibold py-1 px-2 rounded hover:shadow-xl"
            onClick={handleSubmit(buscarInfos)}
          >
            Pesquisar
          </button>
        </div>
        <div className="table gap-2 row-auto h-16 w-full place-items-center  p-2 ">
          <HeaderEntradaSaida />
          {itemsEstoque.map((item, index) => {
            return <LinhaEntradaSaida item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center">
        <CSVLink
          data={itemsEstoque}
          filename="ultimasSaidasDATA.csv"
          className="h-12 w-24 p-4 bg-black bg-opacity-70 text-white text-center flex items-center rounded-md hover:scale-110"
        >
          Exportar CSV
        </CSVLink>
      </div>
    </>
  );
}
