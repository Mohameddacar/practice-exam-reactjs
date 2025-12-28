import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import offer1 from '../assets/offer1.png'
import offer2 from '../assets/offer2.jpg'
import offer3 from '../assets/offer3.jpg'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                <Link to='/shop'><Image src={offer1} /></Link>
                </div>
                <Flex className='w-1/2 flex-col items-center justify-between'>
                 <Link to='/shop'><Image src={offer2} /></Link>
                  <Link to='/shop'><Image src={offer3} /></Link>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Offer