import React from 'react'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'


const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <ContactMe/>
    
    </>
  )
}

export default Home