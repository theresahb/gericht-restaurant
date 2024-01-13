import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Menu from '../../components/Menu/Menu'
import Word from '../../components/Word/Word'
import Video from '../../components/Video/Video'
import Awards from '../../components/Awards/Awards'
import Gallery from '../../components/Gallery/Gallery'
import Contact from '../../components/Contact/Contact'
// import Footer from '../../components/Footer/Footer'
import Subscribe from '../../components/Subscribe/Subscribe'

const Home = () => {
  return (
    <div className='bg-bgColor'>
      <Hero />
      <About />
      <Menu />
      <Word />
      <Video />
      <Awards />
      <Gallery />
      <Contact />
      <Subscribe />
    </div>
  )
}

export default Home
