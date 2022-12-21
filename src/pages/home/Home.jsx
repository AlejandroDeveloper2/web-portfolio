import { useEffect, useState, useRef } from "react";
import { Stars } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import Typed from "typed.js";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

import useFirebase from "../../hooks/useFirebase";
import useModal from "../../hooks/useModal";
import useLanguage from "../../hooks/useLanguage";
import { data } from "../../helpers/data";

import Header from "../../components/shared/header/Header";
import ProfileAvatar from "../../components/shared/profileAvatar/ProfileAvatar";
import photoProfile from "../../images/profile-avatar.png";
import illustration1 from "../../images/illustration-1.png";
import illustration2 from "../../images/illustration-2.png";
import CurrentProjectList from "../../components/Home/currentProjectList/CurrentProjectList";
import Skill from "../../components/shared/skill/Skill";
import SkillInfo from "../../components/shared/skillInfo/SkillInfo";
import Loading from "../../components/shared/loading/Loading";

import {
  ProfileMainContainer,
  ProfileContainer,
  ProfileInfo,
  SkillContainer,
  SkillsTitle,
  SkillBox,
  Info,
  Name,
  Proffession,
  Presentation,
  Illustration,
  IllustrationTwo,
} from "./Home.styles";
import "../../styles/CarouselComponent.css";

const Home = () => {
  const [skill, setSkill] = useState(null);
  const {
    featureSkills,
    getFeaturedSkills,
    getRecentProjects,
    insertProjectsData,
  } = useFirebase();
  const { isModalVisible, scaleModal, Modal, toggleModal } = useModal();
  const { locale } = useLanguage();
  const animatedTextRef = useRef();
  const typeRef = useRef();

  const spanishText = "Hola, bienvenido a mi portafolio de servicios";
  const englishText = "Hello, welcome to my development services portfolio";

  useEffect(() => {
    getFeaturedSkills();
  }, []);

  useEffect(() => {
    getRecentProjects();
  }, []);

  useEffect(() => {
    const options = {
      strings: locale === "es-MX" ? [spanishText] : [englishText],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    typeRef.current = new Typed(animatedTextRef.current, options);
    return () => {
      typeRef.current.destroy();
    };
  }, [locale]);

  useEffect(() => {
    insertProjectsData(data);
  }, []);

  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        scaleModal={scaleModal}
        toggleModal={toggleModal}
      >
        {skill === null ? "Cargando..." : <SkillInfo skill={skill} />}
      </Modal>
      <Header>
        <Illustration
          src={illustration1}
          alt="Illustration chinese character"
        />
        <IllustrationTwo
          src={illustration2}
          alt="Illustration chinese character 2"
        />
        <ProfileMainContainer>
          <ProfileContainer>
            <ProfileAvatar photoPath={photoProfile} />
            <ProfileInfo>
              <Info>
                <Name>Diego Alejandro Diaz Bonilla</Name>
                <Proffession>
                  <FormattedMessage
                    id="app.proffession"
                    defaultMessage="Web and mobile developer"
                  />
                  <span>Front-end</span>
                </Proffession>
              </Info>
              <SkillContainer>
                <SkillsTitle>
                  <span>
                    <Stars />
                  </span>{" "}
                  <FormattedMessage
                    id="app.featuredSkillsTitle"
                    defaultMessage="My featured skills"
                  />
                </SkillsTitle>
                <SkillBox>
                  {featureSkills.length === 0 ? (
                    <Loading />
                  ) : (
                    <ScrollingCarousel className="carousel">
                      {featureSkills?.map((featureSkill, index) => (
                        <Skill
                          key={index}
                          skill={featureSkill}
                          toggleModal={toggleModal}
                          setSkill={setSkill}
                        />
                      ))}
                    </ScrollingCarousel>
                  )}
                </SkillBox>
              </SkillContainer>
            </ProfileInfo>
          </ProfileContainer>
          <Presentation>
            <span ref={animatedTextRef}></span>
            <small>
              <FormattedMessage
                id="app.services"
                defaultMessage="web and mobile."
              />
            </small>
          </Presentation>
        </ProfileMainContainer>
      </Header>
      <CurrentProjectList />
    </>
  );
};

export default Home;
