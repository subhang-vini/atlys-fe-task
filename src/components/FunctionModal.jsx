import { useState, useEffect } from 'react'
import validator from '../utils/validator'
import parseFunction from '../utils/parseFunction'
import {
  ModalTitle,
  Modal,
  Equation,
  EquationInput,
  Function,
  FunctionSelect
} from '../styles/style'
import modals from '../constants/modals'
import debounce from 'lodash.debounce'

const FunctionModal = ({
  modalKey,
  //   previousModalKey,
  nextModalKey,
  setOutputValue,
  inputValue,
  name
}) => {
  const [inputString, setInputString] = useState('')
  const [errorState, setError] = useState(null)
  useEffect(() => {
    if (inputString) {
      const { error, result } = validator(inputString)
      if (error) {
        setError(error)
      } else {
        setError(null)
        setOutputValue(nextModalKey, parseFunction(result, inputValue))
        // debounce(
        //   () => setOutputValue(nextModalKey, parseFunction(result, inputValue)),
        //   1000
        // )
      }
    }
  }, [inputValue, inputString])

  // const handleBlur = () => {
  //   const { error, result } = validator(inputString)
  //   if (error) {
  //     setError(error)
  //   } else {
  //     setError(null)
  //     setOutputValue(nextModalKey, parseFunction(result, inputValue))
  //   }
  // }
  return (
    <Modal>
      <ModalTitle>{name}</ModalTitle>
      {/* <div>{inputValue}</div>
      <input
        type='text'
        value={inputString}
        onChange={e => setInputString(e.target.value)}
        // onBlur={handleBlur}
      ></input>
      {errorState && <div>{errorState}</div>} */}
      <Equation>
        Equation
        <EquationInput
          type='text'
          value={inputString}
          onChange={e => setInputString(e.target.value)}
        ></EquationInput>
        <Function>
          Next Function
          <FunctionSelect disabled>
            {modals.map(modal => (
              <option
                value={modal.modalKey}
                selected={modal.modalKey === nextModalKey}
                key={modal.modalKey}
              >
                {modal.name}
              </option>
            ))}
          </FunctionSelect>
        </Function>
        {errorState && <div>{errorState}</div>}
      </Equation>
    </Modal>
  )
}

export default FunctionModal
