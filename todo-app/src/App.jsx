import {useState} from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


return (
  <>
    <button onClick={() => setCounter((counter) => counter + 1)}>
      button : {counter}
    </button>

    <button onClick={() => setCounter((0))}>
      clear
    </button>
  </>
)
}

export default App
