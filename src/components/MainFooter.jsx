import React from 'react'
import logo from '../assets/images/logo.svg'

const MainFooter = () => {
  return (
    <footer className='py-[30px] px-[50px] bg-white'>
      <ul className='flex flex-col gap-[20px] mb-[20px]  text-center text-[16px]'>
        <li><img src={logo} alt="" className='mx-auto w-[150px]'/></li>
        <li>Help</li>
        <li>Contact Us</li>
        <li>Security</li>
      </ul>

      <div className='flex gap-[15px] flex-col mb-[15px]  text-center'>
        <p className='text-gray-500'>©1999-2024 PayPal, Inc. All rights reserved.</p>
        <ul className='flex gap-[15px] flex-col text-[14px]'>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Legal</li>
        </ul>
      </div>

      <p className='text-gray-500 text-center'>PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as a Major Payment Institution under the Payment Services Act 2019.</p>
    </footer>
  )
}

export default MainFooter
