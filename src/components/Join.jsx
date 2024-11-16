import React from 'react'

const Join = () => {
  return (
    <div className='p-[20px] md:py-[80px] bg-[#003087] text-white'>
    <h1 className='text-2xl md:text-4xl font-light mb-[50px] md:mb-[80px] text-center'>Join 200M active PayPal accounts worldwide.</h1>

      <div className='flex flex-col md:flex-row px-[50px] md:gap-[30px] gap-[25px]'>
      <article className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-2xl font-light'>Safer and protected</h2>
        <p className='mb-[10px]'>Shop with peace of mind. We don’t share your full financial information with sellers. And PayPal Buyer Protection covers your eligible purchases if they don’t show up or match their description.</p>
        <button className='font-bold'>More about security</button>
      </article>
       <article className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-2xl font-light'>Mostly free, always upfront</h2>
        <p>It’s free to open a PayPal account and buy something using PayPal unless it involves a currency conversion.</p>
        <button className='font-bold'>More about fees</button>
       </article>
      </div>
    </div>
  )
}

export default Join
