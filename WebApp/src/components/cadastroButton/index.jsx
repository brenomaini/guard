export default function CadastroButton({ confirmarCadastro }) {
  return (
    <button
      className="bg-gran-red bg-opacity-70 hover:scale-105 text-white font-bold py-2 px-4 rounded w-32 "
      onClick={confirmarCadastro}
    >
      Cadastrar
    </button>
  );
}
