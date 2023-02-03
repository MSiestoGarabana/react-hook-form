import React from "react";
import { useForm } from "react-hook-form";
import InputFirstName from "./InputFirstName";

export default function Form() {
  const { handleSubmit, register, formState, reset, watch } = useForm({
    //si reset, estos serán los valores
    defaultValues: {
      firstName: "Gerardo",
      freeLance: "s",
      type: "backend",
    },
  });

  function onSubmit(formData) {
    console.log(formData);
  }
  function onReset() {
    reset({
      firstName: "...",
    });
  }

  console.log("render");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <p>
          <label className="label">Nombre</label>
        </p>

        <input
          type="text"
          {...register("firstName", { required: true, minLength: 3 })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Email</label>
        </p>
        <input
          type="text"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
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
        <button type="submit" className="submit">
          Enviar
        </button>
        <button onClick={onReset()}>Reset</button>
      </div>
    </form>
  );
}
