import { PencilIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import HeaderItens from "../components/headerItens";

export default function itens() {
  const listaItem = [
    {
      patrimonio: "5553",
      nome: "item",
      status: "Disponível",
      localizacao: "A2",
      setor: "TI",
    },
    {
      patrimonio: "33311",
      responsavel: "Joaozim",
      nome: "MouseTeclado",
      status: "Retirado",
      localizacao: "E2",
      setor: "Administrativo",
    },
    {
      patrimonio: "11122",
      nome: "Headset",
      status: "Disponível",
      localizacao: "F2",
      setor: "Financeiro",
    },
  ];
  const [page, setPage] = useState(1);

  // async function buscarItensEstoque() {
  //   const baseURL = import.meta.env.VITE_BASE_URL;
  //   const url = `${baseURL}/pedido?page=${page}`;

  //   const lista = await fetch(url)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       const pedidos = res.data;

  //       setPedidos([...pedidos]);

  //       //colocar um reload na pagina no final da query
  //     });
  // }
  // useEffect(() => {
  //   buscarItensEstoque();
  // }, []);

  return (
    <>
      <div className="table gap-2 row-auto h-16 w-full  text-center p-2">
        <HeaderItens />
        {listaItem.map((item) => {
          return (
            <div className="table-row-group group text-center border even:bg-black even:bg-opacity-20">
              <div className="table-row group-hover:bg-gran-blue group-hover:bg-opacity-25 ">
                <div className="table-cell">{item.patrimonio} </div>
                <div className="table-cell">{item.nome} </div>
                <div
                  className={
                    item.status == "Disponível" ? "bg-green" : "bg-orange"
                  }
                >
                  {item.status.toUpperCase()}
                </div>
                <div className="table-cell"> {item.setor} </div>
                <div className="table-cell"> {item?.responsavel} </div>
                <div className="table-cell ">
                  <PencilIcon
                    className="h-4 w-4 text-gran-blue hover:text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
