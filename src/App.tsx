import { useEffect, useState } from "react";
import usePeristedState from "./utils/usePeristedState";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { i18n } from "./translate/i18n";
import { Navbar } from "./components/Navbar/Navbar";

const I18N_STORAGE_KEY = "i18nextLng";

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>("theme", light);
  const [language, setLanguage] = useState<string>(
    localStorage.getItem(I18N_STORAGE_KEY) || "pt-BR"
  );

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar
        toggleTheme={toggleTheme}
        language={language}
        toEnglish={() => handleLanguage("en-US")}
        toPortuguese={() => handleLanguage("pt-BR")}
      />
      <h1>{i18n.t("titles.myName")}</h1>
    </ThemeProvider>
  );
};

export default App;
