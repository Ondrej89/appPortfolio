import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import { signOut } from 'next-auth/react'
import ProfileMenu from './ProfileMenu'

const Navbar = async () => {
    const session = await getCurrentUser()
  return (
    <nav>
        <div className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href='/'>
                    <Image
                        src="/logo.png"
                        width={250}
                        height={150}
                        alt='logo'
                    />
                </Link>
            </div>
            <div className='flexCenter gap-4'>
            {session?.user ? (
                <>
               <ProfileMenu session = {session}/>
                <Link href="create-project">Share work</Link>
                
                </>
            ):(
                <AuthProviders/>
            )}
        </div>
        </div>
        
    </nav>
  )
}

export default Navbar