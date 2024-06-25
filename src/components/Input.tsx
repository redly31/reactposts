import styled from "styled-components"

const StyledInput = styled.input`
  padding: 5px 10px;

`

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledInput {...props}/>
  )
}
