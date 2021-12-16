import "./AnalysisPage.css";
import Chart from "../../components/Charts/Chart"
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
      <Chart />
    </div>
      <div className="home">
      <Chart />    
</div>
</div>
    </>
  )
}
export default AnalysisPage;
