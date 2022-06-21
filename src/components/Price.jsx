import styled from '@emotion/styled'

const Price = ({ price }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = price
  const Result = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `

  const Image = styled.img`
    display: block;
    width: 12rem;

    @media (max-width: 768px) {
      width: 8rem;
      margin-top: 1.5rem;
    }
  `

  const PriceActual = styled.p`
    color: #f5f5f5;
    font-size: 2.4rem;

    span {
      font-weight: 700;
    }

    @media (max-width: 768px) {
      margin-top: 0;
    }
  `

  const Paragraph = styled.p`
    color: #f5f5f5;
    font-size: 1.6rem;

    span {
      font-weight: 700;
    }
  `
  return (
    <Result>
      <Image src={`https://www.cryptocompare.com${IMAGEURL}`} alt='puede ser la imagen del logo de una criptomoneda' />
      <div>
        <PriceActual>Precio actual: <span>{PRICE}</span></PriceActual>
        <Paragraph>Precio más alto del día: <span>{HIGHDAY}</span></Paragraph>
        <Paragraph>Precio más bajo del día: <span>{LOWDAY}</span></Paragraph>
        <Paragraph>Variación últimas 24h: <span>{CHANGEPCT24HOUR}%</span></Paragraph>
        <Paragraph>Última actualización: <span>{LASTUPDATE}</span></Paragraph>
      </div>
    </Result>
  )
}

export default Price
