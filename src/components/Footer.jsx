import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-[40px] md:py-[80px] pb-[50px] md:text-[14px] px-[20px] md:px-[100px] flex flex-col gap-[20px] md:gap-[10px] text-[16px]'>
      <div className='border-b border-gray-300 pb-[10px] mb-[10px]'>
        <ul className='flex gap-[10px] flex-wrap font-semibold'>
            <li>Help</li>
            <li>Contact</li>
            <li>Fees</li>
            <li>Security</li>
            <li>Features</li>
            <li>Shop</li>
        </ul>
      </div>

      <div className='md:flex md:justify-between'>
        <ul className='flex gap-[10px] border-b border-gray-300 pb-[10px] md:border-none text-gray-500 font-semibold mb-[20px]'>
            <li>About</li>
            <li>Newsroom</li>
            <li>Jobs</li>
            <li>Developers</li>
        </ul>

        <ul className='flex gap-[10px] flex-wrap text-gray-500 font-semibold'>
            <li>© 1999–2024 All rights reserved.</li>
            <li>Accesibility</li>
            <li>Cookies</li>
            <li>Privacy</li>
            <li>Legal</li>
        </ul>
      </div>
      <p className='text-gray-500 mt-[30px] md:mt-0 text-[12px]'>PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as a Major Payment Institution under the Payment Services Act 2019.</p>
    </footer>
  )
}

export default Footer
