'use client'

import Form from './components/Form';
import exchangeRates from './exchangeRates.json';
import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(0);

  return (
    <main className='grid gap-8'>
      <section>
        <Form value={amount} onChange={(amount: number) => setAmount(amount)} />
      </section>
      <section className='flex-1 bg-emerald-800 rounded-3xl p-8 text-white overflow-y-auto'>
        <ul className='flex flex-col gap-4'>
          {Object.entries(exchangeRates).map(
            ([name, value]: [string, {buy: number, sell: number}]) => {
              const total = amount ? Number(amount) / value.buy : value.buy
              return (
                <li key={name} className='flex gap-4 justify-between item-center'>
                  <div className='text-emerald-100'>{name}</div>
                  <div className='flex items-center gap-4'>
                    {
                      amount ? (
                        <div className='text-emerald-500 text-xl font-bold'>
                          {Number(total).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}
                        </div>
                      ) : null
                    }
                    <div className='text-emerald-300 text-3xl font-bold'>
                      {Number(value.buy).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}
                    </div>
                  </div>
                </li>
              )
            }
          )}
        </ul>
      </section>
    </main>
  )
}
