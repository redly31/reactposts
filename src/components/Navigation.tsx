import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledNavigation = styled.nav`
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: center;
`

const StyledNavLink = styled.a`
    color: black;
    font-weight: 700;
`



export default function Navigation() {
  return (
    <StyledNavigation>
        <NavLink to='/'>
            <StyledNavLink href="#">
                Войти
            </StyledNavLink>
        </NavLink>
    </StyledNavigation>
  )
}
