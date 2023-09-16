import { ArrowLeftOnRectangleIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";
import Cadastro from "../cadastroDropDown";
import Controle from "../controleDropDown";
import FuncionarioDropDown from "../funcionarioDropDown";
import RelatoriosDropDown from "../relatoriosDropDown";

export default function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <>
      <nav className="flex justify-around font-semibold items-center h-24 w-full bg-black bg-opacity-25 ">
        <Link to="/">
          <img
            src="../src/assets/guard.png"
            className="w-24 ml-2 hover:scale-105"
          ></img>
        </Link>

        {isAuthenticated() ? null : (
          <Link
            className="text-guard-green text-2xl hover:opacity-70 max-sm:text-xl mr-8 "
            to="/login"
          >
            <UsersIcon
              className="h-12 w-12 font-bold text-guard-green "
              aria-hidden="true"
            />
          </Link>
        )}

        {isAuthenticated() ? (
          <>
            <Link
              to="/"
              className="text-guard-green text-2xl hover:opacity-70 max-sm:text-xl mr-8 flex items-center"
            >
              Início
            </Link>
            <Controle />
            <FuncionarioDropDown />
            <Cadastro />
            <RelatoriosDropDown />
            <Link
              className="text-guard-green text-2xl hover:opacity-70 max-sm:text-xl mr-8 flex items-center"
              to="/login"
              onClick={signOut}
            >
              <ArrowLeftOnRectangleIcon
                className="h-6 w-6 font-bold text-guard-green text-2xl hover:cursor-pointer hover:opacity-70 max-sm:text-xl "
                aria-hidden="true"
              />
              Sair
            </Link>
          </>
        ) : null}
      </nav>
    </>
  );
}
