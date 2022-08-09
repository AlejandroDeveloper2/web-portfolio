import { Star } from "@mui/icons-material";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FormattedMessage } from "react-intl";

import illustration5 from "../../../images/illustration-5.png";

import Loading from "../../shared/loading/Loading";
import Skill from "../../shared/skill/Skill";

import {
  SkillContainer,
  Title,
  SectionTitle,
  SkillBox,
  SkillCategory,
  SkillList,
  Illustration,
} from "./SkillsSection.styles";
import "../../../styles/CarouselComponent.css";

const SKILLCATEGORIES = [
  {
    label: (
      <FormattedMessage
        id="about.frontendSkillTitle"
        defaultMessage="Frontend development"
      />
    ),
    color: "var(--secondary-color)",
    category: "frontend",
  },
  {
    label: (
      <FormattedMessage
        id="about.mobileSkillTitle"
        defaultMessage="Mobile development"
      />
    ),
    color: "var(--blue)",
    category: "mobile-frontend",
  },
  {
    label: (
      <FormattedMessage
        id="about.designSkillTitle"
        defaultMessage="UI and UX design"
      />
    ),
    color: "var(--orange)",
    category: "design",
  },
  {
    label: (
      <FormattedMessage
        id="about.backendSkillTitle"
        defaultMessage="Backend development"
      />
    ),
    color: "var(--red)",
    category: "backend",
  },
];

const SkillsSection = ({ skills, toggleModal, setSkill }) => {
  return (
    <SkillContainer>
      <Illustration
        src={illustration5}
        alt="Illustration neon chinese letter"
      />
      <SectionTitle>
        <Star />
        <Title>
          <FormattedMessage
            id="about.skillSectionTitle"
            defaultMessage="My skills of"
          />{" "}
          <span>
            <FormattedMessage
              id="about.skillSectionTitleTwo"
              defaultMessage="software development"
            />
          </span>
        </Title>
      </SectionTitle>
      <SkillList>
        {SKILLCATEGORIES.map((skillCategory, index) => (
          <SkillBox key={index}>
            {skills.length === 0 ? (
              <Loading />
            ) : (
              <ScrollingCarousel className="carousel">
                {skills?.map((skill, index) => {
                  if (skill.category === skillCategory.category) {
                    return (
                      <Skill
                        key={index}
                        skill={skill}
                        toggleModal={toggleModal}
                        setSkill={setSkill}
                      />
                    );
                  }
                })}
              </ScrollingCarousel>
            )}
            <SkillCategory background={skillCategory.color}>
              <p>{skillCategory.label}</p>
            </SkillCategory>
          </SkillBox>
        ))}
      </SkillList>
    </SkillContainer>
  );
};

export default SkillsSection;
