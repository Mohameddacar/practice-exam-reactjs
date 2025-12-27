import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaArrowDown, FaBars, FaCartArrowDown, FaUser } from "react-icons/fa";
import { Input } from 'postcss';
import { IoSearch } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <section className='py-6 bg-[#F5F5F3]'>
        <Container>
            <Flex className='items-center'>
            <div className='w-3/12'>
                <Flex className='gap-x-2 items-center'>
                    <FaBars />
                    <p>Shop by Category</p>
                </Flex>
            </div>
            <div className='w-6/12'>
               <div className='relative'>
                <input className='py-4 pl-6 pr-16 bg-white w-full placeholder:text-[#C4C4C4]' type='text' placeholder='Search Products'  />
                      <IoSearch className='absolute top-1/2 right-[20px] -translate-y-1/2'/>
               </div>
                    
            </div>
                <div className='w-3/12'>
                <Flex className='justify-end items-center'>
                    <FaUser />
                    <FaArrowDown className='ml-[10px]'/>
                    <FaCartArrowDown className='ml-10' />
                </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sidebar