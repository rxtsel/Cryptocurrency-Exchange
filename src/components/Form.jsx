import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { coins } from '../data/coins'
import useSelectCurrency from '../hooks/useSelectCurrency'
import Error from './Error'

// styled components
const Submit = styled.input`
  padding: 1rem;
  background-color: #69a4fb;
  border: none;
  color: #f5f5f5;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;
  width: 100%;
  font-size: 1.6rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .1);
  transition: background-color .3s ease;
  margin-top: 1.5rem;

  &:hover {
    background-color: #5a8add;
  }
`

const Form = ({ setCoins }) => {
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  const [coin, SelectCurrency] = useSelectCurrency('Moneda local', coins)
  const [cripto, SelectCriptos] = useSelectCurrency('Criptomoneda', criptos)

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        const respose = await fetch(url)
        const result = await respose.json()
        const arrayCrypto = result.Data.map(crypto => {
          const object = {
            id: crypto.CoinInfo.Name,
            name: crypto.CoinInfo.FullName
          }
          return object
        })
        setCriptos(arrayCrypto)
      } catch (error) {
        console.error('%c Api connection error', 'background: #900; color: #fff; font-size: 2rem;')
      }
    }
    consultarAPI()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([coin, cripto].includes('')) {
      setError(true)
      return
    }

    setError(false)

    setCoins({
      coin,
      cripto
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <SelectCurrency />
        <SelectCriptos />
        <Submit
          type='submit'
          value='cotizar'
        />
      </form>
      {error && <Error />}
    </>
  )
}

export default Form
