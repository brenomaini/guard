import { useEffect, useState } from "react";
export default function useFiltrarNotasPedido(pedidoID) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const puxarTodasNotas = `${baseURL}/notas?all`;
  const [notasPedido, setNotasPedido] = useState([]);

  async function loadNotas() {
    await fetch(puxarTodasNotas)
      .then((response) => {
        return response.json();
      })
      .then((todasNotas) => {
        for (const nota of todasNotas) {
          if (nota.pedido.id == pedidoID) {
            setNotasPedido((notas) => [
              ...notas,
              {
                notaID: nota.id,
                numNota: nota.nf,
                qtdNota: nota.quantidade,
              },
            ]);
          }
        }
      });
  }
  useEffect(() => {
    loadNotas();
  }, []);

  return notasPedido;
}
