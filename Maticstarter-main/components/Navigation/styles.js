import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000d3a;
  z-index: 1000;
  box-shadow: ${({ highlight }) =>
    highlight && "-7px -7px 30px #424242, 7px 7px 30px #0f0f0f"};
  & .infobox {
    background: #475fda;
    padding: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .content {
    margin: 0.5rem auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .button {
    border: 3px solid #fcc527;
    border-radius: 10px;
    color: #fcc527;
    padding: 0.5rem 1rem;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    font-size: 15px;
    padding: 0.5rem;
    border: none;
    &:active:hover {
      box-shadow: inset -7px -7px 20px #424242, inset 7px 7px 20px #0f0f0f;
    }
  }

  & img {
    margin-right: 0.5rem;
  }
  & .hamburger {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    & img {
      height: 15px;
    }
    & .hamburger {
      display: block;
      margin-left: 0.5rem;
      cursor: pointer;
    }
    & .content {
      max-width: 100% !important;
      padding: 0 1rem;
    }
  }
`;

export const StyledFooter = styled.footer`
  & svg {
    width: 35px;
    height: 35px;
    margin: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  & svg:hover {
    color: #fcc527;
    transform: scale(1.1);
  }
  margin-top: 6rem;
  padding: 3rem 0;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
  & a {
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 1.1rem;
  }
  & a:hover {
    color: #fcc527 !important;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: -1;
    flex-direction: column;
    background: #000d3a;
    padding: 0;
    height: 350px;
    height: ${({ show }) => (show ? "350px" : "0")};
    opacity: ${({ show }) => (show ? "1" : "0")};
    overflow: hidden;
    transition: all 0.5s ease;
    & a {
      margin: 0.7rem;
    }
  }
`;
