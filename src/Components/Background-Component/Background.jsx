import React from 'react'
import './Background.css'
import video from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'


const Background = ({play , herocount ,setHeroCount}) => {
    if(play){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
           
            



        )
    }

    else if(herocount === 0){
       return <img src={image1} alt="" className='background fade-in' />

    }
    else if(herocount === 1){
        return <img src={image2} alt="" className='background fade-in' />
 
     }
     else if(herocount === 2){
        return <img src={image3} alt="" className='background fade-in' />
 
     }
  
}

export default Background