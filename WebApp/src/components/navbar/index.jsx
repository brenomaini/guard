import { UsersIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Cadastro from "../cadastroDropDown";
import Controle from "../controleDropDown";
import FuncionarioDropDown from "../funcionarioDropDown";
import RelatoriosDropDown from "../relatoriosDropDown";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between font-semibold items-center h-24 w-full bg-black bg-opacity-25 ">
        <Link to="/">
          <img src="../src/assets/guard.png" className="w-24 ml-2"></img>
        </Link>
        <Link
          className="text-guard-green text-2xl hover:opacity-70 max-sm:text-xl "
          to="/"
        >
          Início
        </Link>

        <Controle />
        <FuncionarioDropDown />
        <Cadastro />
        <RelatoriosDropDown />
        <Link
          className="text-guard-green text-2xl hover:opacity-70 max-sm:text-xl mr-8 "
          to="/login"
        >
          <UsersIcon
            className="h-12 w-12 font-bold text-guard-green "
            aria-hidden="true"
          />
        </Link>
      </nav>
    </>
  );
}
