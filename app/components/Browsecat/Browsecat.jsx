'use client'
import React from 'react'
import EcomSalesTitle from "../E-ComSales/EcomSalesTitle"
import Title from '../Title/Title'
export default function Browsecat() {
    return (
        <div className='flex flex-col'>
            <Title title={"Categories"} />
            <EcomSalesTitle title={"Browse By Category"} />
        </div>
    )
}
