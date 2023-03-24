import styled from 'styled-components';

const Container = styled.div` 
max-width: 1200px; 
margin: 0 auto; 
padding-top: 60px; 
display: flex; 
align-items: center; 
justify-content: center;
`

const FormError = styled.p` 

color: red; 
font-size: 1.1rem; 
margin-top: 3px;
`

const Label = styled.label` 
display: block; 
margin-top: 1rem; 
font-size: 19px;
`

const Input = styled.input`
width: 95%; 
margin-top: 2px; 
padding: 10px; 
font-size: 19px; 
border-radius: 1rem;
`

const TextArea = styled.textarea` 
width: 95%; 
height: 80px; 
margin-top: 2px; 
padding: 10px; 
font-size: 19px; 
border-radius: 1rem; 
resize: none;
`

const StyledForm = styled.form` 
padding: 2em; background: white; border-radius: 1rem;
min-width: 350px; 
`

const ContactFormButton = styled.button` 
color: white; 
background-color: black; 
font-size: 18px; 
box-shadow: 2px 1px 1px grey; 
width: 40%; 
padding: 1rem; 
margin: 35px 0px; 
cursor: pointer; 
border-radius: 1rem;
`

const MessageContainer = styled.div` 
display: flex; 
flex-direction: column; 
align-items: center;
`


const ThankYouMessage = styled.div` 
font-size: 26px; 
margin-bottom: 100px; 
display: flex; 
text-align: center;
`

const CheckIcon = styled.div` 
color: #54d6b8; 
border: solid 4px; 
border-radius: 50%; 
padding: 7px; 
margin-bottom: 30px;
`



export { Container, FormError, Label, Input, TextArea, StyledForm, ContactFormButton, MessageContainer, ThankYouMessage, CheckIcon };