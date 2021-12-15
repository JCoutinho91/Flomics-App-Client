import React from "react";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">World Active Cases</span>
        <div className="featuredNumberContainer">
          <span className="feauturedCases">200,000</span>
          <span className="feauturedRecoverCases">
            46,000 <ArrowDownward className="arrowicon negative" />
          </span>
        </div>
        <span className="featuredsubtitle">Compare to last day</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Last Sample Results</span>
        <div className="featuredNumberContainer">
          <span className="feauturedCases">Delta Variant 97% </span>
          <span className="feauturedRecoverCases">
            Omicron: 3% <ArrowUpward className="arrowicon" />
          </span>
        </div>
        <span className="featuredsubtitle">Compare to last day</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Predominant Variant</span>
        <div className="featuredNumberContainer">
          <span className="feauturedCases">Delta 98%</span>
          <span className="feauturedRecoverCases">
            Omicron: 2% <ArrowUpward className="arrowicon" />
          </span>
        </div>
        <span className="featuredsubtitle">Compare to last day</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
