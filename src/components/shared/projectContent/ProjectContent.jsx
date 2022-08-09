import { Code, Visibility } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

import useLanguage from "../../../hooks/useLanguage";

import Button from "../button/Button";

import {
  ProjectContentContainer,
  ProjectTitle,
  ProjectLogo,
  TechnologiesBox,
  Technology,
  ButtonContainer,
} from "./ProjectContent.styles";

const ProjectContent = ({ project }) => {
  const { locale } = useLanguage();

  const {
    name,
    logoUrl,
    description,
    descriptionEnglish,
    technologies,
    gitUrl,
    projectUrl,
  } = project;

  const gitupButton = {
    styles: {
      width: "11.25em",
      height: "3.125em",
      backgroundColor: "transparent",
      color: "var(--white)",
      hover: "var(--secondary-color)",
      border: true,
      oneElement: false,
    },
    content: {
      icon: <Code />,
      text: (
        <FormattedMessage
          id="app.projectCodeButtonText"
          defaultMessage="See code"
        />
      ),
    },
    action: () => {
      window.open(gitUrl, `Repositorio ${name} app`, "width=600, height=500");
    },
  };

  const projectButton = {
    styles: {
      width: "11.25em",
      height: "3.125em",
      backgroundColor: "transparent",
      color: "var(--white)",
      hover: "var(--orange)",
      border: true,
      oneElement: false,
    },
    content: {
      icon: <Visibility />,
      text: (
        <FormattedMessage
          id="app.seeProjectButtonText"
          defaultMessage="See project"
        />
      ),
    },
    action: () => {
      window.open(projectUrl, `${name} app`, "width=600, height=500");
    },
  };

  return (
    <ProjectContentContainer>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectLogo src={logoUrl} alt={`${name} app`} />
      <p>{locale === "es-MX" ? description : descriptionEnglish}</p>
      <p>
        <FormattedMessage
          id="app.projectModalText"
          defaultMessage="Project developed with"
        />
        :
      </p>
      <TechnologiesBox>
        {technologies.map((technology, index) => (
          <Technology
            key={index}
            technologyName={technology.name}
            title={technology.name}
          >
            <img src={technology.iconUrl} alt={technology.name} />
          </Technology>
        ))}
      </TechnologiesBox>
      <ButtonContainer>
        <Button propierties={gitupButton} />
        <Button propierties={projectButton} />
      </ButtonContainer>
    </ProjectContentContainer>
  );
};

export default ProjectContent;
