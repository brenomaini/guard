import { useQuery } from "react-query";
function useBuscarNotas(pedidoID) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/notas?filtro=pedido_id:like:`;

  return useQuery({
    queryKey: ["notas", pedidoID],
    queryFn: () =>
      fetch(url + pedidoID)
        .then((res) => res.json())
        .then((res) => res.data),
  });
}

export default useBuscarNotas;
