import React from 'react'
import { Outlet } from 'react-router'
import HomeNav from '../components/home/HomeNav'
import Profile from '../components/home/Profile'


function Home() {
  return (
    <div>
      <Profile />
      <HomeNav />
      <Outlet />
    </div>
  )
}

export default Home
