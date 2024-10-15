import React from 'react'

const Time = ({time, timeTitle}) => {
    return (
        <div className='bg-white rounded-full  flex justify-center flex-col p-3 my-3' style={{ width: 62, height: 62 }}>
            <p className='text-center font-semibold text-black'>{time}</p>
            <p className='text-center text-xxs text-black'>{timeTitle}</p>
        </div>
    )
}

const Button=()=>{
    return(
        <div className='bg-green-400 rounded-sm p-3 flex justify-center text-white'>

        </div>
    )
}
const Hero2 = () => {
    return (
        <div className='flex m-6 bg-black w-full p-5 '>
            <div className='flex flex-col ml-6'>
                <p className='text-green-400 font-semibold mt-5'>Categories</p>
                <h1 className='text-white  font-semibold text-5xl leading-snug	mt-5'>Enhance Your <br /> Music Experience</h1>
                <div className='flex gap-7'>
                    <Time time={23} timeTitle={'Hours'}/>
                    <Time time={5} timeTitle={'Days'}/>
                    <Time time={59} timeTitle={'Minutes'} />
                    <Time time={35} timeTitle={'Seconds'}/>
                </div>
            </div>
        </div>
    )
}

export default Hero2