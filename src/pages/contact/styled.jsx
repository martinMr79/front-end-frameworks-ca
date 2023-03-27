import styled, { css } from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';


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

const FormGroup = styled.div`
  position: relative;
`;

const Label = styled.label` 
display: block; 
margin-top: 1rem; 
font-size: 19px;
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  border: ${(props) =>
    props.noError ? "2px solid green" : "2px solid red"};
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: ${(props) => (props.noError ? "green" : "red")};
  }
`;

const CheckIconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = ({ noError, ...rest }) => {
  return (
    <InputContainer>
      <InputField noError={noError} {...rest} />
      {noError ? (
        <CheckIconContainer>
          <CheckIcon style={{ color: 'green' }} />
        </CheckIconContainer>
      ) : null}
    </InputContainer>
  );
};

export default Input;

const TextArea = styled.textarea`
  /* ... */
  ${props =>
    props.noError &&
    css`
      display: inline-block;
      padding-right: 35px;
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        right: 10px;
        top: 10px;
        color: #54d6b8;
        font-size: 24px;
        transform: translateY(-50%);
      }
    `}
`;

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

export {
    Container,
    FormError,
    Label,
    Input,
    TextArea,
    StyledForm,
    ContactFormButton,
    MessageContainer,
    ThankYouMessage,

    FormGroup
  };