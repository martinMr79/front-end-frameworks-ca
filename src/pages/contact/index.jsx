import React from "react";
import { useForm } from "react-hook-form";
/*  import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckIcon from '@mui/icons-material/Check';*/
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { 
  Container, 
  FormError, 
  Label, 
  Input, 
  TextArea, 
  StyledForm, 
  ContactFormButton,  
   } from "./styled"

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
      .required("Please enter a subject"),
   
   
    email: yup
      .string()
      .email()
      .required("Please enter a valid email"),



    body: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .max(150, "Your full name cannot be longer than 150 characters.")
      .required("Please leave a message"),
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
    window.alert(`Thank you ${data.fullName} for contacting us! We will get back to you soon.`);

  }

  return (
    
    <Container>
    
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact us</h1>
      <Label htmlFor="fullName">Full Name</Label>
      <Input name="fullName" type="text" {...register("fullName")} />
      <FormError>{errors.fullName?.message}</FormError>

      <Label htmlFor="subject">Subject</Label>
      <Input name="subject" type="text" {...register("subject")} />
      <FormError>{errors.subject?.message}</FormError>

      <Label htmlFor="email">Email</Label>
      <Input name="email" type="email" {...register("email")} />
      <FormError>{errors.email?.message}</FormError>

      <Label htmlFor="body">Body</Label>
      <TextArea name="body" type="text" {...register("body")} />
    {/*   <CheckIcon></CheckIcon> */} 
      <FormError>{errors.body?.message}</FormError>

      <ContactFormButton type="submit">Submit</ContactFormButton>
    </StyledForm>
   {/*<CheckCircleOutlineIcon></CheckCircleOutlineIcon> */} 
    </Container>
  );
  
}


export default Form;