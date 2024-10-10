'use client'
import React from 'react'
import EcomSalesTitle from "../E-ComSales/EcomSalesTitle"
import Title from '../Title/Title'
import CellPhone from '../../assets/CellPhone.png'
import Computer from '../../assets/Computer.png'
import SmartWatch from '../../assets/SmartWatch.png'
import headphones from '../../assets/headphones.png'
import camera from '../../assets/camera.png'
import Image from 'next/image'


export default function Browsecat() {
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
    ]

    const Categories = ({ item }) => {
        return (
            <div className='border-2 p-8 flex flex-col items-center justify-center rounded-md cursor-pointer my-5' style={{ width: 170 }}>
                <div className='self-center' style={{ width: 56, height: 56 }}>
                    <Image src={item?.image} width={"100%"} height={145} />
                </div>
                <p className='text-center text-black text-sm mt-3 font-medium'>{item?.name}</p>
            </div>
        )
    }

    const ForwardButton=()=>{
        return(
            <div className='p-3 rounded-full' style={{width:24}}>
               <Image src={}/>
            </div>
        )

    }

    return (
        <div className='flex flex-col'>
            <Title title={"Categories"} />
            <div className='flex justify-between'>
                <EcomSalesTitle title={"Browse By Category"} />

            </div>
            <div className='flex gap-9 ml-16 my-7'>
                {Data?.map((item, index) => {
                    return (
                        <Categories item={item} />
                    )
                })}
            </div>

        </div>
    )
}
