import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "./../../assests/flologo.png"
import herovideo from "./../../assests/video.mp4"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import SignUpModal from "../../components/Modal/SignUpModal";


function HomePage() {
const [isLoginOpen, setLoginOpen] = useState(false)
const [isSignUpOpen, setSignUpOpen] = useState(false)


const handleLoginModal = () => {
  setLoginOpen(true)
}

const handleLoginClose = () => {
  setLoginOpen(false)
}

const handleSignUpModal = () => {
  setSignUpOpen(true)
}
const handleSignUpClose = () => {
  setSignUpOpen(false)
}

  return (
    <>
    <div className="Nav_Bar">
        <div className="img_container">
          <img className="logo_img" src={logo} alt="logoimg" />
          </div>
  
          <div className="projectAboutus">
          <Link className="our_project" to="">Our Project</Link>
          <Link className="about_us" to="">About Us</Link>
        </div>
        <div className="rightcontent">
        <Link className="signup_link" to=""><button onClick={handleLoginModal} className="signup_button">Login</button></Link>
        <Link className="signup_link" to=""> <button onClick={handleSignUpModal} className="signup_button">Signup</button> </Link>
        </div>
    </div>
    <Modal open={isLoginOpen} onClose={handleLoginClose}>
      <LoginPage/>
    </Modal>
    <SignUpModal open={isSignUpOpen} onClose={handleSignUpClose}>
      <SignupPage/>
    </SignUpModal>
    <section className="hero_section">
    <video className="video_player" autoPlay loop muted playsInline>
      <source src={herovideo} type="video/mp4"/>
     </video>
     <div className="info_video">
     <div className="info_text">
      <h1 className="info_Title">COVID-19 NGS Data Analysis  </h1>
     <h1 className="info_subtitle">The future is in the fluids</h1>
      <p className="p_description">The advantages of liquid biopsies are infinite.</p><p className="p_description2"> Flomics makes them easy for the patient and easy for the healthcare provider.</p>
      <button className="start_here_button">Start Here</button>
      </div>
     </div>  
    </section>

      <div className="featuredfunctions">
      <div className="Info">
        <span className="FeaturedTitle">DB Funcionality</span>
        <p className="headline">create your database</p>
      </div>
      <div className="Info">
        <span className="FeaturedTitle">Results</span>
        <p className="headline">Manage your lab results</p>
      </div>
      <div className="Info">
        <span className="FeaturedTitle">Check Data</span>
        <p className="headline">See the latest Data</p>
      </div>
      </div>
    </>
  );
}

export default HomePage;
