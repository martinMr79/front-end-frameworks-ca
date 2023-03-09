import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .max(49, "Your full name cannot be longer than 49 characters.")
      .required("Please enter your first name"),
  
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .max(99, "Your full name cannot be longer than 99 characters.")
      .required("Field required"),
   
   
    email: yup
      .string()
      .email()
      .required("Please enter a valid email"),



    body: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .max(150, "Your full name cannot be longer than 150 characters.")
      .required("Field required"),
  })
  .required();

function Form() {
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
      <label htmlFor="">Full Name</label>
      <input name="fullName" type="text" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>

      <label htmlFor="">Subject</label>
      <input name="subject" type="text" {...register("subject")} />
      <p>{errors.subject?.message}</p>

      <label htmlFor="">Email</label>
      <input name="email" type="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <label htmlFor="">Body</label>
      <input name="body" type="text" {...register("body")} />
      <p>{errors.body?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;