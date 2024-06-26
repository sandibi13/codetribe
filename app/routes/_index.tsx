import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Logo } from "~/components/logo";
import Particles from "~/components/particles";
import { Button } from "~/components/ui/button";

export default function IndexPage() {
  return (
    <section className="flex flex-col w-full min-h-screen">
      <header className="absolute z-30 w-full">
        <div className="max-w-6xl px-4 mx-auto sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="mr-4 shrink-0">
              <Logo className="w-8 h-8 stroke-zinc-300 hover:stroke-white duration-500" />
            </Link>

            <nav className="flex grow">
              <ul className="flex flex-wrap items-center justify-end grow">
                <li>
                  <Link
                    className="text-sm font-medium text-zinc-300 hover:text-white duration-500"
                    to="/home"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="container md:flex justify-center items-center px-4 md:px-6 flex-1 mt-40 md:mt-0 lg:mt-0">
        <Particles className="absolute inset-0 -z-10" />

        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <p className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            <span>Cotribe is Open Source</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
            A{" "}
            <span className="font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">
              Community-Driven
            </span>{" "}
            Social Platform for{" "}
            <span className="font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text bg-300% animate-gradient">
              Everyone
            </span>{" "}
            to Connect
          </h1>

          <p className="mt-2">
            Powered by{" "}
            <span className="text-blue-500 font-bold mt-2">Clerk</span>,{" "}
            <span className="text-gray-500 font-bold mt-2">Remix</span>,{" "}
            <span className="text-green-500 font-bold mt-2">Neon</span> and more
          </p>

          <div className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none sm:justify-center sm:flex-row sm:inline-flex">
            <Button size="sm" asChild>
              <Link to="/home">
                Get started <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                to="https://github.com/sandibi13/cotribe"
                target="_blank"
                rel="noreferrer"
              >
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
