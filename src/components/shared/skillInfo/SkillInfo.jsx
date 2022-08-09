import { useState, useLayoutEffect } from "react";
import { FormattedMessage } from "react-intl";

import {
  SkillContainer,
  SkillTitle,
  LevelBarContainer,
  LevelBar,
  Label,
  Image,
} from "./SkillInfo.styles";

const SkillInfo = ({ skill }) => {
  const [level, setLevel] = useState(0);
  const [skillSentence, setSkillSentence] = useState(null);
  const [backgroundBar, setBackgroundBar] = useState("transparent");

  const { icon, skillLevel, title } = skill;

  const changeBackgroundBar = () => {
    if (level <= 40) {
      setBackgroundBar("var(--secondary-color)");
      setSkillSentence(
        <FormattedMessage id="app.firstSkillSentence" defaultMessage="Basic" />
      );
    }
    if (level > 40 && level <= 60) {
      setBackgroundBar("var(--blue)");
      setSkillSentence(
        <FormattedMessage
          id="app.secondSkillSentence"
          defaultMessage="Intermediate"
        />
      );
    }
    if (level > 60 && level <= 80) {
      setBackgroundBar("var(--orange)");
      setSkillSentence(
        <FormattedMessage
          id="app.thirdSkillSentence"
          defaultMessage="Intermediate-advanced"
        />
      );
    }
    if (level > 80) {
      setBackgroundBar("var(--red)");
      setSkillSentence(
        <FormattedMessage
          id="app.fourthSkillSentence"
          defaultMessage="Advanced"
        />
      );
    }
  };

  useLayoutEffect(() => {
    setLevel(0);
    const calculateSkillLevel = () => {
      setLevel(skillLevel * 100);
    };
    setTimeout(() => {
      calculateSkillLevel();
    }, 1000);
  }, [skill]);

  useLayoutEffect(() => {
    changeBackgroundBar();
  }, [level]);

  return (
    <SkillContainer>
      <SkillTitle>{title}</SkillTitle>
      <Image src={icon} alt={title} />
      <LevelBarContainer>
        <LevelBar level={level} background={backgroundBar}></LevelBar>
      </LevelBarContainer>
      <Label color={backgroundBar}>
        <FormattedMessage id="app.skillText" defaultMessage="Skill level" />:{" "}
        <span>{skillSentence}</span>
      </Label>
    </SkillContainer>
  );
};

export default SkillInfo;
