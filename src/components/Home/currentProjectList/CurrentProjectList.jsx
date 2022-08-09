import { useState, useEffect } from "react";
import { Update } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

import useFirebase from "../../../hooks/useFirebase";
import useModal from "../../../hooks/useModal";

import Project from "../../shared/project/Project";
import ProjectContent from "../../shared/projectContent/ProjectContent";
import Loading from "../../shared/loading/Loading";

import {
  MainContainer,
  ProjectContainer,
  TitleSection,
} from "./CurrentProjectList.styles";

const CurrentProjectList = () => {
  const [project, setProject] = useState(null);
  const [screenWidth, setScreenWidth] = useState(screen.width);
  const { currentProjects } = useFirebase();
  const { isModalVisible, scaleModal, Modal, toggleModal } = useModal();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      window.addEventListener("resize", () => {
        setScreenWidth(screen.width);
      });
    } else {
      window.removeEventListener("resize");
    }
    return () => (isMounted = false);
  }, []);

  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        scaleModal={scaleModal}
        toggleModal={toggleModal}
      >
        {project === null ? (
          "Cargando..."
        ) : (
          <ProjectContent project={project} />
        )}
      </Modal>
      <MainContainer>
        <TitleSection>
          <Update />
          <FormattedMessage
            id="app.firstWordTitleCurrentProjects"
            defaultMessage="My current"
          />{" "}
          <span>
            <FormattedMessage
              id="app.secondWordTitleCurrentProjects"
              defaultMessage="projects"
            />
          </span>{" "}
          <FormattedMessage
            id="app.lastWordTitleCurrentProjects"
            defaultMessage=" "
          />
        </TitleSection>
        <ProjectContainer>
          {currentProjects.length === 0 ? (
            <Loading />
          ) : (
            currentProjects?.map((project, index) => (
              <Project
                key={index}
                project={project}
                toggleModal={toggleModal}
                setProject={setProject}
                screenWidth={screenWidth}
              />
            ))
          )}
        </ProjectContainer>
      </MainContainer>
    </>
  );
};

export default CurrentProjectList;
