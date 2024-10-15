import Image from 'next/image'
import React from 'react'
import radio from '../../assets/radio.png'
const Time = ({ time, timeTitle }) => {
    return (
        <div className='bg-white rounded-full  flex justify-center flex-col p-3 my-3' style={{ width: 62, height: 62 }}>
            <p className='text-center font-semibold text-black'>{time}</p>
            <p className='text-center text-xxs text-black'>{timeTitle}</p>
        </div>
    )
}

const Button = () => {
    return (
        <div className='bg-green-400 rounded-md p-3 flex justify-center text-white my-6 cursor-pointer' style={{ width: 171, height: 50 }}>
            <p>Buy Now!</p>
        </div>
    )
}
const Hero2 = () => {
    return (
        <div className='flex m-6 bg-black w-[95%] p-5 ml-16 justify-between mr-10'>
            <div className='flex flex-col ml-16'>
                <p className='text-green-400 font-semibold mt-5'>Categories</p>
                <h1 className='text-white  font-semibold text-5xl leading-snug	mt-5'>Enhance Your <br /> Music Experience</h1>
                <div className='flex gap-7'>
                    <Time time={23} timeTitle={'Hours'} />
                    <Time time={5} timeTitle={'Days'} />
                    <Time time={59} timeTitle={'Minutes'} />
                    <Time time={35} timeTitle={'Seconds'} />
                </div>
                <Button />
            </div>
            <div className="flex justify-center self-center mr-16" style={{ width: 700, height: 400 }}>
                <Image src={radio} width={'100%'} height={'100%'} />
            </div>
        </div>
    )
}

export default Hero2