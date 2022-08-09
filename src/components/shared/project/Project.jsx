import { Info } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

import Button from "../../shared/button/Button";

import { ProjectContainer, Title } from "./Project.styles";

const Project = ({ project, toggleModal, setProject, screenWidth }) => {
  const { id, name, background, logoUrl } = project;

  //Button Propierties
  const propierties = {
    styles: {
      width: "11.25em",
      height: "3.125em",
      backgroundColor: "transparent",
      color: "var(--white)",
      hover: background,
      border: true,
      oneElement: false,
    },
    content: {
      icon: <Info />,
      text: (
        <FormattedMessage
          id="app.projectDetailsTextButton"
          defaultMessage="See more details"
        />
      ),
    },
    action: () => {
      toggleModal();
      setProject(project);
    },
  };

  //Button Propierties Phone design
  const propiertiesPhone = {
    styles: {
      width: "7.5em",
      height: "3.125em",
      backgroundColor: background,
      color: "var(--white)",
      hover: background,
      border: true,
      oneElement: false,
    },
    content: {
      icon: <Info />,
      text: (
        <FormattedMessage
          id="app.projectDetailsButtonShortText"
          defaultMessage="See more"
        />
      ),
    },
    action: () => {
      toggleModal();
      setProject(project);
    },
  };

  return (
    <ProjectContainer background={background} shadowColor={background}>
      <Title>{name}</Title>
      <img src={logoUrl} alt={`${name} logo`} />
      <Button
        propierties={screenWidth >= 600 ? propierties : propiertiesPhone}
      />
    </ProjectContainer>
  );
};

export default Project;
