import { useQuery } from "react-query";
function useInformacoesPaginacaoPedido() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/pedido?pages`;
  return useQuery({
    queryKey: ["infosPaginacaoPedido"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
}

export default useInformacoesPaginacaoPedido;
