import type { Metadata } from "next";
import "@core/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "../core/providers";
import { cn } from "@core/libraries";
import NavigationCategories from "@core/components/nav";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Starter",
  description: "Create by @nikkoabucejo",
};

type Props = {
  modal: React.ReactNode;
  children: React.ReactNode;
};

const Root = ({ children, modal }: Props) => {
  return (
    <html lang="en">
      <body className={cn(font.className)}>
        <Providers>
          <nav className="overflow-x-auto border-y border-y-black py-3">
            <NavigationCategories />
          </nav>
          <main className="max-w-wrapper p-6">
            {children}
            {modal}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default Root;
