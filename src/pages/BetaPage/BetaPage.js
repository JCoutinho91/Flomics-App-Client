import "./BetaPage.css";
import BetaChart from "../../components/Charts/BetaChart/BetaChart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"



function AnalysisPage() {

  return (
<>
    <TopBar/>

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