import styled from "styled-components"

const StyledNotFoundMessage = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40vh;
`

export default function NotFoundPage() {
  return (
    <StyledNotFoundMessage>
      Страница не найдена <span>&#128549;</span>
    </StyledNotFoundMessage>
  )
}
