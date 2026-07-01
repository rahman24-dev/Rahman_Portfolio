import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import SkillSection from './components/SkillSection/SkillSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Contactus from './components/ContactUs/Contactus'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SkillSection/>
      <ProjectSection/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App