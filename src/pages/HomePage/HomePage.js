import Hero from "../../components/Hero/Hero";
import "./HomePage.css";
import heroImg from "../../assests/Homeimg.jpg";
import Slider from "../../components/Slider/Slider";
import sliderImg from "../../assests/Homeimg2.jpg";
import sliderImg2 from "../../assests/Homeimg3.jpg";
import NavBar from "../../components/Navbar/Navbar";
import companyLogo from "../../assests/flologo.png";

function HomePage() {
  return (
    <div className="home">
      <NavBar logoimg={companyLogo} />
      <Hero imageSrc={heroImg} />
      <Slider
        imageSrc={sliderImg}
        title={"Managed your results"}
        subtitle={"organize your inventory in an unique way"}
      />
      <Slider
        imageSrc={sliderImg2}
        title={"See Data"}
        subtitle={"great DB to check variants"}
        flipped={true}
      />
    </div>
  );
}

export default HomePage;
