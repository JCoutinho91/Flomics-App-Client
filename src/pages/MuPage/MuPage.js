import "./MuPage.css";
import MuChart from "../../components/Charts/MuChart/MuChart"
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
      <MuChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;