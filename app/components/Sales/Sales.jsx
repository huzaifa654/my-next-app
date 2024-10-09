'use client'
import React, { useState } from 'react'
import xbox from "../../assets/xbox.png"
import Image from 'next/image'
import Wishlist from '../../assets/Wishlist.png'
import eye from '../../assets/eye.png'
import { Rating } from 'react-simple-star-rating'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


export default function Sales() {
    const [rating, setRating] = useState(0)
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)
    const handleRating = (rate) => {
        setRating(rate)
    }


    const SalesTime = ({ title, time, ml, Nocolon }) => {
        return (
            <div className={`ml-${ml}`}>
                <p className='text-black font-semibold text-sm'>{title}</p>
                <div className='flex items-center'>
                    <p className='text-black font-bold text-4xl text-center'>{time}</p>
                    {Nocolon ? null : <p className='text-red-600 font-bold self-center text-4xl ml-5 '>:</p>}
                </div>
            </div>
        )
    }


    const EcommersceItems = () => {
        return (
            <div>
                <div className='p-2 w-60 bg-lightBrown py-3 rounded-md'>
                    <div className='flex justify-between'>
                        <div className='bg-red-600 px-2 self-start rounded-md'>
                            <p className='text-white text-custom-font'>-40%</p>
                        </div>
                        <div className='flex justify-center items-center mt-4 relative'>
                            <Image src={xbox} width={150} height={150} className='mr-4' />
                        </div>
                        <div className='relative'>
                            <div className='self-end bg-white rounded-full p-1'>
                                <Image src={Wishlist} width={25} height={25} />
                            </div>
                            <div className='self-end bg-white rounded-full mt-3 p-1'>
                                <Image src={eye} width={25} height={25} />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-black font-semibold text-lg mt-4'>HAVIT HV-G92 Gamepad</h1>
                <p className='text-red-600 font-semibold'>$120</p>



            </div>
        );
    }
    return (
        <div>
            <div className='flex px-16 mt-28'>
                <div className='h-10 w-5 bg-red-600 rounded-md' />

                <p className='text-red-600 self-center font-semibold ml-6'>Today’s</p>
            </div>
            <div className='flex'>
                <h2 className='font-bold text-4xl mt-6 px-16'>Flash Sales</h2>
                <SalesTime title={"Days"} time={"03"} ml={'10'} />
                <SalesTime title={"Hours"} time={"23"} ml={'5'} />
                <SalesTime title={"Minutes"} time={"19"} ml={'5'} />
                <SalesTime title={"Seconds"} time={"56"} ml={'5'} Nocolon={true} />
            </div>
            <div className="w-full overflow-x-auto ml-11 mt-4">
                <div className="flex space-x-4 p-4">
                    <EcommersceItems />
                    <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        style={{ flexDirection: "row" }}
                    />
                </div>
            </div>

        </div>
    )
}
