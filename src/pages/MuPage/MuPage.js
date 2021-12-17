import "./MuPage.css";
import MuChart from "../../components/Charts/MuChart/MuChart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"



function AnalysisPage() {

  return (
<>
    <TopBar/>

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