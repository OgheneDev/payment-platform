import React from 'react'
import logo from '../assets/images/pp_h_rgb_logo_tn-removebg-preview.png'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-[10px] md:py-[20px] px-[30px] md:px-[100px]'>
      {/*<button className='flex md:hidden bg-white border border-custom-blue text-custom-blue py-[10px] w-[115px] justify-between rounded-full px-[15px] items-center'>
        <Menu size={15} className='text-custom-blue bg-white ' />
        Menu
      </button>*/}

      <img src={logo} alt="" className='w-[100px] w-[25px]' />

      <Link to='/login'>
      <button className='bg-white border hover:bg-custom-blue border-custom-blue hover:border-none text-custom-blue hover:text-white transition-colors duration-300 ease-in-out text-[13px] font-semibold md:py-[8px] md:px-[25px] py-[5px] px-[20px] rounded-full'>Log In</button>
      </Link>
    </nav>
  )
}

export default Navbar
