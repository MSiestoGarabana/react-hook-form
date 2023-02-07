import { useWatch } from "react-hook-form";
export default function InputFirstName({ register, control }) {
  const firstName = useWatch({
    control,
    name: "firstName",
  });
  console.log("render InputName");
  return (
    <div className="form-control">
      <p>
        <label className="label">Name</label>
      </p>
      <input type="text" {...register("firstName", { required: true })} />
      <p>onInput, Rendering only this component: {firstName}</p>
    </div>
  );
}
