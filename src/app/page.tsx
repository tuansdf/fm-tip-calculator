import Button from "/src/app/button";
import IconDollar from "/src/app/icon-dollar";
import IconPerson from "/src/app/icon-person";
import TextField from "/src/app/text-field";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="m-8 text-center text-2xl uppercase tracking-[0.5em]">
        spli
        <br />
        tter
      </h1>

      <div className="flex-1 space-y-8 rounded-t-3xl bg-neutral-0 p-8">
        <TextField
          type="text"
          label="Bill"
          icon={<IconDollar />}
          placeholder="0"
        />

        <div>
          <label htmlFor="" className="mb-4 block text-neutral-400">
            Select tip %
          </label>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Button>5%</Button>
            <Button>10%</Button>
            <Button>15%</Button>
            <Button>20%</Button>
            <Button>50%</Button>
            <TextField placeholder="Custom" />
          </div>
        </div>

        <TextField
          type="text"
          label="Number of People"
          icon={<IconPerson />}
          placeholder="0"
        />
      </div>
    </div>
  );
}
