import React from 'react';
import { EllipsisVertical } from 'lucide-react';
import { useFinancial } from '../context/FinancialContext';

const Balance = () => {
  const { balance, loading } = useFinancial();

  return (
    <div className="pb-[30px]">
      <div className='bg-white w-[90%] mx-auto p-[20px] rounded-[15px]'>
        <div className="header flex justify-between mb-[20px]">
          <h3>PayPal Balance</h3>
          <EllipsisVertical size={20} />
        </div>
        
        <div className="balance mb-[30px]">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32"></div>
            </div>
          ) : (
            <>
              <h1 className='text-3xl'>${balance.toFixed(2)}</h1>
              <span>Available</span>
            </>
          )}
        </div>
        
        <button className='bg-[#121661] text-white py-[5px] px-[20px] rounded-full'>
          Transfer Money
        </button>
      </div>
    </div>
  );
};

export default Balance;
