import React from 'react'
import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <MainFooter />
    </>
  )
}

export default MainLayout


