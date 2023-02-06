import { ReactNode } from "react";
import "./globals.css";
import { primaryFont } from "/src/app/fonts";

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={
          primaryFont.className +
          " flex min-h-screen flex-col bg-neutral-200 font-bold text-neutral-500"
        }
      >
        {children}
      </body>
    </html>
  );
}
