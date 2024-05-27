import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'



const Hero = ({heroData,herocount,setHeroCount,play,setPlay}) => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className='hero-dots'>
                <li onClick={()=>{setHeroCount(0)}} className={herocount === 0 ? "hero-dot orangered" :"hero-dot"}></li>
                <li onClick={()=>{setHeroCount(1)}} className={herocount === 1 ? "hero-dot orangered" :"hero-dot"}></li>
                <li onClick={()=>{setHeroCount(2)}} className={herocount === 2 ? "hero-dot orangered" :"hero-dot"}></li>

            </ul>
            <div className="hero-play">
            <img onClick={()=>{setPlay(!play)}} src={play?pause_icon:play_icon} alt="" />
            <p>See the video</p>
        </div>

        </div>

    </div>
  )
}

export default Hero