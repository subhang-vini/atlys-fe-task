import { useCallback } from 'react'
import { InputOutputDotContainer, InputOutputDot } from '../styles/style'
const InputOutput = ({ setPosition }) => {
  const refCallback = useCallback(node => {
    if (node) {
      const rect = node.getBoundingClientRect()
      setPosition({
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2
      })
    }
  }, [])
  return (
    <InputOutputDotContainer>
      <InputOutputDot ref={refCallback} />
    </InputOutputDotContainer>
  )
}

export default InputOutput
