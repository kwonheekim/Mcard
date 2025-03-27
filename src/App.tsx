import Button from './components/shared/Button'
import Text from './components/shared/Text'

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
    </div>
  )
}

export default App
