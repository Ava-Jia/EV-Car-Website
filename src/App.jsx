import React, { useState, useEffect } from 'react'
import Background from'./components/Background/Background.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from'./components/Hero/Hero.jsx' 
import hero from './components/Hero/Hero.jsx'

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your dreams"},
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count === 2? 0 : count+1})
    }, 3000);
  },[])

  return (
    <div>
      <div className="p-0 m-0 absolute overflow-x-hidden top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      </div>
    </div>
  )
}

export default App
