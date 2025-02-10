// import React from 'react'
import { useState } from 'react'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import Header from '../../component/header/Header'
import './home.css'
import FoodDisplay from '../../component/foodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'

function Home() {

  const[category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
