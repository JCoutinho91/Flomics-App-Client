import "./BetaPage.css";
import BetaChart from "../../components/Charts/BetaChart/BetaChart"
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
      <BetaChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;