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

const Root: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("Hello World", font.className)}>
        <Providers>
          <nav className="overflow-x-auto border-y border-y-black py-3">
            <NavigationCategories />
          </nav>
          <main className="max-w-wrapper">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default Root;
