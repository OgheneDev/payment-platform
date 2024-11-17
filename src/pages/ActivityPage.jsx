import React from 'react'
import { SlidersHorizontal, Download, Search } from 'lucide-react'

const ActivityPage = () => {
  return (
    <div className='p-[30px] md:px-[150px]'>
      <div className='flex items-center gap-[20px] mb-[30px]'>
      <div className="search-container w-full border rounded-full flex items-center gap-[10px] py-[20px] px-[10px]">
        <button>
            <Search size={20} />
        </button>
        <input type="text" placeholder='Search by name or email' className='outline-none w-full' />
       </div>

       <div className='bg-custom-ash p-[10px] rounded-full'>
        <SlidersHorizontal size={20} className='text-[#003087]' />
       </div>

       <div className='bg-custom-ash p-[10px] rounded-full'>
        <Download size={20} className='text-[#003087]' />
       </div>
      </div>

      <div>
        <h1 className='mb-[30px] text-xl'>Filter by</h1>
        <span className='text-[#003087] bg-custom-light-blue md:text-[14px] font-semibold px-[10px] py-[15px] rounded-full'>Date: Last 90 days</span>
      </div>
    </div>
  )
}

export default ActivityPage
