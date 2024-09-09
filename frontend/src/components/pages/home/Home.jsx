import  {useState} from 'react'
import './Home.css'

import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownLoad from '../../AppDownload/AppDownLoad'


const Home = () => {


        const [category ,setCategory] = useState("All");


  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownLoad/>
    </div>
  )
}

export default Home