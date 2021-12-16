import "./LambdaPage.css";
import LambdaChart from "../../components/Charts/LambdaChart/LambdaChart"
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
      <LambdaChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;