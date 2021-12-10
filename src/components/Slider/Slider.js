import { useInView } from "react-intersection-observer";
import "./slider.css";

function Slider({ imageSrc, title, subtitle, flipped }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img className="sliderimg" src={imageSrc} alt="sliderimg" />
          <div className="sliderContent">
            <h1 className="sliderTitle">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="sliderContent">
            <h1 className="sliderTitle">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img className="sliderimg" src={imageSrc} alt="sliderimg" />
        </>
      );
    }
  };
  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
}

export default Slider;
