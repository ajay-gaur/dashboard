import React from "react";
import "./seoReport.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import seodata from '../../data/seo_data.json';
import Seo from '../../components/seo/Seo'
import Rankings from '../../components/rankings/Rankings'
import Links from "../../components/links/Links";
import Usability from '../../components/usability/Usability'
import Performance from '../../components/performance/Performance'
import Social from '../../components/social/Social'
import Technology from "../../components/technology/Technology";
import AuditResults from '../../components/auditResults/AuditResults'



const SeoReport = () => {
  const [seoData, setSeoData] = React.useState(seodata.data.output);

  return (
    <div className="seo-report">
      <Sidebar />
      <div className="seo-section p-6">
        <AuditResults seoData={seoData}/>
        <Seo seoData={seoData} />
        <Rankings seoData={seoData}/>
        <Links seoData={seoData}/>
        <Usability seoData={seoData}/>
        <Performance seoData={seoData}/>
        <Social seoData={seoData}/>
        <Technology seoData={seoData}/>
      </div>
    </div>
  );
};

export default SeoReport;
