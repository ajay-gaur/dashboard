import React from 'react'
import './auditResults.scss'
import DoughnutChart from '../charts/DoughnutChart'
import seodata from '../../data/seo_data.json'
import gptSnap from '../../assets/gpt.png'

const AuditResults = ({seoData}) => {
  // const grade = seodata.data.output;
  return (
    <div className='auditResults'>
        <h2>Audit results</h2>
        <section id="top-section">
        <div className="overall-doughnut">
          <div>
          <DoughnutChart grade={seoData.scores.overall.grade} />
          <p>{seoData.scores.overall.title}</p>
          </div>
        <div className="gptSnap">
          <img src={gptSnap} alt="girlpowertalk-screenshot" />
        </div>
        </div>
        <div className="doughnut-section">
          <div>
            <DoughnutChart grade={seoData.scores.seo.grade} />
            <p>On page SEO</p>
          </div>
          <div>
            <DoughnutChart grade={seoData.scores.links.grade} />
            <p>Links</p>
          </div>
          <div>
            <DoughnutChart grade={seoData.scores.ui.grade} />
            <p>Usability</p>
          </div>
          <div>
            <DoughnutChart grade={seoData.scores.performance.grade} />
            <p>Performance</p>
          </div>
          <div>
            <DoughnutChart grade={seoData.scores.social.grade} />
            <p>Social</p>
          </div>
        </div>
        </section>
    </div>
  )
}

export default AuditResults