import styled from "styled-components"

const StyledButton = styled.button`
    margin-top: 10px;
    padding: 10px 15px;
    color: black;
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 125px;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


export default function Button({children, onClick}: ButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  )
}
