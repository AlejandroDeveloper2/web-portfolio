import { FormattedMessage } from "react-intl";

import { useLocation } from "react-router-dom";
import { HighlightOff } from "@mui/icons-material";

import {
  ModalMenuContainer,
  CloseButton,
  ModalMenuNav,
  CustomLink,
  Navigation,
} from "./ModalMenu.styles";

const ModalMenu = ({
  isMenuModalVisible,
  setIsMenuModalVisible,
  menuScale,
  setMenuScale,
}) => {
  const location = useLocation();
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

  return (
    <ModalMenuContainer
      isMenuModalVisible={isMenuModalVisible}
      onClick={() => {
        setIsMenuModalVisible(false);
        setMenuScale(0);
      }}
    >
      <CloseButton
        onClick={() => {
          setIsMenuModalVisible(false);
          setMenuScale(0);
        }}
      >
        <HighlightOff />
      </CloseButton>
      <ModalMenuNav menuScale={menuScale}>
        <Navigation>
          {DATA_ITEMS?.map((item, index) => (
            <li key={index}>
              <CustomLink to={item.url} active={item.active}>
                {item.nameLink}
              </CustomLink>
            </li>
          ))}
        </Navigation>
      </ModalMenuNav>
    </ModalMenuContainer>
  );
};

export default ModalMenu;
