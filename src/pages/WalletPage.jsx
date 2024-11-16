import React from 'react'
import wallet from '../assets/images/link.svg'

const WalletPage = () => {
  return (
    <div className='flex flex-col gap-[20px] p-[30px] items-start text-center text-[#070f1b]'>
      <img src={wallet} alt="" className='w-[200px] mx-auto' />
      <h1 className='text-3xl mx-auto'>Link a new card</h1>
      <p className='text-[14px]'>Join the millions of customers who use PayPal to pay for everyday purchases any time, any day, anywhere.</p>
      <button className='mx-auto bg-blue-800  text-white py-[10px] px-[25px] rounded-full'>Link a card</button>
    </div>
  )
}

export default WalletPage
