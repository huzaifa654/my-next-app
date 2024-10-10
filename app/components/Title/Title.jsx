'use client'
import React from 'react'

export default function Title({ title }) {
    return (
        <div className='flex px-16 mt-10'>
            <div className='h-10 w-5 bg-red-600 rounded-md' />

            <p className='text-red-600 self-center font-semibold ml-6'>{title}</p>
        </div>
    )
}
