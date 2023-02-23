import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Products from './components/Products/Products'
import Navbar from './components/NavBar/NavBar'
import Carousel from './components/Carousel/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">     
    <Navbar/> 
    <Carousel/>
      <Products/>
    </div>
    
  )
}

export default App
