'use client'
import React, { useState } from 'react'
import EcomSalesTitle from "../E-ComSales/EcomSalesTitle"
import Title from '../Title/Title'
import CellPhone from '../../assets/CellPhone.png'
import Computer from '../../assets/Computer.png'
import SmartWatch from '../../assets/SmartWatch.png'
import headphones from '../../assets/headphones.png'
import camera from '../../assets/camera.png'
import game from '../../assets/game.png'
import back from '../../assets/backward.png'
import forward from '../../assets/forward.png'


import Image from 'next/image'


export default function Browsecat() {
    const [ActiveIndex, setActiveIndex] = useState(0)

    const Data = [
        {
            image: CellPhone,
            name: "Phones"
        },
        {
            image: Computer,
            name: "Computers"
        },
        {
            image: SmartWatch,
            name: "SmartWatch"
        },
        {
            image: camera,
            name: "Camera"
        },
        {
            image: headphones,
            name: "HeadPhones"
        },
        {
            image: game,
            name: "Gaming"
        },
    ]

    const decrementIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Data.length);
    };

    const incrementIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
    };

    const Categories = ({ item, index }) => {
        return (
            <div className='border-2 p-8 flex flex-col items-center justify-center rounded-md cursor-pointer my-5' style={{ width: 170, background: ActiveIndex == index && 'red' }}>
                <div className='self-center' style={{ width: 56, height: 56 }}>
                    <Image src={item?.image} width={"100%"} height={145} />
                </div>
                <p className='text-center text-black text-sm mt-3 font-medium'>{item?.name}</p>
            </div>
        )
    }

    const ForwardButton = ({ src, onClick }) => {
        return (
            <div className='p-3 rounded-full cursor-pointer flex items-center justify-center bg-gray-200 ' style={{ width: 46, height: 46 }} onClick={onClick}>
                <div className='self-center' style={{ width: 16, height: 16, }}>
                    <Image src={src} width={'100%'} height={'100%'} />
                </div>
            </div>
        )

    }

    return (
        <div className='flex flex-col'>
            <Title title={"Categories"} />
            <div className='flex justify-between'>
                <EcomSalesTitle title={"Browse By Category"} />
                <div className='flex gap-2 mr-16'>
                    <ForwardButton src={back} onClick={incrementIndex} />
                    <ForwardButton src={forward} onClick={decrementIndex} />
                </div>
            </div>
            <div className='flex gap-9 ml-16 my-7'>
                {Data?.map((item, index) => {

                    return (
                        <Categories item={item} index={index} />
                    )
                })}
            </div>

        </div>
    )
}
