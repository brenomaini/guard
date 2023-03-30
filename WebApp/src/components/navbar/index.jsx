import { UsersIcon } from "@heroicons/react/24/solid";
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
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl "
          to="/"
        >
          Início
        </Link>
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl "
          to="/controleEstoque"
        >
          Controle de estoque
        </Link>
        <Cadastro />
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl "
          to="/entradas"
        >
          Entradas
        </Link>
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl mr-8 "
          to="/saidas"
        >
          Saídas
        </Link>
        <Link
          className="text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl mr-8 "
          to="/login"
        >
          <UsersIcon
            className="h-12 w-12 font-bold text-gran-blue "
            aria-hidden="true"
          />
        </Link>
      </nav>
    </>
  );
}
