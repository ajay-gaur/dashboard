import React from "react";
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
    <div className="seo-report flex">
      <Sidebar />
      <div className="seo-section flex-[6] p-6">
        <AuditResults seoData={seoData}/>
        <hr className="border-2"/>
        <Seo seoData={seoData} />
        <hr className="border-2"/>
        <Rankings seoData={seoData}/>
        <hr className="border-2"/>
        <Links seoData={seoData}/>
        <hr className="border-2"/>
        <Usability seoData={seoData}/>
        <hr className="border-2"/>
        <Performance seoData={seoData}/>
        <hr className="border-2"/>
        <Social seoData={seoData}/>
        <hr className="border-2"/>
        <Technology seoData={seoData}/>
      </div>
    </div>
  );
};

export default SeoReport;
