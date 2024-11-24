import {
  InputOutputLabel,
  InputComponentWrapper,
  InputComponent
} from '../styles/style'
// import debounce from 'lodash.debounce'

const InputOutput = ({ moduleVar, moduleVarSetter, isOutputModule }) => {
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
      </InputComponentWrapper>
    </div>
  )
}

export default InputOutput
