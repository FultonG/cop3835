import React from 'react';
import { FooterContainer, FooterText, FooterLink } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Made with &#10084; by Fulton Garcia. You can find my website <FooterLink href="https://fultongarcia.com">here</FooterLink> or contact me at <FooterLink href="mailto:fultongarcia@gmail">fultongarcia@gmail.com</FooterLink> </FooterText>
    </FooterContainer>
  );
};

export default Footer;