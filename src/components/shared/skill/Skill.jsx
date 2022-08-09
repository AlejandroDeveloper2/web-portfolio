import { SkillContainer } from "./Skill.styles";

const Skill = ({ skill, toggleModal, setSkill }) => {
  const { icon, title } = skill;
  return (
    <SkillContainer
      title={title}
      skill={title}
      onClick={() => {
        toggleModal();
        setSkill(skill);
      }}
    >
      <img src={icon} alt={`${title} logo`} />
    </SkillContainer>
  );
};

export default Skill;
