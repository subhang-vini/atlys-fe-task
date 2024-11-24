import FunctionModal from './FunctionModal'
import { useReducer, useCallback, useState } from 'react'
import modalsArray from '../constants/modals'
import InputOutput from './InputOutput'
import { Container } from '../styles/style'
const Wrapper = () => {
  const [initialInputValue, setInitialInputValue] = useState(0)
  const [finalOutputValue, setFinalOutputValue] = useState(0)
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'setInputValue':
          return { ...state, [action.modalKey]: action.inputValue }
        case 'setError':
          return { ...state, [action.modalKey]: action.error }
        default:
          return state
      }
    },
    {
      ...modalsArray.reduce((acc, modal) => {
        acc[modal.modalKey] = 0
        return acc
      }, {})
    }
  )
  const setOutputValue = useCallback((modalKey, value) => {
    if (modalKey)
      dispatch({ type: 'setInputValue', modalKey, inputValue: value })
    else setFinalOutputValue(value)
  }, [])
  return (
    <Container>
      <InputOutput
        moduleVar={initialInputValue}
        moduleVarSetter={setInitialInputValue}
      />
      {modalsArray.map(modalProps => (
        <FunctionModal
          key={modalProps.modalKey}
          {...modalProps}
          inputValue={
            modalProps.previousModalKey || initialInputValue === null
              ? state[modalProps.modalKey]
              : parseInt(initialInputValue)
          }
          setOutputValue={setOutputValue}
        />
      ))}
      <InputOutput moduleVar={finalOutputValue} isOutputModule />
    </Container>
  )
}

export default Wrapper
