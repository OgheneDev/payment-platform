import React from 'react';
import logo from '../assets/images/logo.svg';

const MainFooter = () => {
  return (
    <footer className='py-[30px] md:py-[50px] px-[50px] md:px-[150px] bg-white rounded-t-[15px] shadow-[0px_-4px_10px_rgba(0,0,0,0.1)]'>
      <ul className='flex flex-col md:flex-row items-center gap-[20px] md:gap-[30px] mb-[20px] md:mb-[35px] text-center text-[16px] md:text-[18px]'>
        <li><img src={logo} alt="" className='mx-auto w-[150px] md:w-[100px]'/></li>
        <li>Help</li>
        <li>Contact Us</li>
        <li>Security</li>
      </ul>

      <div className='flex gap-[15px] flex-col md:flex-row mb-[15px] md:mb-[25px] text-center'>
        <p className='text-gray-500 md:text-[13px]'>©1999-2024 PayPal, Inc. All rights reserved.</p>
        <ul className='flex gap-[15px] flex-col md:flex-row text-[14px]'>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Legal</li>
        </ul>
      </div>

      <p className='text-gray-500 text-center md:text-start md:text-[13px]'>
        PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as a Major Payment Institution under the Payment Services Act 2019.
      </p>
    </footer>
  );
};

export default MainFooter;

