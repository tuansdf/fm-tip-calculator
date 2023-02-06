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
      <body className={primaryFont.className + " font-bold"}>{children}</body>
    </html>
  );
}
