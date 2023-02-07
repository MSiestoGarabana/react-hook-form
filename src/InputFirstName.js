import { useWatch } from "react-hook-form";
export default function InputFirstName({ register, control }) {
  const firstName = useWatch({
    control,
    name: "firstName",
  });
  return (
    <div className="form-control">
      <p>
        <label className="label">Nombre</label>
      </p>
      <input type="text" {...register("firstName", { required: true })} />
      <p>Rendering only this component: {firstName}</p>
    </div>
  );
}
