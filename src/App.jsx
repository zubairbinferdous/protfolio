import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Hero from './pages/Hero'
import Service from './pages/Service'
import Work from './pages/Work'

function App() {
 
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      {/* <Articles></Articles> */}
      <Service></Service>
      {/* <Clints></Clints> */}
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
