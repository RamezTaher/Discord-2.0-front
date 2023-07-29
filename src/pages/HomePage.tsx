import backgroundImage from "@/cover1.svg"
import foregroundLeft from "@/cover2.svg"
import foregroundRight from "@/cover3.svg"
import Header from "../components/home/Header"
import HeroContainer from "../components/home/HeroContainer"

const Home = () => {
  return (
    <>
      <div className="herobackground">
        <Header />
        <HeroContainer />
        <div className="heroContainer"></div>
        <div className="heroImageContainer">
          <img src={backgroundImage} alt="" className="backgroundImage" />
          <img src={foregroundLeft} alt="" className="foregroundLeft" />
          <img src={foregroundRight} alt="" className="foregroundRight" />
        </div>
      </div>
    </>
  )
}

export default Home
