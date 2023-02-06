import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  isPrimary?: boolean;
  isButton?: boolean;
}

export default function Button({
  children,
  disabled,
  isSelected,
  isPrimary,
  isButton = true,
  ...rest
}: IProps) {
  return isButton ? (
    <button
      className={clsx(
        "w-full rounded-md p-2 text-2xl uppercase transition-colors duration-75 hover:bg-neutral-200 hover:text-neutral-500",
        isSelected || isPrimary
          ? "bg-primary text-neutral-500"
          : "bg-neutral-500 text-neutral-0"
      )}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <div
      className={clsx(
        "w-full cursor-pointer rounded-md p-3 text-center text-2xl uppercase transition-colors duration-75 hover:bg-neutral-200 hover:text-neutral-500",
        isSelected || isPrimary
          ? "bg-primary text-neutral-500"
          : "bg-neutral-500 text-neutral-0"
      )}
    >
      {children}
    </div>
  );
}
