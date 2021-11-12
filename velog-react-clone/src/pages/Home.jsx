import React from 'react'
import HomeNav from '../components/home/HomeNav'
import Profile from '../components/home/Profile'
import ArticleCard from '../components/home/ArticleCard'
import ArticleContainer from '../components/home/ArticleContainer'


function Home() {
  return (
    <div>
      <HomeNav />
      <Profile />
      <ArticleContainer />
    </div>
  )
}

export default Home
