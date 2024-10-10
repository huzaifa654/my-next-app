'use client'
import React, { useState } from 'react'
import xbox from "../../assets/xbox.png"
import keyboard from "../../assets/keyboard.png"
import led from "../../assets/led.png"
import chair from "../../assets/chair.png"
import Image from 'next/image'
import Wishlist from '../../assets/Wishlist.png'
import eye from '../../assets/eye.png'
import { Rating } from 'react-simple-star-rating'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


export default function Sales() {
    const Data = [
        {
            image: xbox,
            name: "HAVIT HV-G92 Gamepad",
            discount: "-40%"
        },
        {
            image: keyboard,
            name: "AK-900 Wired Keyboard",
            discount: "-35%"
        },
        {
            image: led,
            name: "IPS LCD Gaming Monitor",
            discount: "-30%"
        },
        {
            image: chair,
            name: "S-Series Comfort Chair",
            discount: "-40%"
        },
        {
            image: xbox,
            name: "HAVIT HV-G92 Gamepad",
            discount: "-40%"
        },
        {
            image: xbox,
            name: "HAVIT HV-G92 Gamepad",
            discount: "-40%"
        },
    ]
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


    const EcommersceItems = ({ mr, item }) => {
        return (
            <div className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4`}>
                <div
                    className='p-2 flex flex-col bg-lightBrown py-3 rounded-md '
                    style={{ width: 270 }}
                >
                    <div className='flex justify-between'>
                        <div className='bg-red-500 p-1 px-4 self-start rounded-md w-55'>
                            <p className='text-white text-custom-font'>{item?.discount}</p>
                        </div>
                        <div>
                            <div
                                className='self-end bg-white rounded-full'
                                style={{ width: 25, height: 25 }}
                            >
                                <Image src={Wishlist} width={'100%'} height={'100%'} />
                            </div>
                            <div
                                className='self-end bg-white rounded-full mt-3'
                                style={{ width: 25, height: 25 }}
                            >
                                <Image src={eye} width={'100%'} height={'100%'} />
                            </div>
                        </div>
                    </div>
                    <div
                        className='flex justify-center items-center self-center'
                        style={{ width: 190, height: 180 }}
                    >
                        <Image src={item?.image} width={'100%'} height={180} />
                    </div>
                </div>
                <h1 className='text-black font-semibold text-lg mt-4'>{item?.name}</h1>
                <p className='text-red-600 font-semibold'>$120</p>
            </div>

        );
    }

    const Button = () => {
        return (
            <div className='flex bg-red-600 cursor-pointer w-40 p-2 rounded-md py-3 items-center self-center text-white text-sm text-center justify-center my-3'>
                <p className='self-center text-center'>View All Products</p>
            </div>
        )
    }
    return (
        <div className='flex flex-col'>
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
            <div className="w-full  ml-11 mt-4 flex flex-col border-b-2 pb-8">
                <div className="flex space-x-4 p-4 gap-2.5">
                    {Data.map((item, key) => {
                        return (
                            <EcommersceItems item={item} />
                        )
                    })}
                </div>
                <Button />

            </div>

        </div>
    )
}
