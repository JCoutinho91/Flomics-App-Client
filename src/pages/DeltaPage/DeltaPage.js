import "./DeltaPage.css";
import DeltaChart from "../../components/Charts/DeltaChart/DeltaChart"
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
      <DeltaChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;