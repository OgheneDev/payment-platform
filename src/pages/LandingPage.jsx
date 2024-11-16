import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Individuals from '../components/Individuals'
import Connects from '../components/Connects'
import Join from '../components/Join'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Individuals />
      <Connects />
      <Join />
      <SignUp />
      <Footer />
    </div>
  )
}

export default LandingPage
