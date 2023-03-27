import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckIcon from '@mui/icons-material/Check';
import {
  Container,
  FormError,
  Label,
  Input,
  TextArea,
  StyledForm,
  ContactFormButton,
  MessageContainer,
  ThankYouMessage,
  
  FormGroup,
} from "./styled";

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

    email: yup.string().email().required("Please enter a valid email"),

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
      console.log(data);
    }
  
    return (
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact us</h1>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              name="fullName"
              type="text"
              {...register("fullName")}
              noError={!errors.fullName}
            />
            {errors.fullName ? null : <CheckIcon style={{ color: "green" }} />}
            <FormError>{errors.fullName?.message}</FormError>
          </FormGroup>
  
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              name="subject"
              type="text"
              {...register("subject")}
              noError={!errors.subject}
            />
            {errors.subject || !register("subject").value ? null : (
              <CheckIcon style={{ color: "green" }} />
            )}
            <FormError>{errors.subject?.message}</FormError>
          </FormGroup>
  
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              {...register("email")}
              noError={!errors.email}
            />
            {errors.email || !register("email").value ? null : (
              <CheckIcon style={{ color: "green" }} />
            )}
            <FormError>{errors.email?.message}</FormError>
          </FormGroup>
  
          <FormGroup>
            <Label htmlFor="body">Body</Label>
            <TextArea
              name="body"
              type="text"
              {...register("body")}
              noError={!errors.body}
            />
            {errors.body || !register("body").value ? null : (
              <CheckIcon style={{ color: "green" }} />
            )}
            <FormError>{errors.body?.message}</FormError>
          </FormGroup>
  
          <ContactFormButton type="submit">Submit</ContactFormButton>
        </StyledForm>
      </Container>
    );
  }
  

export default Form;