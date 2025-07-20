import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


function App() {
  return (
   <>
   <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>
    <Footer/>
   </>
  )
}

export default App