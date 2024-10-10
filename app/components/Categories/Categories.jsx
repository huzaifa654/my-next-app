'use client'
import React from 'react'
import DropDown from '../../assets/DropDown.png'
import Image from 'next/image'


export default function Categories() {
    return (
        <ul className='flex-col text-black font-medium font-sans border-r pr-10 '>
            <div className='flex items-center mt-8 cursor-pointer'>
                <span className='flex-1 whitespace-nowrap'>Woman’s Fashion</span>
                <Image src={DropDown} width={25} height={25} objectPosition='contain' className='ml-7' />
            </div>
            <div className='flex items-center mt-4 cursor-pointer'>
                <span className='flex-1 whitespace-nowrap'>Men’s Fashion</span>
                <Image src={DropDown} width={25} height={25} objectPosition='contain' className='ml-14' />
            </div>

            <li className='mt-4 cursor-pointer'>Electronics</li>
            <li className='mt-4 cursor-pointer' >Home & Lifestyle</li>
            <li className='mt-4 cursor-pointer'>Medicine</li>
            <li className='mt-4 cursor-pointer'>Sports & Outdoor</li>
            <li className='mt-4 cursor-pointer'>Baby’s & Toys</li>
            <li className='mt-4 cursor-pointer'>Health & Beauty</li>
        </ul>
    )
}
