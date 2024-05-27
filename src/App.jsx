import { useState } from 'react'
import './App.css'
import Background from './Components/Background-Component/Background'
import Nav from './Components/Nav-Component/Nav'
import Hero from './Components/Hero-Component/Hero'
import { useEffect } from 'react'

function App() {
  let heroData = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"Include",text2:"Your Passions"},
    {text1:"Give in to",text2:"Your Passions"},

  ]
  const [herocount, setHeroCount] = useState(0)
  const [play,setPlay] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{ return count === 2 ? 0:count+1})
    },3000)
  },[])

  return (
    <>
    <Background play={play} herocount={herocount} setHeroCount={setHeroCount} />
    <Nav />
    <Hero 
    heroData={heroData[herocount]}
    herocount={herocount}
    setHeroCount={setHeroCount}
    play={play}
    setPlay={setPlay}
    
    />
    </>
  )
}

export default App
