import React from 'react'
import individual from '../assets/images/individuals.jpg'

const Individuals = () => {
  return (
    <div className='pt-[30px] md:pt-[100px] pb-[50px] md:pb-[80px] px-[20px] text-center'>
      <h1 className='text-3xl mb-[30px] md:mb-[40px] md:text-4xl font-light'>PayPal is for everyone who pays online.</h1>
      <div className='flex flex-col gap-[20px] justify-center'>
        <img src={individual} alt="" className='w-[100px] md:w-[70px] mx-auto' />
        <h3 className='text-3xl font-light'>Individuals</h3>
        <p className='md:text-[13px]'>Find out why we have more than 200M active accounts worldwide.</p>
        <button className='border border-custom-blue hover:bg-custom-blue text-custom-blue hover:border-none  hover:text-white transition-colors duration-300 ease-in-out font-semibold py-[10px] px-[40px] w-fit rounded-full mx-auto'>Learn More</button>
      </div>
    </div>
  )
}

export default Individuals
