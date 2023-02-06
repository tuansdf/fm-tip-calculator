import clsx from "clsx";
import { InputHTMLAttributes, ReactNode, useId } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
}

export default function TextField({ label, icon, ...rest }: IProps) {
  const inputId = useId();

  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={inputId} className="text-neutral-400">
          {label}
        </label>
      ) : null}
      <div className="relative flex w-full items-center">
        <input
          id={inputId}
          className={clsx(
            "w-full rounded-lg bg-neutral-100 p-3 text-end text-xl lg:text-2xl",
            icon ? "pl-8" : "pl-3"
          )}
          {...rest}
        />
        {icon ? <div className="absolute ml-4">{icon}</div> : null}
      </div>
    </div>
  );
}
