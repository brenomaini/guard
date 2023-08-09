import { useQuery } from "react-query";
function useBuscarPedidos() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/pedido`;

  return useQuery({
    queryKey: ["pedidos"],
    queryFn: () => fetch(url).then((res) => res.json()),

    keepPreviousData: true,
  });
}

export default useBuscarPedidos;
