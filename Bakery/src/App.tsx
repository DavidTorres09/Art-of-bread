import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Products from './components/Products/Products' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Products/>
    </div>
  )
}

export default App