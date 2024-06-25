import styled from "styled-components"
import Input from "../components/Input"

const StyledNotFoundMessage = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40vh;
`

export default function LoginPage() {
  return (
    <div>
      <Input placeholder="Логин"/>
      <Input placeholder="Пароль"/>
    </div>
  )
}
