import { useQuery } from "react-query";
function useBuscarPedidos(page) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/pedido?pages&page=${page}&ordenarDesc=id`;

  return useQuery({
    queryKey: ["pedidos", page],
    queryFn: () => fetch(url).then((res) => res.json()),
    keepPreviousData: true,
  });
}

export default useBuscarPedidos;
