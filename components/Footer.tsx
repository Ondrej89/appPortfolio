import { CLIENT_PUBLIC_FILES_PATH } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-center flex-col'>
          <Image src="/logo-blue.png"
          width={150}
          height={80}
          alt='logo'/>
          <p className=' text-center text-sm font-normal mt-5 max-w-xs'>Portfolio is an app where you share your awesome projects.</p>
        </div>
        <div className='FlexBetween footer_copywright'>
        <p>@ 2023 Portfolio. Designed by LoneWolf</p>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer