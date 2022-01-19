import Chart from "../../components/Charts/Chart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"

function DashBoardPage() {

  return (
    <>
    <TopBar/>
<div className="dashboard">
    <SideBar/>
    <div className="home">
      <Chart/>
    </div>
</div>
    </>
    )
}
export default DashBoardPage;
