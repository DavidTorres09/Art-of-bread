import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Products from './components/Products/Products'
import Navbar from './components/NavBar/NavBar'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/footer'
import AboutUs from './components/About us/AboutUs'


function App() {
  

  return (
    <div className="App">
      <section id="home">
        <Navbar />
        <Carousel />
      </section>
      <section id="about">

      </section>
      <section id="products">
        <Products />
      </section>
      <section id="contact">
        <AboutUs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>

  )
}

export default App
