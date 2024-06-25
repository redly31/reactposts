import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  const session = true;

  return (
    <StyledNavigation>
      <StyledNavLink to="/">React Posts</StyledNavLink>
      {session ? (
        <StyledNavLink to="/">Выйти</StyledNavLink>
      ) : (
        <StyledNavLink to="/">Войти</StyledNavLink>
      )}
    </StyledNavigation>
  );
}
