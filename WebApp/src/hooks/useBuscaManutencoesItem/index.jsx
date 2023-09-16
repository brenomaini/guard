import { useQuery } from "react-query";
function useBuscaManutencoesItem(idItem) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/manutencoes?filtro=itens_estoque_id:like:${idItem}`;
  console.log(idItem);

  return useQuery({
    queryKey: ["manutencoes", idItem],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
}

export default useBuscaManutencoesItem;
