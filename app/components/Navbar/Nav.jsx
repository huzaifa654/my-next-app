'use client'
import React from 'react'
import Search from '../../assets/Search.png'
import Wishlist from '../../assets/Wishlist.png'
import Cart1 from '../../assets/Cart1.png'


import Image from 'next/image'
import Link from 'next/link'
export default function Nav() {
    const Routes = () => {
        return (
            <ul className='flex text-lg gap-20  mt-4'>
                <Link href={'/'} className='cursor-pointer'>Home</Link>
                <Link href={'/Contact'} className='cursor-pointer'>Contact</Link>
                <Link href={'/'} className='cursor-pointer'>About</Link>
                <Link href={'/'} className='cursor-pointer'>Sign up</Link>
            </ul>)
    }

    const Searchbar = () => {
        return (
            <div className='p-2 px-5 bg-gray-100 flex justify-between items-center rounded-md'>
                <input type="text" placeholder='What are you looking for?' className='text-gray-500 text-sm bg-transparent outline-none' />
                <Image src={Search} width={15} height={15} objectPosition='contain' className='self-center ml-1' />
            </div>
        )
    }

    return (
        <div className='flex mt-4  justify-between px-20 border-b-2 pb-5  sticky top-0 z-50	items-center bg-white'>
            <h2 className='text-xl font-semibold  mt-4'>Exclusive</h2>
            <Routes />
            <div className='flex  mt-4'>
                <Searchbar />
                <Image src={Wishlist} width={30} height={30} objectPosition='contain' className='self-center ml-5' color='black' />
                <Image src={Cart1} width={30} height={30} objectPosition='contain' className='self-center ml-5' color='black' />

            </div>
        </div>
    )
}
