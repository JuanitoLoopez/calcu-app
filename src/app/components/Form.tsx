'use client'

import React from 'react';

export default function Form({value, onChange}: {
    value: number,
    onChange: (amount: number) => void
}) {
    return (
        <form className='w-full'>
            <label className='block space-y-2'>
                <span>Quetzal Amount:</span>
                <input 
                    className='block rounded-full rounded-md bg-gray-200 p-2 text-right w-full'
                    type="number"
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                />
            </label>
        </form>
    )
}