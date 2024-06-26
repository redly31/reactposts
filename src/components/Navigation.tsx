import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../helpers/context";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  font-weight: 700;
`;

export default function Navigation() {
  const { isAuth, setIsAuth } = useContext(AuthContext)!;

  return (
    <StyledNavigation>
      <StyledNavLink to="/">React Posts</StyledNavLink>
      {isAuth ? (
        <StyledNavLink to="/" onClick={() => setIsAuth(!isAuth)}>Выйти</StyledNavLink>
      ) : (
        <StyledNavLink to="/">Войти</StyledNavLink>
      )}
    </StyledNavigation>
  );
}
