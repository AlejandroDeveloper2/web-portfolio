import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Download } from "@mui/icons-material";

import useModal from "../../hooks/useModal";
import useFirebase from "../../hooks/useFirebase";
import useLanguage from "../../hooks/useLanguage";

import ProfilePhoto from "../../images/profile-avatar.png";
import Illustration1 from "../../images/illustration-1.png";
import Illustration3 from "../../images/illustration-3.png";
import Illustration4 from "../../images/illustration-4.png";
import downloadFile from "../../download/HojaDeVidaDiegoDiaz.pdf";

import Header from "../../components/shared/header/Header";
import ProfileAvatar from "../../components/shared/profileAvatar/ProfileAvatar";
import SkillsSection from "../../components/about/skillsSection/SkillsSection";
import SkillInfo from "../../components/shared/skillInfo/SkillInfo";
import StudiesSection from "../../components/about/studiesSection/StudiesSection";

import {
  MainProfileContainer,
  ProfileContainer,
  AboutMe,
  Paragraph,
  Title,
  Image,
  FigureOne,
  FigureTwo,
  CVButton,
} from "./About.styles";

const About = () => {
  const [skill, setSkill] = useState(null);
  const { skills, getAllSkills } = useFirebase();
  const { isModalVisible, scaleModal, Modal, toggleModal } = useModal();
  const { locale } = useLanguage();

  useEffect(() => {
    getAllSkills();
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
      <MainProfileContainer>
        <Header>
          <FigureOne src={Illustration3} alt="Tech figure" />
          <ProfileContainer>
            <ProfileAvatar photoPath={ProfilePhoto} />
            <AboutMe>
              <Title>
                <FormattedMessage
                  id="about.firstPartTitle"
                  defaultMessage="About"
                />{" "}
                <span>
                  <FormattedMessage
                    id="about.secondPartTitle"
                    defaultMessage="me"
                  />
                </span>
              </Title>
              <Paragraph>
                <FormattedMessage
                  id="about.paragraph"
                  defaultMessage="Personal presentation"
                />
              </Paragraph>
              <Image src={Illustration1} alt="Ilustration" />
              <CVButton
                href={downloadFile}
                download="Hoja_de_vida.pdf"
                title={
                  locale === "en-US"
                    ? "Download curriculum vitae"
                    : "Descargar hoja de vida"
                }
              >
                <Download />
                <p>
                  <FormattedMessage
                    id="about.cvButtonText"
                    defaultMessage="Download CV"
                  />
                </p>
              </CVButton>
            </AboutMe>
          </ProfileContainer>
          <FigureTwo src={Illustration4} alt="Tech figure" />
        </Header>
        <SkillsSection
          skills={skills}
          toggleModal={toggleModal}
          setSkill={setSkill}
        />
        <StudiesSection />
      </MainProfileContainer>
    </>
  );
};

export default About;
