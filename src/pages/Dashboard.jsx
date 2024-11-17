import React from 'react'
import LinkCard from '../components/LinkCard'
import Balance from '../components/Balance'
import Recent from '../components/Recent'
import Cards from '../components/Cards'

const Dashboard = () => {
  return (
    <div className='bg-[#eff2f5] flex flex-col md:flex-row md:pl-[100px]'>
      <div>
      <LinkCard />
      <Balance />
      <Recent />
      </div>
      <div className="w-ful md:bg-white">
      <Cards />
      </div>
    </div>
  )
}

export default Dashboard
