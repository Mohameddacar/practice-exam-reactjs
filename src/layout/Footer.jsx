import React from 'react'
import logo from '../assets/logo.png'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoLogoTiktok } from 'react-icons/io5'
const Footer = () => {
  return (
    <footer className='py-[55px] bg-[#F5F5F3]'>
     <Container>
        <Flex>
            <div className='w-[15%]'>
            <strong className='text-base text-secondary font-dm font-bold'>MENU</strong>
           <ul className='flex flex-col gap-y-[6px] pt-4'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Shop</li>
            <li>Services</li>
           </ul>
        </div>
        <div className='w-[15%]'>
            <strong className='text-base text-secondary font-dm font-bold'>SHOP</strong>
            <ul className='flex flex-col gap-y-[6px] pt-4'>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
           </ul>
        </div>
        <div className='w-[15%]'>
            <strong className='text-base text-secondary font-dm font-bold'>HELP</strong>
            <ul className='flex flex-col gap-y-[6px] pt-4'>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Special E-shop</li>
            <li>Shipping</li>
            <li>Secure Payments</li>
           </ul>
        </div>
        <div className='w-[25%]'>
            <strong className='text-base text-secondary font-dm font-bold'>(052) 611-5711</strong>
            <p className='text-base text-secondary font-dm font-bold'>company@domain.com</p>
            <p>575 Crescent Ave. Quakertown, PA 18951</p>
        </div>
        <div className='w-[30%]'>
            <img src={logo} alt='logo' />
        </div>
        </Flex>
        <section className='py-[65px]'>
            <Flex>
            <div className='w-1/2  bg-blue-500 h-[100px]'>
            {/* social media icons from react-icons */}
            <div className='flex gap-x-4'>
                <FaFacebookF />
                <FaInstagram />
                <IoLogoTiktok />
            </div>

            </div>
            <div className='w-1/2'>
                <p className='text-center'>© 2025 Dacar. All Rights Reserved.</p>
            </div>
            </Flex>
        </section>
     </Container>
    </footer>
  )
}

export default Footer