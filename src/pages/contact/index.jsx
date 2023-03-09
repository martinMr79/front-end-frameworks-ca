import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(4, "Your full name should be at least 4 characters.")
      .max(49, "Your full name cannot be longer than 49 characters.")
      .required("Please enter your first name"),
    email: yup
      .string()
      .email()
      .required("Please enter your email"),

    subject: yup
      .string()
      .min(4, "Your subject should be at least 4 characters.")
      .max(99, "Your full name cannot be longer than 99 characters.")
      .required("Field required"),

    body: yup
      .string()
      .min(4, "Your subject should be at least 4 characters.")
      .max(999, "Your full name cannot be longer than 999 characters.")
      .required("Field required"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="fullName" type="text" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      
      <input name="email" type="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input name="subject" type="text" {...register("subject")} />
      <p>{errors.subject?.message}</p>

      <input name="body" type="text" {...register("body")} />
      <p>{errors.body?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;