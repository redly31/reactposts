import styled from "styled-components"
import Input from "../components/Input"
import Form from "../components/Form"
import Button from "../components/Button"

const LoginPageTitle = styled.h1`
  margin-bottom: 10px;
`

const LoginPageWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;

`

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginPageTitle>Вход</LoginPageTitle>
      <Form>
        <Input placeholder="Логин"/>
        <Input placeholder="Пароль"/>
        <Button>Войти</Button>
      </Form>
    </LoginPageWrapper>
    
  )
}
