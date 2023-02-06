import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, ReactNode, useId } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  errorMessage?: string;
}

const TextField = forwardRef<HTMLInputElement, IProps>(
  ({ label, startIcon, endIcon, errorMessage, ...rest }, ref) => {
    const inputId = useId();

    return (
      <div className="flex w-full flex-col gap-1">
        {label ? (
          <div className="flex justify-between">
            <label htmlFor={inputId} className="text-neutral-400">
              {label}
            </label>
            {errorMessage ? (
              <span className="text-error-500">{errorMessage}</span>
            ) : null}
          </div>
        ) : null}
        <div className="relative flex w-full items-center">
          <input
            ref={ref}
            id={inputId}
            className={clsx(
              "h-12 w-full rounded-lg border bg-neutral-100 px-3 text-end text-2xl placeholder:text-neutral-400",
              startIcon ? "pl-10" : "pl-3",
              endIcon ? "pr-10" : "pr-3",
              errorMessage ? "border-error-500" : "border-neutral-100"
            )}
            {...rest}
          />
          {startIcon ? <div className="absolute ml-4">{startIcon}</div> : null}
          {endIcon ? (
            <div className="absolute right-0 mr-4">{endIcon}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
