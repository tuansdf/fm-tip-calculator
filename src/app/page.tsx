import IconDollar from "/src/app/icon-dollar";
import TextField from "/src/app/text-field";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="m-8 text-center text-2xl uppercase tracking-[0.5em]">
        spli
        <br />
        tter
      </h1>

      <div className="flex-1 rounded-t-3xl bg-neutral-0 p-8">
        <TextField
          type="text"
          label="Bill"
          icon={<IconDollar />}
          placeholder="Bill"
        />
      </div>
    </div>
  );
}
