import "./AlphaPage.css";
import AlphaChart from "../../components/Charts/AlphaChart/AlphaChart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"



function AnalysisPage() {

  return (
<>
    <TopBar/>

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
