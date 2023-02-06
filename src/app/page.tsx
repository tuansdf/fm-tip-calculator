"use client";

import { useForm } from "react-hook-form";
import Button from "/src/app/button";
import IconDollar from "/src/app/icon-dollar";
import IconPerson from "/src/app/icon-person";
import TextField from "/src/app/text-field";

interface IFormInputs {
  bill?: number;
  people?: number;
  radioTipRate?: number;
  customTipRate?: number;
}

const tipRateOptions = [
  {
    label: "5%",
    value: 0.05,
  },
  {
    label: "10%",
    value: 0.1,
  },
  {
    label: "15%",
    value: 0.15,
  },
  {
    label: "20%",
    value: 0.2,
  },
  {
    label: "50%",
    value: 0.5,
  },
];

export default function Page() {
  const {
    setValue,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: "onChange" });

  const bill = Number(watch("bill"));
  const people = Number(watch("people"));
  const radioTipRate = Number(watch("radioTipRate"));
  const customTipRate = Number(watch("customTipRate")) / 100;

  const tipRate = radioTipRate || customTipRate;

  const tip = bill * tipRate;
  const total = bill + tip;
  const tipEach = tip / people || 0;
  const totalEach = total / people || 0;

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-8 lg:max-w-screen-lg lg:items-center lg:justify-center">
      <h1 className="m-8 text-center text-2xl uppercase tracking-[0.5em] text-neutral-400 lg:m-0 lg:mb-20">
        spli
        <br />
        tter
      </h1>

      <div className="flex-1 space-y-8 rounded-t-3xl bg-neutral-0 p-8 lg:grid lg:flex-initial lg:grid-cols-2 lg:gap-10 lg:space-y-0 lg:rounded-3xl lg:p-10">
        <div className="space-y-8 lg:space-y-12">
          <TextField
            type="number"
            label="Bill"
            startIcon={<IconDollar />}
            placeholder="0"
            {...register("bill")}
          />

          <div>
            <label htmlFor="" className="mb-4 block text-neutral-400">
              Select tip %
            </label>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {tipRateOptions.map((option) => {
                const id = "tip-rate-" + option.value;
                return (
                  <div key={id}>
                    <label htmlFor={id}>
                      <Button
                        isButton={false}
                        isSelected={radioTipRate === option.value}
                      >
                        {option.label}
                      </Button>
                    </label>
                    <input
                      className="hidden"
                      type="radio"
                      id={id}
                      value={option.value}
                      {...register("radioTipRate", {
                        onChange: () => setValue("customTipRate", undefined),
                      })}
                    />
                  </div>
                );
              })}
              <TextField
                type="number"
                placeholder="Custom"
                endIcon={<span className="text-2xl text-neutral-400">%</span>}
                {...register("customTipRate", {
                  onChange: () => setValue("radioTipRate", undefined),
                })}
              />
            </div>
          </div>

          <TextField
            type="number"
            label="Number of People"
            startIcon={<IconPerson />}
            placeholder="0"
            errorMessage={!people ? "Can't be zero" : ""}
            {...register("people")}
          />
        </div>

        <div className="h-full space-y-8 rounded-xl bg-neutral-500 p-6 pt-8 lg:flex lg:flex-col lg:p-10 lg:pt-14">
          <div className="space-y-8 lg:flex-1 lg:space-y-12">
            {/* tip each */}
            <div className="flex items-center gap-2">
              <div className="flex-none">
                <div className="text-md text-neutral-0">Tip Amount</div>
                <div className="text-xs text-neutral-300 lg:text-sm">
                  / person
                </div>
              </div>
              <div className="flex-1 overflow-visible text-end text-3xl text-primary lg:text-5xl">
                ${tipEach.toFixed(2)}
              </div>
            </div>

            {/* total each */}
            <div className="flex items-center gap-2">
              <div className="flex-none">
                <div className="text-md text-neutral-0">Total</div>
                <div className="text-xs text-neutral-300 lg:text-sm">
                  / person
                </div>
              </div>
              <div className="flex-1 text-end text-3xl text-primary lg:text-5xl">
                ${totalEach.toFixed(2)}
              </div>
            </div>
          </div>

          {/* reset */}
          <Button onClick={() => reset()} isPrimary>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
