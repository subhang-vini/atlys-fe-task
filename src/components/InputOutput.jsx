import {
  InputOutputLabel,
  InputComponentWrapper,
  InputComponent
} from '../styles/style'
import InputOutputDot from './InputOutputDot'
// import debounce from 'lodash.debounce'

const InputOutput = ({
  moduleVar,
  moduleVarSetter,
  isOutputModule,
  setInputNodePosition = () => {},
  setOutputNodePosition = () => {}
}) => {
  const setOutputPositionCb = position => {
    setOutputNodePosition('finalOutput', position)
  }
  const setInputPositionCb = position => {
    setInputNodePosition('entryPoint', position)
  }
  if (isOutputModule) {
    return (
      <div>
        <InputOutputLabel isOutputModule>Final Output y</InputOutputLabel>
        <InputComponentWrapper isOutputModule>
          <InputComponent
            type='number'
            value={moduleVar}
            readOnly
            isOutputModule
          ></InputComponent>
          <InputOutputDot setPosition={setOutputPositionCb} />
        </InputComponentWrapper>
      </div>
    )
  }
  return (
    <div>
      <InputOutputLabel>Initial Value of x</InputOutputLabel>
      <InputComponentWrapper>
        <InputComponent
          type='number'
          value={moduleVar}
          onChange={e => moduleVarSetter(e.target.value)}
        ></InputComponent>
        <InputOutputDot setPosition={setInputPositionCb} />
      </InputComponentWrapper>
    </div>
  )
}

export default InputOutput
