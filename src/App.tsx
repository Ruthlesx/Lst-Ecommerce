
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products-Section/Products"
import Posts from "./components/Posts/Posts"
import AboutUs from "./components/AboutUs/About-us"
import Services from "./components/Services/Services"
import Problems from "./components/Problems/Problems"
import Footer from "./components/Footer/Footer"

import './App.css'

function App() {
  

  return (
    <Router>
      <Header />
      <Hero />
      <Products/>
      <Services />
      <Posts />
      <AboutUs/>
      <Problems />
      <Footer />
      
      
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  )
}

export default App
