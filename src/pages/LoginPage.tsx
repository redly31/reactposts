import styled from "styled-components"
import Input from "../components/Input"
import Form from "../components/Form"
import Button from "../components/Button"
import { AuthContext } from "../helpers/context";
import { useContext } from "react";

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

  const { isAuth, setIsAuth } = useContext(AuthContext)!;

  return (
    <LoginPageWrapper>
      <LoginPageTitle>Вход</LoginPageTitle>
      <Form>
        <Input placeholder="Логин"/>
        <Input placeholder="Пароль"/>
        <Button onClick={() => setIsAuth(!isAuth)}>Войти</Button>
      </Form>
    </LoginPageWrapper>
    
  )
}
