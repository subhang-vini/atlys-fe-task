import { useState, useEffect } from 'react'
import validator from '../utils/validator'
import parseFunction from '../utils/parseFunction'
import {
  ModalTitle,
  Modal,
  Equation,
  EquationInput,
  Function,
  FunctionSelect,
  InputOutputDotsContainer,
  FlexContainer,
  Error
} from '../styles/style'
import modals from '../constants/modals'
import InputOutputDot from './InputOutputDot'

const FunctionModal = ({
  modalKey,
  nextModalKey,
  setOutputValue,
  inputValue,
  name,
  setInputNodePosition = () => {},
  setOutputNodePosition = () => {}
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
        try {
          setOutputValue(nextModalKey, parseFunction(result, inputValue))
        } catch (e) {
          setError('Invalid Expression')
        }
      }
    }
  }, [inputValue, inputString])

  const setInputPositionCb = position => {
    setInputNodePosition(modalKey, position)
  }
  const setOutputPositionCb = position => {
    setOutputNodePosition(modalKey, position)
  }
  return (
    <Modal>
      <ModalTitle>{name}</ModalTitle>
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
            <option value=''>-</option>
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
        {errorState && <Error>{errorState}</Error>}
      </Equation>
      <InputOutputDotsContainer>
        <FlexContainer>
          <InputOutputDot setPosition={setInputPositionCb} />
          <div>input</div>
        </FlexContainer>
        <FlexContainer>
          <div>output</div>
          <InputOutputDot setPosition={setOutputPositionCb} />
        </FlexContainer>
      </InputOutputDotsContainer>
    </Modal>
  )
}

export default FunctionModal
