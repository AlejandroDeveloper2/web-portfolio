import { School, WorkspacePremium, Visibility } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

import useModal from "../../../hooks/useModal";
import useFirebase from "../../../hooks/useFirebase";

import Button from "../../shared/button/Button";
import StudyDetails from "../studyDetails/StudyDetails";

import {
  StudiesContainer,
  SectionTitle,
  Title,
  StudyList,
  StudyBox,
  Icon,
  Span,
} from "./StudiesSection.styles";

const STUDIES = [
  {
    background: "var(--blue-2)",
    label: (
      <FormattedMessage id="about.highSchool" defaultMessage="High school" />
    ),
    icon: <School />,
    category: "highSchool",
  },
  {
    background: "var(--orange)",
    label: (
      <FormattedMessage id="about.college" defaultMessage="college education" />
    ),
    icon: <School />,
    category: "college",
  },
  {
    background: "var(--secondary-color)",
    label: (
      <FormattedMessage
        id="about.extraCourses"
        defaultMessage="Extra courses"
      />
    ),
    icon: <WorkspacePremium />,
    category: "courses",
  },
];

const StudiesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [refTwo, inViewTwo] = useInView({
    threshold: 0,
  });
  const [refThree, inViewThree] = useInView({
    threshold: 0,
  });
  const { isModalVisible, scaleModal, Modal, toggleModal } = useModal();
  const { getStudiesPerCategory } = useFirebase();

  const getButtonPropierties = (category) => {
    return {
      styles: {
        width: "11.25em",
        height: "3.125em",
        backgroundColor: "transparent",
        color: "var(--white)",
        hover: "transparent",
        border: true,
        oneElement: false,
      },
      content: {
        icon: <Visibility />,
        text: (
          <FormattedMessage
            id="about.studiesButton"
            defaultMessage="See more details"
          />
        ),
      },
      action: () => {
        toggleModal();
        getStudiesPerCategory(category);
      },
    };
  };

  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        scaleModal={scaleModal}
        toggleModal={toggleModal}
      >
        <StudyDetails />
      </Modal>
      <StudiesContainer>
        <SectionTitle>
          <School />
          <Title>
            <FormattedMessage
              id="about.studiesSectionTitle"
              defaultMessage="My studies and"
            />
            <Span>
              {" "}
              <FormattedMessage
                id="about.studiesSectionTitleTwo"
                defaultMessage="courses"
              />
            </Span>
          </Title>
        </SectionTitle>
        <StudyList>
          {STUDIES.map((study, index) => (
            <StudyBox
              key={index}
              background={study.background}
              textAnimation={inViewTwo ? "stretch-text" : ""}
              boxAnimation={inViewThree ? "fade-in-box" : ""}
              ref={refTwo}
            >
              <h3 ref={refThree}>{study.label}</h3>
              <Icon ref={ref} iconAnimation={inView ? "bounce-icon" : ""}>
                {" "}
                {study.icon}
              </Icon>
              <Button propierties={getButtonPropierties(study.category)} />
            </StudyBox>
          ))}
        </StudyList>
      </StudiesContainer>
    </>
  );
};

export default StudiesSection;
