import React from 'react'
import Image from '../components/Image.jsx'
import logo from '../assets/logo.png'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
const Navber = () => {
  return (
    <nav className='py-8'>
      <Container>
        <Flex className='flex justify-between'>
         <div className='w-1/3'>
          <Image src={logo} alt="logo" className="" />
        </div>
        <div className='w-2/3'>
          {/* Navigation items can be added here */}
        <ul className='flex gap-x-10'>
          <List text="Home" />
          <List text="About" />
          <List text="Services" />
          <List text="Contact" />
        </ul>
        </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber