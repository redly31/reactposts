import styled from "styled-components"

const StyledInput = styled.input`
    padding: 10px 15px;
    color: black;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    outline: none;
    margin-top: 10px;
`

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledInput {...props}/>
  )
}
