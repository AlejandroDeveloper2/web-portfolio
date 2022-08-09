import { useRef, useState } from "react";
import { Email, Send } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

import { sendEmailMessage } from "../../../helpers";
import useLanguage from "../../../hooks/useLanguage";

import Button from "../../shared/button/Button";
import Alert from "../alert/Alert";

import {
  Form,
  FigureContainer,
  Title,
  FormBody,
  Input,
  TextArea,
  Row,
  Label,
} from "./ContactForm.styles";

const ContactForm = () => {
  const [messageBody, setMessageBody] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const { locale } = useLanguage();

  const { name, email, message } = messageBody;

  const bodyFormRef = useRef();

  const propierties = {
    styles: {
      width: "100%",
      height: "4em",
      backgroundColor: "var(--extra-strong-gray)",
      color: "var(--white)",
      hover: "var(--blue-2)",
      border: false,
      oneElement: false,
      shadow: true,
    },
    content: {
      icon: <Send />,
      text: (
        <FormattedMessage
          id="contact.buttonText"
          defaultMessage="Send message"
        />
      ),
    },
    action: () => console.log("alejo"),
  };

  const onSubmitForm = (e) => {
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    e.preventDefault();
    if ([name, email, message].includes("")) {
      setIsVisible(true);
      setAlert({
        message: (
          <FormattedMessage id="contact.errorAlert1" defaultMessage="Error" />
        ),
        error: true,
      });
      cleanAlert();
      return;
    }
    if (name.length < 3) {
      setIsVisible(true);
      setAlert({
        message: (
          <FormattedMessage id="contact.errorAlert2" defaultMessage="Error" />
        ),
        error: true,
      });
      cleanAlert();
      return;
    }
    if (!emailRegex.test(email)) {
      setIsVisible(true);
      setAlert({
        message: (
          <FormattedMessage id="contact.errorAlert3" defaultMessage="Error" />
        ),
        error: true,
      });
      cleanAlert();
      return;
    }
    const config = {
      setIsVisible,
      setAlert,
      cleanAlert,
      setMessageBody,
      locale,
    };
    sendEmailMessage(e, config);
    animateInputLabel(e, true);
  };

  const cleanAlert = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const animateInputLabel = (e, blur = false) => {
    const labels = bodyFormRef.current.children;
    for (let i = 0; i < labels.length; i++) {
      const element = labels[i];
      if (e.target.name === element.children[1].name) {
        element.children[0].style.top = "-1.5em";
        element.children[0].style.fontSize = "0.8em";
        element.children[0].style.color = "var(--white)";

        if (blur && element.children[1].value === "") {
          element.children[0].style.top = "1em";
          element.children[0].style.fontSize = "1em";
          element.children[0].style.color = "var(--white-opacity)";
        }
      }
    }
  };

  const onChange = (e) => {
    setMessageBody({
      ...messageBody,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FigureContainer>
        <span>
          <Email />
        </span>
      </FigureContainer>
      <Title>
        <FormattedMessage id="contact.title" defaultMessage="Contact me" />
      </Title>
      <FormBody ref={bodyFormRef}>
        <Row>
          <Label>
            <FormattedMessage
              id="contact.namePlaceholder"
              defaultMessage="Name"
            />
          </Label>
          <Input
            type="text"
            name="name"
            onFocus={(e) => animateInputLabel(e)}
            onBlur={(e) => animateInputLabel(e, true)}
            value={name}
            onChange={(e) => onChange(e)}
          />
        </Row>
        <Row>
          <Label>
            <FormattedMessage
              id="contact.emailPlaceholder"
              defaultMessage="Email"
            />
          </Label>
          <Input
            type="text"
            name="email"
            onFocus={(e) => animateInputLabel(e)}
            onBlur={(e) => animateInputLabel(e, true)}
            value={email}
            onChange={(e) => onChange(e)}
          />
        </Row>
        <Row>
          <Label>
            <FormattedMessage
              id="contact.messagePlaceholder"
              defaultMessage="Your message"
            />
          </Label>
          <TextArea
            name="message"
            onFocus={(e) => animateInputLabel(e)}
            onBlur={(e) => animateInputLabel(e, true)}
            value={message}
            onChange={(e) => onChange(e)}
          />
        </Row>
      </FormBody>
      <Button propierties={propierties} type="submit" />
      <Alert alert={alert} isVisible={isVisible} />
    </Form>
  );
};

export default ContactForm;
