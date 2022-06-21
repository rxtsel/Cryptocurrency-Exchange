import styled from '@emotion/styled'

const ContainerFooter = styled.footer`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 2rem;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    right: 0;
  }
`

const Text = styled.p`
  color: #f5f5f5;
  text-align: center;
`

const Link = styled.a`
  color: #f5f5f5;
  font-weight: 700;
  text-decoration: none;
  transition: color .5s ease;

  &:hover {
    color: #9497ff;
  }
`

const Footer = () => {
  return (
    <ContainerFooter
      className='footer'
    >
      <Text
        className='footer-text'
      >
        Made By {' '}
        <Link
          href='http://www.twitter.com/rxtsel'
          target='_blank'
          rel='noreferrer'
          className='footer-link'
        >
          Rxtsel {' '}
        </Link>
        with &#10084;
      </Text>
    </ContainerFooter>
  )
}

export default Footer
