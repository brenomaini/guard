import { LockClosedIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "react-auth-kit";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

export default function login() {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const loginSchema = z.object({
    password: z.string().nonempty("Password é obrigatório"),
    email: z
      .string()
      .email("Digite um e-mail válido")
      .nonempty("Digite o e-mail do funcionario"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function loginUser(data) {
    const form = new FormData();
    form.append("email", data.email);
    form.append("password", data.password);

    const options = {
      method: "POST",
      body: form,
    };
    options.headers = new Headers({
      Accept: "application/json",
    });

    const url = `${baseURL}/login`;

    const response = await fetch(url, options).then((response) => {
      return response.json();
    });

    if (!response.message) {
      reset();
      signIn({
        token: response.authorization.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: data.email },
      });
      Swal.fire({
        title: "Sucesso",
        text: `Agente logado com sucesso.`,
        icon: "success",
        confirmButtonColor: "#0D134C",
        confirmButtonText: "OK",
      });

      setTimeout(() => {
        navigate("/");
      }, 700);
    } else {
      reset();
      Swal.fire({
        title: "Erro!",
        text: `Dados incorretos`,
        icon: "warning",
        confirmButtonColor: "#d80909",
        confirmButtonText: "OK",
      });
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
              Entre em sua conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a
                href=""
                className="font-medium text-black hover:opacity-70 hover:underline"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Não possui uma conta? registre-se.
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
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
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
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
                {errors.password && (
                  <span className="text-guard-red opacity-90">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-guard-green px-3 py-2 text-sm font-semibold text-white hover:bg-opacity-80 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-guard-green"
                onClick={handleSubmit(loginUser)}
              >
                <span className=" inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Logar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
