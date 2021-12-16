import "./KappaPage.css";
import KappaChart from "../../components/Charts/KappaChart/KappaChart"
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
      <KappaChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;