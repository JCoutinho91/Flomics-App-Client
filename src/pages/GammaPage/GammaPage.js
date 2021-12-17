import "./GammaPage.css";
import GammaChart from "../../components/Charts/GammaChart/GammaChart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"



function AnalysisPage() {

  return (
<>
    <TopBar/>

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