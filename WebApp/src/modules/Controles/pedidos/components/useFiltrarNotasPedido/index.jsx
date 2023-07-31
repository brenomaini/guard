import { useEffect, useState } from "react";
export default function useFiltrarNotasPedido(pedidoID) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const puxarTodasNotas = `${baseURL}/notas?filtro=pedido_id:like:${pedidoID}%`;
  const [notasPedido, setNotasPedido] = useState([]);

  async function loadNotas() {
    await fetch(puxarTodasNotas)
      .then((response) => {
        return response.json();
      })
      .then((todasNotas) => {
        for (const nota of todasNotas.data) {
          setNotasPedido((notas) => [
            ...notas,
            {
              notaID: nota.id,
              numNota: nota.nf,
              qtdNota: nota.quantidade,
            },
          ]);
        }
      });
  }
  useEffect(() => {
    loadNotas();
  }, []);

  return notasPedido;
}
