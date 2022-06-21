import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Price from './components/Price'
import Spinner from './components/Spinner'
import Footer from './components/Footer'
import heroImg from './img/hero.png'

// styled components
const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Hero = styled.img`
width: 80%;
max-width: 400px;
margin: 100px auto 0 auto;
display: block;

@media (max-width: 768px) {
  display: none;
}
`

const Heading = styled.h1`
  color: #f5f5f5;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 3.5rem;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #69a4fb;
    display: block;
    margin: 1rem auto 0 auto;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

function App () {
  const [coins, setCoins] = useState({})
  const [price, setPrice] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      try {
        const cotizarCripto = async () => {
          setLoading(true)
          setPrice({})
          const { coin, cripto } = coins
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${coin}`
          const response = await fetch(url)
          const result = await response.json()
          setPrice(result.DISPLAY[cripto][coin])
          setLoading(false)
        }
        cotizarCripto()
      } catch (error) {
        setPrice('%c Cotize api connection error', 'background: #900; color: #fff; font-size: 2rem;')
      }
    }
  }, [coins])
  return (
    <>
      <Container>
        <Hero
          src={heroImg}
          alt='pude ser una imagen que contiene diferentes imagenes de criptodivisas'
        />
        <div>
          <Heading>Cotiza criptomonedas al instante!</Heading>
          <Form
            setCoins={setCoins}
            setPrice={setPrice}
          />

          {loading && <Spinner />}
          {price.PRICE &&
            <Price
              price={price}
            />}
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default App
