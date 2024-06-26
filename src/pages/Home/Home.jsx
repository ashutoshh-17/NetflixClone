import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner5 from '../../assets/hero-banner5.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner5} alt="" className='banner-img'/>
        <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img'/>
            <p>Stranger Things</p>
            <p className='final-touch'>2016 | <span className='box'>U/A 16+</span> | 4 Seasons | Sci_Fi</p>
            <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
            <div className="hero-btns">
              <button className='btn'> <img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'> <img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
