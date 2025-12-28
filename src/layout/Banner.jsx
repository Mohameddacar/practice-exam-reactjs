import React from 'react'
import Image from '../components/Image'
import BannerImage from '../assets/banner.jpg'
import BannerImage2 from '../assets/banner2.jpg'
import BannerImage3 from '../assets/banner3.jpg'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerIcon1 from '../assets/bannerIcon1.png'
import BannerIcon2 from '../assets/bannerIcon2.png'
import BannerIcon3 from '../assets/bannerIcon3.png'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";


const Banner = () => {
   var settings = {
    autoplay: true,
    arrows:false,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    < section className='border-b border-[#F0F0F0]'>
    
     <div className='max-w-[2000px] mx-auto'>
      <Slider {...settings}>
      <div>
       <Image className='w-full h-[500px]' src={BannerImage}/>
      </div>
      <div>
       <Image className='w-full h-[500px]' src={BannerImage2}/>
      </div>
      <div>
       <Image className='w-full h-[500px]' src={BannerImage3}/>
      </div>
      </Slider>

     </div>
      
    
   <Container>
   <Flex className='justify-between'>

            <Flex className='items-center gap-x-4 py-[30px]'>
                    <Image src={BannerIcon1}/>
                    <p className='text-base text-[#6D6D6D] text-dm text-normal'>Two years warranty</p>
                </Flex>
                <Flex className='items-center gap-x-4 py-[30px]'>
                    <Image src={BannerIcon2}/>
                    <p className='text-base text-[#6D6D6D] text-dm text-normal'>Free shipping</p>
                </Flex>
                <Flex className='items-center gap-x-4 py-[30px]'>
                    <Image src={BannerIcon3}/>
                    <p className='text-base text-[#6D6D6D] text-dm text-normal'>Return policy in 30 days</p>
                </Flex>

   </Flex>

   </Container>
    </section>
  )
}

export default Banner