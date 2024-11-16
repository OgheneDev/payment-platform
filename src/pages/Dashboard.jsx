import React from 'react'
import LinkCard from '../components/LinkCard'
import Balance from '../components/Balance'
import Recent from '../components/Recent'
import Cards from '../components/Cards'

const Dashboard = () => {
  return (
    <div className='bg-[#eff2f5]'>
      <LinkCard />
      <Balance />
      <Recent />
      <Cards />
    </div>
  )
}

export default Dashboard
