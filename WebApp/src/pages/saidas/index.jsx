import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { CSVLink } from "react-csv";
import HeaderEntradaSaida from "../../components/headerEntradaSaida";
import LinhaEntradaSaida from "../../components/linhaEntradaSaida";

export default function saidas() {
  const [itemsEstoque, setItemEstoque] = useState([
    {
      pedido: "4",
      nf: "1234321",
      item: "NOTEBOOK G15",
      setor: "Comercial",
      aprovador: "Zé",
      responsavel: "Maria",
      agente: "asadsa",
      data: "15/02/2023",
      patrimonio: 102031,
    },
    {
      pedido: "5",
      nf: "1234321",
      item: "NOTEBOOK G15",
      setor: "Comercial",
      aprovador: "Zé",
      responsavel: "Maria",
      agente: "Sua",
      data: "12/02/2023",
      patrimonio: 102030,
    },
    {
      pedido: "6",
      nf: "123555",
      item: "NOTEBOOK G15",
      setor: "Customer Success",
      aprovador: "Jão",
      responsavel: "Lalala",
      agente: "Nois",
      data: "10/02/2023",
      patrimonio: 102032,
    },
  ]);
  const [filter, setFilter] = useState({
    setor: "",
    solicitante: "",
    item: "",
    nf: "",
    patrimonio: "",
    status: "",
  });

  function filtrarEstoque() {
    let selectText = `SELECT * FROM ItensEstoque WHERE `;
    for (const item in filter) {
      if (filter[item] != "") {
        selectText = selectText + `${item} = ${filter[item]} AND `;
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="table gap-2 row-auto h-16 w-full place-items-center  p-2 ">
          <HeaderEntradaSaida />
          {itemsEstoque.map((item) => {
            return <LinhaEntradaSaida item={item} key={item.patrimonio} />;
          })}
        </div>
      </div>
      <div className="flex flex-row-reverse items-center">
        <button className=" hover:scale-110">
          <ChevronRightIcon
            className="h-12 w-12 bg-gran-blue bg-opacity-70 text-white rounded-md m-8"
            aria-hidden="true"
          />
        </button>
        <button className=" hover:scale-110 ">
          <ChevronLeftIcon
            className="h-12 w-12 bg-gran-blue bg-opacity-70 text-white rounded-md ml-4 "
            aria-hidden="true"
          />
        </button>

        <CSVLink
          data={itemsEstoque}
          filename="ultimasEntradasDATA.csv"
          className="h-12 w-24 p-4 bg-black bg-opacity-70 text-white text-center flex items-center rounded-md hover:scale-110"
        >
          Exportar CSV
        </CSVLink>
      </div>
    </>
  );
}
