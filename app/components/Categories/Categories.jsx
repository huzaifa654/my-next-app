'use client'
import React from 'react'
import DropDown from '../../assets/DropDown.png'
import Image from 'next/image'


export default function Categories() {
    return (
        <ul className='flex-col text-black font-medium font-sans border-r pr-10 '>
            <div className='flex items-center mt-8'>
                <span className='flex-1 whitespace-nowrap'>Woman’s Fashion</span>
                <Image src={DropDown} width={25} height={25} objectPosition='contain' className='ml-7' />
            </div>
            <div className='flex items-center mt-4'>
                <span className='flex-1 whitespace-nowrap'>Men’s Fashion</span>
                <Image src={DropDown} width={25} height={25} objectPosition='contain' className='ml-14' />
            </div>

            <li className='mt-4'>Electronics</li>
            <li className='mt-4' >Home & Lifestyle</li>
            <li className='mt-4'>Medicine</li>
            <li className='mt-4'>Sports & Outdoor</li>
            <li className='mt-4'>Baby’s & Toys</li>
            <li className='mt-4'>Health & Beauty</li>
        </ul>
    )
}
