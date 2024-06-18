import { useEffect, useState } from "react";

import { i18n } from "./translate/i18n";

import GlobalStyle from './styles/global'
import { HandleLanguage } from "./components/HandleLanguage/HandleLanguage";

const I18N_STORAGE_KEY = "i18nextLng";

const App = () => {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem(I18N_STORAGE_KEY) || "pt-BR"
  );

  const handleLanguage = (lng: string) => {
    localStorage.setItem(I18N_STORAGE_KEY, lng);
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  useEffect(() => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <>
      <GlobalStyle />
      <h1>{i18n.t("titles.myName")}</h1>
      <HandleLanguage
        language={language}
        toEnglish={() => handleLanguage("en-US")}
        toPortuguese={() => handleLanguage("pt-BR")}
      />
    </>
  );
};

export default App;
