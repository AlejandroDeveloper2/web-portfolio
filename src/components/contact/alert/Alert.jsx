import { CheckCircle, Error } from "@mui/icons-material";

import { AlertContainer, Message, Icon } from "./Alert.styles";

const Alert = ({ alert, isVisible }) => {
  const { message, error } = alert;

  return (
    <AlertContainer
      background={error ? "var(--red)" : "var(--blue-2)"}
      isVisible={isVisible}
    >
      <Icon>{!error ? <CheckCircle /> : <Error />}</Icon>
      <Message>{message}</Message>
    </AlertContainer>
  );
};

export default Alert;
