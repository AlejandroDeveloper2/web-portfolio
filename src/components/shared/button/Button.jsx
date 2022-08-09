import { ButtonComponent } from "./Button.styles";

const Button = ({ propierties, type = "button" }) => {
  const { styles, content, action } = propierties;

  return (
    <ButtonComponent styles={styles} onClick={action} type={type}>
      {content.icon}
      <span>{content.text}</span>
    </ButtonComponent>
  );
};

export default Button;
