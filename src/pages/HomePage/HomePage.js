import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "./../../assests/flologo.png"
import herovideo from "./../../assests/video.mp4"


function HomePage() {
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
        <Link className="signup_link" to=""><button className="signup_button">Login</button></Link>
        <Link className="signup_link" to=""><button className="signup_button">Sign Up</button></Link>
        </div>
    </div>
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
        <h2 className="headline">create your database</h2>
      </div>
      <div className="Info">
        <span className="FeaturedTitle">Results</span>
        <h2 className="headline">Manage your lab results</h2>
      </div>
      <div className="Info">
        <span className="FeaturedTitle">Check Data</span>
        <h2 className="headline">See the latest Data</h2>
      </div>
      </div>
    </>
  );
}

export default HomePage;
