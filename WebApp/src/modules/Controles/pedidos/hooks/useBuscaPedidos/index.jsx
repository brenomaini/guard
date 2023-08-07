import { useQuery } from "react-query";
function useBuscarPedidos({ page }) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/pedido?page=`;

  return useQuery({
    queryKey: ["pedidos", page],
    queryFn: () =>
      fetch(url + page)
        .then((res) => res.json())
        .then((res) => res.data),
    keepPreviousData: true,
  });
}

export default useBuscarPedidos;
