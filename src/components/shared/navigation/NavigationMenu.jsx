import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Language, Menu } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

import LanguagePanel from "../languagePanel/LanguagePanel";
import Logo from "../../../svgs/shared/Logo";

import Button from "../button/Button";
import ModalMenu from "../modalMenu/ModalMenu";

import {
  Nav,
  Navigation,
  CustomLink,
  MenuButton,
  LogoPage,
  LanguageButton,
} from "./navigation.styles";

const NavigationMenu = () => {
  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);
  const [menuScale, setMenuScale] = useState(0);
  const [isLanguagePanelVisible, setIsLanguagePanelVisible] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const location = useLocation();

  //Data items menu
  const DATA_ITEMS = [
    {
      nameLink: (
        <FormattedMessage id="app.navigationItemHome" defaultMessage="Home" />
      ),
      url: "/",
      active: location.pathname === "/" ? "active" : undefined,
    },
    {
      nameLink: (
        <FormattedMessage
          id="app.navigationItemAbout"
          defaultMessage="About me"
        />
      ),
      url: "/about",
      active: location.pathname === "/about" ? "active" : undefined,
    },
    {
      nameLink: (
        <FormattedMessage
          id="app.navigationItemProjects"
          defaultMessage="My projects"
        />
      ),
      url: "/projects",
      active: location.pathname === "/projects" ? "active" : undefined,
    },
    {
      nameLink: (
        <FormattedMessage
          id="app.navigationItemContact"
          defaultMessage="Contact"
        />
      ),
      url: "/contact",
      active: location.pathname === "/contact" ? "active" : undefined,
    },
  ];

  useEffect(() => {
    let lastValue = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastValue || y < lastValue) {
        setIsNavFixed(true);
      }
      if (y === 0) {
        setIsNavFixed(false);
      }
      lastValue = y;
    };
  }, []);

  //Button Propierties
  const propierties = {
    styles: {
      width: "3.125em",
      height: "3.125em",
      backgroundColor: "var(--extra-strong-gray)",
      color: "var(--white)",
      hover: "var(--secondary-color)",
      border: false,
      oneElement: true,
      shadow: true,
    },
    content: {
      icon: <Language />,
      text: null,
    },
    action: () => setIsLanguagePanelVisible(!isLanguagePanelVisible),
  };

  return (
    <>
      <LanguagePanel visible={isLanguagePanelVisible} />
      <ModalMenu
        isMenuModalVisible={isMenuModalVisible}
        setIsMenuModalVisible={setIsMenuModalVisible}
        menuScale={menuScale}
        setMenuScale={setMenuScale}
      />
      <Nav isNavFixed={isNavFixed}>
        <MenuButton
          onClick={() => {
            setIsMenuModalVisible(true);
            setTimeout(() => {
              setMenuScale(1);
            }, 500);
          }}
        >
          <span>
            <Menu />
          </span>
        </MenuButton>
        <Link to="/">
          <LogoPage>
            <Logo />
          </LogoPage>
        </Link>
        <Navigation>
          {DATA_ITEMS?.map((item, index) => (
            <li key={index}>
              <CustomLink active={item.active} to={item.url}>
                {item.nameLink}
              </CustomLink>
            </li>
          ))}
        </Navigation>
        <LanguageButton>
          <Button propierties={propierties} />
        </LanguageButton>
      </Nav>
    </>
  );
};

export default NavigationMenu;
