"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "/src/app/button";
import IconDollar from "/src/app/icon-dollar";
import IconPerson from "/src/app/icon-person";
import TextField from "/src/app/text-field";

interface IFormInputs {
  bill: number;
  tipRate: number;
  people: number;
  customTipRate: number;
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
  const [billInput, setBillInput] = useState<string>("");
  const [tipRateInput, setTipRateInput] = useState<string>("");
  const [peopleInput, setPeopleInput] = useState<string>("");

  const [customTip, setCustomTip] = useState<string>("");

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: "onChange" });

  const bill = parseFloat(billInput) || 0;
  const tipRate =
    (customTip ? parseFloat(customTip) / 100 : parseFloat(tipRateInput)) || 0;
  const people = parseInt(peopleInput) || 0;

  const tipTotal = tipRate * bill;
  const total = bill + tipTotal;
  const tipEach = tipTotal / people;
  const totalEach = total / people;

  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col">
      <h1 className="m-8 text-center text-2xl uppercase tracking-[0.5em]">
        spli
        <br />
        tter
      </h1>

      <div className="flex-1 space-y-8 rounded-t-3xl bg-neutral-0 p-8">
        <TextField
          type="number"
          label="Bill"
          startIcon={<IconDollar />}
          placeholder="0"
          errorMessage={errors.bill && "Can't be zero"}
          {...register("bill", { required: true, max: 999_999, min: 0 })}
        />

        <div>
          <div className="flex justify-between">
            <label htmlFor="" className="mb-4 block text-neutral-400">
              Select tip %
            </label>
            {errors.tipRate ? (
              <span className="text-error-500">Can&apos;t be zero</span>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {tipRateOptions.map((option) => {
              const id = "tip-rate-" + option.value;
              return (
                <div key={id}>
                  <label htmlFor={id}>
                    <Button
                      isButton={false}
                      isSelected={
                        !watch("customTipRate") &&
                        watch("tipRate") == option.value
                      }
                    >
                      {option.label}
                    </Button>
                  </label>
                  <input
                    className="hidden"
                    type="radio"
                    id={id}
                    value={option.value}
                    {...register("tipRate")}
                  />
                </div>
              );
            })}
            <TextField
              type="number"
              placeholder="Custom"
              endIcon={<span className="text-2xl text-neutral-400">%</span>}
              {...register("customTipRate", {
                max: 999,
                min: 0,
              })}
            />
          </div>
        </div>

        <TextField
          type="number"
          label="Number of People"
          startIcon={<IconPerson />}
          placeholder="0"
          errorMessage={errors.people && "Can't be zero"}
          {...register("people", { required: true, max: 999_999, min: 0 })}
        />

        <div className="h-full space-y-8 rounded-xl bg-neutral-500 p-6 pt-8">
          {/* tip each */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg text-neutral-0">Tip Amount</div>
              <div className="text-sm text-neutral-300">/ person</div>
            </div>
            <div className="text-4xl text-primary">
              ${tipEach > 0 ? tipEach.toFixed(2) : 0}
            </div>
          </div>

          {/* total each */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg text-neutral-0">Total</div>
              <div className="text-sm text-neutral-300">/ person</div>
            </div>
            <div className="text-4xl text-primary">
              ${totalEach > 0 ? totalEach.toFixed(2) : 0}
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
