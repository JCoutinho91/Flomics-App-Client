import "./KappaPage.css";
import KappaChart from "../../components/Charts/KappaChart/KappaChart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"



function AnalysisPage() {

  return (
<>
    <TopBar/>

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