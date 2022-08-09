import { FormattedMessage } from "react-intl";

import useLanguage from "../../../hooks/useLanguage";

import { PanelContainer } from "./LanguagePanel.styles";

const LanguagePanel = ({ visible }) => {
  const { setLanguage } = useLanguage();

  return (
    <PanelContainer visible={visible}>
      <button onClick={() => setLanguage("en-US")}>
        <FormattedMessage
          id="app.englishLanguageButtonLabel"
          defaultMessage="English"
        />
      </button>
      <button onClick={() => setLanguage("es-MX")}>
        <FormattedMessage
          id="app.spanishLanguageButtonLabel"
          defaultMessage="Spanish"
        />
      </button>
    </PanelContainer>
  );
};

export default LanguagePanel;
