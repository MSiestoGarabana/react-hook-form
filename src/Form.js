import React from "react";
import { useForm } from "react-hook-form";
import InputFirstName from "./InputFirstName";

export default function Form() {
  const { handleSubmit, register, reset, control } = useForm({
    defaultValues: {
      firstName: "Gerardo",
      contact: {
        email: "your email here",
      },
      freelance: "s",
      type: "frontend",
    },
  });

  function onSubmit(formData) {
    console.log(formData);
  }
  function onReset() {
    reset();
  }
  console.log("render");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFirstName register={register} control={control} />
      <div className="form-control">
        <p>
          <label className="label">Email</label>
        </p>
        <input
          type="text"
          {...register("contact.email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Tipo</label>
        </p>
        <select {...register("type")}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">FullStack</option>
        </select>
        <div className="form-control">
          <p>
            <label className="label">Freelance</label>
          </p>
          <label>
            Sí
            <input {...register("freelance")} type="radio" value="s" />
          </label>
          <label>
            No
            <input {...register("freelance")} type="radio" value="n" />
          </label>
        </div>
        <button className="submit">Enviar</button>

        <button onClick={onReset} type="reset" className="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
