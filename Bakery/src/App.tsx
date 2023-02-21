import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Products from './components/Products/Products' 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <header>
      <NavBar/>
      </header>
      <section>
      <Products/>
      </section>
    </div>
  )
}

export default App
