'use client'
import Image from 'next/image'
import React from 'react'
import apple from "../../assets/apple.png"
import iphone from "../../assets/iphone.png"
import forward from "../../assets/forward.png"


export default function Hero() {
    return (
        <div className='bg-black p-6  flex m-8 w-full justify-between '>
            <div className='mt-5 ml-10'>
                <div className="flex">
                    <Image src={apple} width={50} height={50} />
                    <p className='text-white text-lg self-center ml-5'>iPhone 14 Series</p>
                </div>
                <h1 className='text-white font-bold	text-6xl mt-4 leading-snug	'>Up to 10% <br /> off Voucher</h1>
                <div className="flex mt-4">
                    <p className='text-white text-lg self-center ml-5   border-b-2'>Shop Now</p>
                    <Image src={forward} width={30} height={30} objectFit="contain" className='ml-4' />
                </div>
            </div>
            <Image src={iphone} width={500} height={150} objectPosition='contain' className='self-center mr-8' />

        </div>
    )
}
