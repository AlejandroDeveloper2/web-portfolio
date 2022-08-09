import { useState, createContext } from "react";

import EnglishMessages from "../lang/en-US.json";
import SpanishMessages from "../lang/es-MX.json";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const lang = localStorage.getItem("lang");

  const [messages, setMessages] = useState(
    lang !== null
      ? lang === "es-MX"
        ? SpanishMessages
        : EnglishMessages
      : EnglishMessages
  );
  const [locale, setLocale] = useState(
    lang !== null ? (lang === "es-MX" ? "es-MX" : "en-US") : "en-US"
  );

  const setLanguage = (language) => {
    switch (language) {
      case "en-US":
        setMessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;

      case "es-MX":
        setMessages(SpanishMessages);
        setLocale("es-MX");
        localStorage.setItem("lang", "es-MX");
        break;

      default:
        setMessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        messages,
        locale,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
