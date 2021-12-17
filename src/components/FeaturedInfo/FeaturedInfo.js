import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Cases</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">273M</span>
          <span className="featuredMoneyRate">
            +723,466 <ArrowUpward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to the previous day.</span>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Deaths</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5,3M</span>
          <span className="featuredMoneyRate">
            +7,114 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to the previous day.</span>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Recovered</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">245M</span>
          <span className="featuredMoneyRate">
            +485,762	 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to the previous day.</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;