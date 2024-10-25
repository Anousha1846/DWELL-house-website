import React from 'react'
import Image from 'next/image'
import bannerAgents from '../../public/BannerAgents.jpg'

const BannerAgents = () => {
   
  return (
    <div className='w-[100%] h-[585px]'>
   <Image
  src={bannerAgents}
  alt='banner-img'
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: '100%' }} 
  quality={100}
/>

    </div>
  )
}

export default BannerAgents
