import FunctionModal from './FunctionModal'
import { useReducer, useCallback, useState, useMemo } from 'react'
import modalsArray from '../constants/modals'
import InputOutput from './InputOutput'
import { Container, ModalWrapper } from '../styles/style'
import Connections from './Connections'
const Wrapper = () => {
  const [initialInputValue, setInitialInputValue] = useState(0)
  const [finalOutputValue, setFinalOutputValue] = useState(0)
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'setInputValue':
          return { ...state, [action.modalKey]: action.inputValue }
        case 'setInputNodePosition':
          return { ...state, [`${action.modalKey}-input`]: action.position }
        case 'setOutputNodePosition':
          return { ...state, [`${action.modalKey}-output`]: action.position }
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
  const setOutputNodePosition = useCallback((modalKey, position) => {
    if (modalKey)
      dispatch({ type: 'setOutputNodePosition', modalKey, position })
  }, [])
  const setInputNodePosition = useCallback((modalKey, position) => {
    if (modalKey) dispatch({ type: 'setInputNodePosition', modalKey, position })
  }, [])
  const inputConnections = Object.entries(state || {}).filter(([key] = []) =>
    key.includes('input')
  )
  const outputConnections = Object.entries(state || {}).filter(([key] = []) =>
    key.includes('output')
  )
  const connections = useMemo(() => {
    if (!inputConnections.length || !outputConnections.length) return []
    const returnVal = modalsArray.reduce((acc, item) => {
      if (item.nextModalKey) {
        const outputKeyToSearch = `${item.modalKey}-output`
        const inputKeyToSearch = `${item.nextModalKey}-input`
        const item2 = outputConnections.find(
          ([key]) => key === outputKeyToSearch
        )
        const nextItem = inputConnections.find(
          ([key]) => key === inputKeyToSearch
        )
        if (item2 && nextItem) {
          acc.push({
            from: item2[1],
            to: nextItem[1]
          })
        }
      } else {
        const inputKeyToSearch = `${item.modalKey}-output`
        const outputKeyToSearch = 'finalOutput-output'
        const item2 = outputConnections.find(
          ([key]) => key === inputKeyToSearch
        )
        const nextItem = outputConnections.find(
          ([key]) => key === outputKeyToSearch
        )
        if (item2) {
          acc.push({
            from: item2[1],
            to: nextItem[1]
          })
        }
      }
      return acc
    }, [])
    const initialEntryPoint = inputConnections.find(
      ([key]) => key === 'entryPoint-input'
    )
    const finalOutputKey = modalsArray.find(
      item => !item.previousModalKey
    )?.modalKey
    const finalOutputPoint = inputConnections.find(
      ([key]) => key === `${finalOutputKey}-input`
    )
    returnVal.push({
      from: initialEntryPoint[1],
      to: finalOutputPoint[1]
    })
    return returnVal
  }, [inputConnections, outputConnections])
  return (
    <Container>
      <InputOutput
        moduleVar={initialInputValue}
        moduleVarSetter={setInitialInputValue}
        setInputNodePosition={setInputNodePosition}
      />
      <ModalWrapper>
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
            setOutputNodePosition={setOutputNodePosition}
            setInputNodePosition={setInputNodePosition}
          />
        ))}
      </ModalWrapper>
      <InputOutput
        moduleVar={finalOutputValue}
        isOutputModule
        setOutputNodePosition={setOutputNodePosition}
      />
      <Connections connections={connections} />
    </Container>
  )
}

export default Wrapper
