export default function InputFirstName({ register }) {
  return (
    <div className="form-control">
      <p>
        <label className="label">Nombre</label>
      </p>
      <input type="text" {...register("firstName", { required: true })} />
    </div>
  );
}
