import React from 'react'
import logo from '../assets/images/logo.svg'

const ForgotPasswordForm = () => {
  return (
    <form className='p-[20px] md:pb-[150px] md:px-[35px] flex flex-col items-start gap-[20px] md:w-[400px] md:mx-auto md:mt-[100px] md:border md:border-gray-300 md:rounded-[15px]'>
      <img src={logo} alt="" className='w-[150px] md:w-[100px] md:mb-[30px] mx-auto' />

      <input type="email" name="" id="" placeholder='Enter email' className='border rounded-sm pl-[5px] pb-[20px] py-[10px] w-full outline-none' />

      <button type='submit' className='mx-auto bg-[#003087] text-white py-[10px] rounded-full w-full font-semibold'>
          Next
      </button>
    </form>
  )
}

export default ForgotPasswordForm
