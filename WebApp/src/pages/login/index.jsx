import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function login() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="../src/assets/gran_corporativa.png"
              alt="Logo GRAN"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entre em sua conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Ou{" "}
              <a
                href="https://portal-interno.grancursosonline.com.br/"
                className="font-medium text-black hover:opacity-70"
                target={"_blank"}
              >
                peça ajuda a um administrador
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
                />
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
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a href="#" className="font-medium text-black hover:opacity-70">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-gran-blue px-3 py-2 text-sm font-semibold text-white hover:bg-opacity-80 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-gran-blue"
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
