import React from 'react'
import { EllipsisVertical } from 'lucide-react'

const Balance = () => {
  return (
    <div className="pb-[30px]">
        <div className='bg-white w-[90%] mx-auto p-[20px] rounded-[15px]'>
      <div className="header flex justify-between mb-[20px]">
        <h3>PayPal Balance</h3>
        <EllipsisVertical size={20} />
      </div>

      <div className="balance mb-[30px]">
        <h1 className='text-3xl'>$0.00</h1>
        <span>Available</span>
      </div>

      <button className='bg-[#121661] text-white py-[5px] px-[20px] rounded-full'>Transfer Money</button>
    </div>
    </div>
  )
}

export default Balance
