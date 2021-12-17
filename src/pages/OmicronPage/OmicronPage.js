import "./OmicronPage.css";
import OmicronChart from "../../components/Charts/OmicronChart/OmicronChart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"



function AnalysisPage() {

  return (
<>
    <TopBar/>
    <div className="dashboard">
    <SideBar/>
    <div className="home">
      <OmicronChart />
    </div>
</div>
    </>
  )
}
export default AnalysisPage;