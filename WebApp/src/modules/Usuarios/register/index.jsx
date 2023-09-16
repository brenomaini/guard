import { LockClosedIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

export default function register() {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const registerSchema = z
    .object({
      nome: z.string().nonempty("Nome do agente é obrigatório"),
      // privilegio: z.string().nonempty("Privilégios do agente é obrigatório"),
      password: z.string().nonempty("Senha é obrigatório"),
      cpassword: z.string().nonempty("Confirma senha é obrigatório"),
      email: z
        .string()
        .email("Digite um e-mail válido")
        .nonempty("Digite o e-mail do funcionario"),
    })
    .refine(
      (array) => {
        if (array.password == array.cpassword) {
          return true;
        }
      },
      {
        message: "Senha não confere.",
        path: ["password"],
      }
    );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function registerUser(data) {
    const form = new FormData();
    form.append("email", data.email);
    form.append("name", data.nome);
    form.append("password", data.password);

    const options = {
      method: "POST",
      body: form,
    };
    options.headers = new Headers({
      Accept: "application/json",
    });

    const url = `${baseURL}/register`;
    const response = await fetch(url, options).then((response) => {
      return response.json();
    });

    if (response.message == "User created successfully") {
      reset();
      Swal.fire({
        title: "Sucesso",
        text: `Agente registrado com sucesso.`,
        icon: "success",
        confirmButtonColor: "#0D134C",
        confirmButtonText: "OK",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      Swal.showValidationMessage(`Erro: ${response.statusText}`);
    }
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto w-auto h-28"
              src="../src/assets/guard.png"
              alt="Logo GUARD"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Registre um novo agente
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className="relative block w-full rounded-t-md border-0 py-2  ring-1 ring-inset  outline-offset-1 focus:z-10   sm:text-sm sm:leading-6"
                  placeholder="Nome do agente"
                  {...register("nome")}
                />
                {errors.nome && (
                  <span className="text-guard-red opacity-90">
                    {errors.nome.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email-address">Email</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-2  ring-1 ring-inset  outline-offset-1 focus:z-10   sm:text-sm sm:leading-6"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-guard-red opacity-90">
                    {errors.email.message}
                  </span>
                )}
              </div>
              {/* <div>
                <label htmlFor="Tipo de conta" className="sr-only">
                  Tipo de conta
                </label>
                <input
                  id="Tipo de conta"
                  name="TipoDeConta"
                  type="text"
                  required
                  className="relative block w-full rounded-b-md border-0 py-2 ring-1 ring-inset outline-offset-1 focus:z-10  sm:text-sm sm:leading-6"
                  placeholder="Administrador,editor,visualizador.."
                  {...register("privilegio")}
                />
              </div> */}
              <div>
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-2 ring-1 ring-inset outline-offset-1 focus:z-10  sm:text-sm sm:leading-6"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
              <div>
                <label htmlFor="cpassword">Confirmar senha</label>
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-2 ring-1 ring-inset outline-offset-1 focus:z-10  sm:text-sm sm:leading-6"
                  placeholder="Password"
                  {...register("cpassword")}
                />
              </div>
            </div>
            {errors.password && (
              <span className="text-guard-red opacity-90">
                {errors.password.message}
              </span>
            )}

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a
                  className="font-medium text-black hover:opacity-70"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Já é usuário? Faça o login.
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-guard-green px-3 py-2 text-sm font-semibold text-white hover:bg-opacity-80 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-guard-green"
                onClick={handleSubmit(registerUser)}
              >
                <span className=" inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
