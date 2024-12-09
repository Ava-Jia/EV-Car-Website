import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({playStatus, heroCount}) => {
  if (playStatus) {
    return (
      <video src={video1} autoPlay loop muted className="w-full h-full object-cover -z-10"></video>
    )
  } else {
    return (
      <div className="relative w-full h-full">
        <img
          src={image1}
          alt="image1"
          className={`absolute w-full h-full object-cover -z-100 transition-opacity duration-300 ease-in-out ${
            heroCount === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <img
          src={image2}
          alt="image2"
          className={`absolute w-full h-full object-cover -z-100 transition-opacity duration-300 ease-in-out ${
            heroCount === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <img
          src={image3}
          alt="image3"
          className={`absolute w-full h-full object-cover -z-100 transition-opacity duration-300 ease-in-out ${
            heroCount === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    )
  }
}

export default Background