import { FooterStyle } from "./styled";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
    <FooterStyle>
    <footer>{`Copyright © Martin Mroz ${year}`}</footer>;
    </FooterStyle>    
)


  };
  
  export default Footer;