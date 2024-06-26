import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { ThemeProvider } from "~/components/theme-provider";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import { dark } from "@clerk/themes";

export const meta: MetaFunction = () => {
  return [
    { title: "Cotribe" },
    {
      name: "description",
      content:
        "Join Cotribe, the ultimate social networking platform to connect, collaborate, and share.",
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "inter, sans-serif" }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: dark,
  },
});
