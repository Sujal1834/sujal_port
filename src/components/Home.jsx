import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Footer from './Footer'
import Header from './Header'
import Section1 from './Section1'

const Home = () => {
  return (
    <div id='home'>
        <Header/>
        <Section1/>
        <div id="education">
          <Education/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home