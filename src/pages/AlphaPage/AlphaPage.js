import "./AlphaPage.css";
import AlphaChart from "../../components/Charts/AlphaChart/AlphaChart"
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
      <AlphaChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;
