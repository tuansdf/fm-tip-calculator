import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}
export default function Button({ disabled, isActive, ...rest }: IProps) {
  return (
    <button
      className={clsx(
        "w-full rounded-md p-3 text-2xl uppercase text-neutral-0 transition-colors duration-75 hover:bg-primary hover:text-neutral-500",
        isActive ? "bg-primary text-neutral-500" : "bg-neutral-500"
      )}
      {...rest}
    ></button>
  );
}
