import illustration8 from "../../images/illustration-8.png";
import illustration9 from "../../images/illustration-9.png";

import Header from "../../components/shared/header/Header";
import ContactForm from "../../components/contact/contactForm/ContactForm";

import { ImageOne, ImageTwo, MainContainer } from "./Contact.styles";

const Contact = () => {
  return (
    <MainContainer>
      <Header>
        <ImageTwo src={illustration9} alt="Figure contact two" />
        <ContactForm />
        <ImageOne src={illustration8} alt="Figure contact one" />
      </Header>
    </MainContainer>
  );
};

export default Contact;
