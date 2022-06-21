import styled from '@emotion/styled'

const Paragraph = styled.p`
  padding: 1rem;
  background-color: #b63230;
  color: #fff;
  display: block;
  margin 0 auto;
  text-align: center;
  border-radius: 5px;
  border-none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .1);
`

const Error = () => {
  return (
    <Paragraph>Todos los campos son obligatorios</Paragraph>
  )
}

export default Error
