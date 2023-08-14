import { useQuery, useQueryClient } from "react-query";

function useBuscarPedidos(page, filtro, qtdItensPagina) {
  const queryClient = useQueryClient();

  const baseURL = import.meta.env.VITE_BASE_URL;
  let url = `${baseURL}/pedido?pages=${qtdItensPagina}&page=${page}&ordenarDesc=id`;
  if (filtro != "" && filtro != undefined) {
    url = `${baseURL}/pedido?pages=${qtdItensPagina}&page=${page}&ordenarDesc=id&filtro=`;

    filtro.forEach((opcao) => {
      url += opcao?.campo + ":like:" + opcao?.valorProc + ";";
    });
    url = url.substring(0, url.length - 1);
    queryClient.invalidateQueries({ queryKey: ["infosPaginacaoPedido"] });
  }

  return useQuery({
    queryKey: ["pedidos", page, filtro, qtdItensPagina],
    queryFn: () => fetch(url).then((res) => res.json()),
    keepPreviousData: true,
  });
}

export default useBuscarPedidos;
