import "./GammaPage.css";
import GammaChart from "../../components/Charts/GammaChart/GammaChart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"


function AnalysisPage() {

  return (
<>
    <TopBar/>
    <FeaturedInfo/>
    <div className="dashboard">
    <SideBar/>
    <div className="home">
      <GammaChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;