import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export default function Form({children}: {children: React.ReactNode}) {
  return (
    <StyledForm>
        {children}
    </StyledForm>
  )
}
