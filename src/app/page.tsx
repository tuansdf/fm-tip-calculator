"use client";

import { useState } from "react";
import Button from "/src/app/button";
import IconDollar from "/src/app/icon-dollar";
import IconPerson from "/src/app/icon-person";
import TextField from "/src/app/text-field";

export default function Page() {
  const [bill, setBill] = useState<number>(0);
  const [tipRate, setTipRate] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  const tipTotal = tipRate * bill;
  const total = bill + tipTotal;
  const tipEach = tipTotal / people || 0;
  const totalEach = total / people || 0;

  return (
    <div className="flex flex-1 flex-col">
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
          onChange={(e) =>
            setBill(e.target.value ? parseFloat(e.target.value) : 0)
          }
        />

        <div>
          <label htmlFor="" className="mb-4 block text-neutral-400">
            Select tip %
          </label>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Button onClick={() => setTipRate(0.05)}>5%</Button>
            <Button onClick={() => setTipRate(0.1)}>10%</Button>
            <Button onClick={() => setTipRate(0.15)}>15%</Button>
            <Button onClick={() => setTipRate(0.2)}>20%</Button>
            <Button onClick={() => setTipRate(0.5)}>50%</Button>
            <TextField
              type="number"
              min={0}
              max={100}
              placeholder="Custom"
              endIcon={<span className="text-2xl text-neutral-400">%</span>}
              onChange={(e) => {
                const val = e.target.value;
                const tipRate = val ? parseFloat(val) / 100 : 0;
                setTipRate(tipRate);
              }}
            />
          </div>
        </div>

        <TextField
          type="number"
          label="Number of People"
          startIcon={<IconPerson />}
          placeholder="0"
          errorMessage={people === 0 ? "Can't be zero" : ""}
          onChange={(e) =>
            setPeople(e.target.value ? parseInt(e.target.value) : 0)
          }
        />
      </div>
    </div>
  );
}
