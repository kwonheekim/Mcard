import Button from './components/shared/Button'
import Input from './components/shared/Input'
import Text from './components/shared/Text'
import TextField from './components/shared/TextFieldLabel'

function App() {
  return (
    <div>
      <Text
        typography="t1"
        color="black"
        display="block"
        textAlign="center"
        fontWeight="bold"
      >
        Hello World
      </Text>
      <Button color="primary" size="small">
        Button
      </Button>

      <Input />
      <TextField label="Name" hasError={true} />
    </div>
  )
}

export default App
