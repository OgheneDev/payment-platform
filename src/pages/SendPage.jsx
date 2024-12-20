import React from 'react'
import { Search } from 'lucide-react'

const SendPage = () => {
  return (
    <div className='py-[50px] px-[30px] md:px-[150px] md:pb-[270px] flex flex-col gap-[20px] md:gap-[30px] items-start'>
       <h2 className='font-semibold text-3xl md:text-2xl'>Send payment to</h2>

       <div className="search-container w-full md:w-[700px] border rounded-full flex items-center gap-[10px] py-[20px] px-[10px]">
        <button>
            <Search size={20} />
        </button>
        <input type="text" placeholder='Name, username, email, mobile' className='outline-none w-full ' />
       </div>

       <button className='text-white bg-[#003087] rounded-full py-[10px] px-[30px]'>Next</button>
    </div>
  )
}

export default SendPage
