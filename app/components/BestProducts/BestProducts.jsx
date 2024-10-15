import React from 'react'
import Title from '../Title/Title'
import EcomSalesTitle from '../E-ComSales/EcomSalesTitle';
import Wishlist from '../../assets/Wishlist.png'
import eye from '../../assets/eye.png'
import shirt from '../../assets/shirt.png'

import Image from 'next/image';


const Button = () => {
    return (
        <div className='bg-red-500  p-2  text-white text-sm text-center flex items-center self-center justify-center rounded-md cursor-pointer mr-16' style={{ width: 150, height: 45 }}>
            <p>View All</p>
        </div>
    )
}


const Product = () => {
    return (
        <div className='flex flex-col my-7 cursor-pointer'>
            <div className='flex bg-lightBrown rounded-md p-2 py-3 flex-col ml-16 h-250 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1'>
                <div className="flex">
                    <div
                        className='flex justify-center items-center self-center'
                        style={{ width: 190, height: 180 }}>
                        <Image src={shirt} width={'100%'} height={180} />
                    </div>
                    <div className="flex-col flex ">
                        <div
                            className='self-end bg-white rounded-full hover:bg-gray-300 transition duration-300 ease-in-out'
                            style={{ width: 25, height: 25 }}>
                            <Image src={Wishlist} width={'100%'} height={'100%'} />
                        </div>
                        <div
                            className='self-end bg-white rounded-full mt-3 hover:bg-gray-300 transition duration-300 ease-in-out'
                            style={{ width: 25, height: 25 }}>
                            <Image src={eye} width={'100%'} height={'100%'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-16">
                <h1 className='text-black font-semibold text-lg mt-4'>The north coat</h1>
                <p className='text-red-600 font-semibold'>$120</p>
            </div>
        </div>

    )
}

const BestProducts = () => {

    return (
        <div className='flex flex-col'>
            <Title title={"This Month"} />
            <div className='flex justify-between'>
                <EcomSalesTitle title={"Best Selling Products"} />
                <Button />
            </div>
            <div className='flex gap-2 overflow-auto'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

            </div>
        </div>
    )
}
export default BestProducts;