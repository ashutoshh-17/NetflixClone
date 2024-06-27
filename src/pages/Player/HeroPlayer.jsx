import React from 'react'
import './Player.css'
import { useNavigate } from 'react-router-dom'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const HeroPlayer = () => {

    const navigate = useNavigate();
return(
    <div className='player'>
    <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}}/>
    <iframe width='90%' height='90%'
    src={`https://www.youtube.com/embed/yXnk3n-qNrI?si=GzOn2IuhEGidlaTc`}
    title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">

    </div>
  </div>
    )
}

export default HeroPlayer;