import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 70px;
  margin-inline: auto;
  background-color: ${(props) => props.theme.colors.primary};

  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    margin: 0 5rem;
  }
`;

export const Logo = styled.div`

`;

export const Navlist = styled.ul`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #4169e1;
    clip-path: circle(100px at 90% -20%);
    transition: 1s ease-out;

    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    gap: 0;
    pointer-events: none;
  }
`

export const Hamburger = styled.button`
  display: none;
  border: none;
  background: none;
  border-top: 3px solid #fff;
  cursor: pointer;

  &::before,
  &::after {
    content: " ";
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin-top: 5px;
    position: relative;
    transition: 0.3s;
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;
