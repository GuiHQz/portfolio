import USAFlag from "../../assets/usa.png";
import BrazilFlag from "../../assets/brazil.webp";

import { Flags } from "./styles.ts";

interface HandleLanguageProps {
  language: string;
  toEnglish: () => void;
  toPortuguese: () => void;
}

export const HandleLanguage: React.FC<HandleLanguageProps> = ({
  language,
  toEnglish,
  toPortuguese,
}) => {
  return (
    <>
      {language === "pt-BR" ? (
        <Flags
          src={USAFlag}
          alt="Bandeira dos Estados Unidos"
          onClick={() => toEnglish()}
        />
      ) : (
        <Flags
          src={BrazilFlag}
          alt="Bandeira do Brasil"
          onClick={() => toPortuguese()}
        />
      )}
    </>
  );
};
