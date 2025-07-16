import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "Juris Power Landing Page"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body className={``}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
