import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
  color: #f5f5f5;
  display: block;
  margin: 1.5rem 0;
  font-size: 1.9rem;
  font-weight: 700;
`

const Select = styled.select`
  padding: 1rem;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  background: #c6dbff;
  font-size: 1.6rem;
  color: #454545;

  &:focus {
    outline: 2px solid #9497ff;
  }
`

const useSelectCurrency = (label, options) => {
  const [state, setState] = useState('')

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value='' disabled defaultValue>Seleccione</option>
        {options.map(option => (
          <option
            key={option.id}
            value={option.id}
          >
            {option.name}
          </option>
        ))}
      </Select>
    </>
  )

  return [state, SelectCurrency]
}

export default useSelectCurrency
