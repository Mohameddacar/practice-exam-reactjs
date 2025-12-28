import React from 'react'
import Image from '../components/Image.jsx'
import logo from '../assets/logo.png'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import { Link } from 'react-router-dom'
const Navber = () => {
  return (
    <nav className='py-8'>
      <Container>
        <Flex className='flex justify-between'>
         <div className='w-1/3'>
          <Link to="/"><Image src={logo} alt='logo' /></Link>
        </div>
        <div className='w-2/3'>
          {/* Navigation items can be added here */}
        <ul className='flex gap-x-10'>
          <Link to="/"><List text="Home" /></Link>
          <Link to="/about"><List text="About" /></Link>
          <Link to="/shop"><List text="Shop" /></Link>
          <Link to="/services"><List text="Services" /></Link>
          <Link to="/contact"><List text="Contact" /></Link>
        </ul>
        </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber