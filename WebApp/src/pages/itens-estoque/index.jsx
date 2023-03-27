import HeaderControle from "../../components/headerControleEstoque";

import LinhaControle from "../../components/linhaControleDeEstoque";

export default function ItensEstoque() {
  const itemsEstoque = [
    {
      nota: "1234321",
      item: "NOTEBOOK G15",
      setor: "Sucesso do suporte",
      disponivel: 10,
      status: "Aguardando fornecedor",
      quantidade: 15,
      retirado: 5,
      patrimonio: [102030, 1020230, 1231231],
      localizacao: "A2",
    },
    {
      nota: "1234321",
      item: "NOTEBOOK G15",
      setor: "Comercial",
      disponivel: 0,
      status: "Em falta",
      quantidade: 5,
      retirado: 5,
      patrimonio: [102031, 1020230, 1231231],
      localizacao: "A2",
    },
    {
      nota: "1234321",
      item: "NOTEBOOK G15",
      setor: "Administrativo",
      disponivel: 5,
      status: "Disponível",
      quantidade: 7,
      retirado: 2,
      patrimonio: [102032, 1020230, 1231231],
      localizacao: "B2",
    },
  ];
  return (
    <>
      <h1>Pagina Itens Estoque</h1>
      <h2>Pesquisa AQUI</h2>
      <div className="grid grid-cols-9  gap-2 row-auto h-16 w-full  place-items-center  p-4">
        <HeaderControle />
        {itemsEstoque.map((item) => {
          return <LinhaControle item={item} key={item.patrimonio[0]} />;
        })}
      </div>
    </>
  );
}
