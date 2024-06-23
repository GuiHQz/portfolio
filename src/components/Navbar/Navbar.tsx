import { useContext } from "react";

import Switch from "react-switch";
import { shade } from "polished";

import { Hamburger, Logo, NavbarContainer, Navlist } from "./styles";
import { ThemeContext } from "styled-components";

interface NavbarProps {
  toggleTheme(): void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("ThemeContext não foi encontrado!");
  }

  const { colors } = theme;

  return (
    <NavbarContainer>
      <Hamburger />
      <Logo>
        <h3>Logo</h3>
      </Logo>
      <div>
        <Navlist>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Contato</li>
        </Navlist>
      </div>

      <div>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.3, colors.primary)}
          onColor={shade(0.1, colors.text)}
        />
      </div>
    </NavbarContainer>
  );
};
