import { useState } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

import Button from "../button/Button";

import {
  FooterContainer,
  Layer,
  SocialLink,
  SocialMedia,
  Rigths,
} from "./Footer.styles";

import GitIcon from "../../../svgs/tecnologies/GitIcon";
import WhatsappIcon from "../../../svgs/tecnologies/WhatsappIcon";
import LinkedinIcon from "../../../svgs/tecnologies/LinkedinIcon";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const Links = [
    {
      to: "https://github.com/AlejandroDeveloper2",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <GitIcon />,
    },
    {
      to: "https://api.whatsapp.com/send?phone=+573105073199",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <WhatsappIcon />,
    },
    {
      to: "https://www.linkedin.com/in/diego-alejandro-diaz-28b3a2181",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <LinkedinIcon />,
    },
  ];

  //Button Propierties
  const propierties = {
    styles: {
      width: "2.5em",
      height: "2.5em",
      backgroundColor: "var(--extra-strong-gray)",
      color: "var(--white)",
      hover: "var(--blue)",
      border: false,
      oneElement: true,
      shadow: true,
      animation: "change-color-effect",
    },
    content: {
      icon: isFooterVisible ? <ArrowDropDown /> : <ArrowDropUp />,
      text: null,
    },
    action: () => setIsFooterVisible(!isFooterVisible),
  };

  return (
    <FooterContainer isFooterVisible={isFooterVisible}>
      <Button propierties={propierties} />
      <Layer>
        <SocialMedia>
          {Links?.map((link, index) => (
            <SocialLink
              key={index}
              href={link.to}
              target={link.target}
              rel={link.rel}
            >
              {link.icon}
            </SocialLink>
          ))}
        </SocialMedia>
        <Rigths>
          <FormattedMessage
            id="app.rights"
            defaultMessage="All rights reserved "
          />
          ©
        </Rigths>
      </Layer>
    </FooterContainer>
  );
};

export default Footer;
