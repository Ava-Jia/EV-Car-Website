import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
  return (
    <div>
      <div className="text-white text-[100px] absolute top-1/4 m-28">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="text-center hover:scale-110 transition:.3s hover:shadow-inner cursor-pointer absolute bottom-5 m-28 p-1 pl-5 box-border bg-white rounded-full flex items-center gap-5 text-black">
        <p className='text-gray-400 text-xl'>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="absolute bottom-1/4 left-28  flex">
        <ul className=" mt-10 flex space-x-10">
            <li onClick={()=>{setHeroCount(0)}} className={heroCount===0 ? "w-16 h-16 rounded-full bg-orange-500" : "w-16 h-16 rounded-full bg-white"}></li>
            <li onClick={()=>{setHeroCount(1)}} className={heroCount===1 ? "w-16 h-16 rounded-full bg-orange-500" : "w-16 h-16 rounded-full bg-white"}></li>
            <li onClick={()=>{setHeroCount(2)}} className={heroCount===2 ? "w-16 h-16 rounded-full bg-orange-500" : "w-16 h-16 rounded-full bg-white"}></li>
        </ul>
      </div>
      <div className="absolute bottom-10 m-10 right-10 space-y-4 flex flex-col justify-center items-center text-white">
        <img className='w-20' onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus? pause_icon : play_icon} alt="" />
        <p className='text-xl'>See the video</p>
      </div>
    </div>
  )
}

export default hero
