import { useState, useEffect } from "react";
import { RocketLaunchOutlined } from "@mui/icons-material";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FormattedMessage } from "react-intl";

import useModal from "../../hooks/useModal";
import useFirebase from "../../hooks/useFirebase";

import illustration6 from "../../images/illustration-6.png";
import illustration7 from "../../images/illustration-7.png";

import Header from "../../components/shared/header/Header";
import Project from "../../components/shared/project/Project";
import Loading from "../../components/shared/loading/Loading";
import ProjectContent from "../../components/shared/projectContent/ProjectContent";

import {
  MainProjectContainer,
  DescriptionContainer,
  IconLaunch,
  IconContainer,
  TextContainer,
  Title,
  Paragraph,
  IllustrationSix,
  IllustrationSeven,
  ProjectBox,
  Counter,
} from "./Projects.styles";
import "../../styles/CarouselComponent.css";

const Projects = () => {
  const [project, setProject] = useState(null);
  const [screenWidth, setScreenWidth] = useState(screen.width);
  const { isModalVisible, scaleModal, Modal, toggleModal } = useModal();
  const { projects, getAllProjects } = useFirebase();

  useEffect(() => {
    getAllProjects();
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      window.addEventListener("resize", () => {
        setScreenWidth(screen.width);
      });
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
      <MainProjectContainer>
        <Header>
          <IllustrationSix src={illustration6} alt="Sixth illustration" />
          <DescriptionContainer>
            <IconContainer>
              <IconLaunch>
                <RocketLaunchOutlined />
              </IconLaunch>
            </IconContainer>
            <TextContainer>
              <Title>
                <FormattedMessage
                  id="projects.titleFirtsPart"
                  defaultMessage="My"
                />{" "}
                <span>
                  <FormattedMessage
                    id="projects.titleSecondPart"
                    defaultMessage="projects"
                  />
                </span>
              </Title>
              <Paragraph>
                <FormattedMessage
                  id="projects.description"
                  defaultMessage="Projects section description "
                />
              </Paragraph>
            </TextContainer>
          </DescriptionContainer>
          <IllustrationSeven src={illustration7} alt="Seventh illustration " />
        </Header>
        <ProjectBox>
          <Counter>
            <RocketLaunchOutlined />
            <span>{projects?.length}</span>
          </Counter>
          {projects.length === 0 ? (
            <Loading />
          ) : (
            <ScrollingCarousel className="carousel">
              {projects?.map((project, index) => (
                <Project
                  key={index}
                  project={project}
                  toggleModal={toggleModal}
                  setProject={setProject}
                  screenWidth={screenWidth}
                />
              ))}
            </ScrollingCarousel>
          )}
        </ProjectBox>
      </MainProjectContainer>
    </>
  );
};

export default Projects;
