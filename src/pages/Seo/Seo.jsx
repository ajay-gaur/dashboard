import React from "react";
import "./seo.scss";
import gptSnap from '../../assets/gpt.png'
import DoughnutChart from "../../components/charts/DoughnutChart";
import Sidebar from "../../components/sidebar/Sidebar";
import seodata from "../../data/seo_data.json";
import OnPageSeo from '../../components/onPageSeo/OnPageSeo'
import Keywords from '../../components/keywords/Keywords'

const Seo = () => {
  const grade = seodata.data.output;
  return (
    <>
    <div className="seo">
      <Sidebar />
      <div className="seo-section">
        <h1>Audit results for gilpowertalk.com</h1>
        <section id="top-section">
        <div className="overall-doughnut">
          <div>
          <DoughnutChart grade={grade.scores.overall.grade} />
          <p>{grade.scores.overall.title}</p>
          </div>
        <div className="gptSnap">
          <img src={gptSnap} alt="girlpowertalk-screenshot" />
        </div>
        </div>
        <div className="doughnut-section">
          <div>
            <DoughnutChart grade={grade.scores.seo.grade} />
            <p>On page SEO</p>
          </div>
          <div>
            <DoughnutChart grade={grade.scores.links.grade} />
            <p>Links</p>
          </div>
          <div>
            <DoughnutChart grade={grade.scores.ui.grade} />
            <p>Usability</p>
          </div>
          <div>
            <DoughnutChart grade={grade.scores.performance.grade} />
            <p>Performance</p>
          </div>
          <div>
            <DoughnutChart grade={grade.scores.social.grade} />
            <p>Social</p>
          </div>
        </div>
        </section>
        <OnPageSeo />
      </div>
    </div>
    </>
  );
};

export default Seo;
