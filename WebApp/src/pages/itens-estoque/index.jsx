import { useState } from "react";
import InputText from "../../components/Inputs/inputText";
import HeaderControle from "../../components/headerControleEstoque";
import LinhaControle from "../../components/linhaControleDeEstoque";
import ModalInserirItem from "../../components/modalInserirNoEstoque";

export default function ItensEstoque() {
  const [itemsEstoque, setItemEstoque] = useState([
    {
      nf: "1234321",
      item: "NOTEBOOK G15",
      setor: "Comercial",
      disponivel: 0,
      status: "Em falta",
      quantidade: 5,
      retirado: 5,
      patrimonio: 102031,
      localizacao: "A2",
    },
    {
      nf: "1234321",
      item: "Headset",
      setor: "Sucesso do suporte",
      disponivel: 10,
      status: "Aguardando fornecedor",
      quantidade: 15,
      retirado: 5,
      patrimonio: 102030,
      localizacao: "A2",
    },
    {
      nf: "1234321",
      item: "TARARA",
      setor: "Administrativo",
      disponivel: 5,
      status: "Disponível",
      quantidade: 7,
      retirado: 2,
      patrimonio: 102032,
      localizacao: "B2",
    },
  ]);

  function insereItemEstoque(item) {
    setItemEstoque((itemsEstoque) => [...itemsEstoque, item]);
  }

  function filtrarEstoque() {
    let selectText = `SELECT * FROM ItensEstoque WHERE `;
    // for (const item in filter) {
    //   if (filter[item] != "") {
    //     selectText = selectText + `${item} = ${filter[item]} AND `;
    //   }
    // }
    console.log("Filtrando");
  }
  // useEffect(() => {
  //   buscarEstoque();
  // }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <div className="flex h-16  gap-8">
          <InputText name={"Setor/CC"} onChange={""} htmlName={"setor"} />
          <InputText
            name={"Solicitante"}
            onChange={""}
            htmlName={"solicitante"}
          />
          <InputText name={"Ítem"} onChange={""} htmlName={"item"} />
        </div>
        <div className="flex h-28 gap-8">
          <InputText name={"Nota"} onChange={""} htmlName={"nf"} />
          <InputText
            name={"Patrimônio"}
            onChange={""}
            htmlName={"patrimonio"}
          />
          <InputText name={"Status"} onChange={""} htmlName={"status"} />
          <InputText name={"Recebedor"} onChange={""} htmlName={"recebedor"} />
        </div>
        <button
          className="mb-8 bg-gran-red bg-opacity-70 hover:scale-105 text-white font-semibold py-1 px-2 rounded hover:shadow-xl   "
          onClick={filtrarEstoque}
        >
          Pesquisar
        </button>
      </div>

      <ModalInserirItem insereItemEstoque={insereItemEstoque} />

      <div className="table  gap-2 row-auto h-16 w-full  place-items-center p-2 ">
        <HeaderControle />
        {itemsEstoque.map((item) => {
          return <LinhaControle item={item} key={item.patrimonio} />;
        })}
      </div>
    </>
  );
}
