import "./Hero.css";

function Hero({ imageSrc }) {
  return (
    <div className="hero">
      <img src={imageSrc} alt="heroimg" className="hero_img" />
      <h1 className="heroTitle">Samples made simple</h1>
    </div>
  );
}

export default Hero;
