import { Link } from "react-router-dom";
import Cadastro from "../cadastroDropDown";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between font-semibold items-center h-24 w-full bg-black bg-opacity-25 ">
        <img
          src="../src/assets/gran_corporativa.png"
          className="w-48 ml-2"
        ></img>
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl"
          to="/"
        >
          Início
        </Link>
        <Cadastro />
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl"
          to="/buscaItem"
        >
          Controle de estoque
        </Link>
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl"
          to="/buscaItem"
        >
          Análise por Item
        </Link>
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl"
          to="/buscaItem"
        >
          Entradas
        </Link>
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl mr-2"
          to="/buscaItem"
        >
          Saídas
        </Link>
      </nav>
    </>
  );
}
