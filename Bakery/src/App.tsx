import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Products from './components/Products/Products' 
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
    <BrowserRouter>
    <h2>Aqui va el navbar</h2>
    </BrowserRouter>
      <Products/>
    </div>
  )
}

export default App
