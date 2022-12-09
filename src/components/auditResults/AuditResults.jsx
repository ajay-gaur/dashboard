import React from 'react'
import './auditResults.scss'
import DoughnutChart from '../charts/DoughnutChart'
import gptSnap from '../../assets/gpt.png'

const AuditResults = ({seoData}) => {
  return (
    <div className='auditResults pb-12'>
        <h2>Audit results</h2>
        <section id="top-section" className='card'>
          <div className="overall-doughnut flex justify-around my-12">
            <div className='flex items-center justify-center flex-col flex-1'>
            <DoughnutChart grade={seoData.scores.overall.grade} />
            <p>{seoData.scores.overall.title}</p>
            </div>
            <div className="gptSnap flex flex-1">
              <img className='max-w-[60%]' src={gptSnap} alt="girlpowertalk-screenshot" />
            </div>
          </div>
          <div className="doughnut-section flex justify-between">
            <div className='flex justify-center items-center flex-col w-[50%]'>
              <DoughnutChart grade={seoData.scores.seo.grade} />
              <p>On page SEO</p>
            </div>
            <div className='flex justify-center items-center flex-col w-[50%]'>
              <DoughnutChart grade={seoData.scores.links.grade} />
              <p>Links</p>
            </div>
            <div className='flex justify-center items-center flex-col w-[50%]'>
              <DoughnutChart grade={seoData.scores.ui.grade} />
              <p>Usability</p>
            </div>
            <div className='flex justify-center items-center flex-col w-[50%]'>
              <DoughnutChart grade={seoData.scores.performance.grade} />
              <p>Performance</p>
            </div>
            <div className='flex justify-center items-center flex-col w-[50%]'>
              <DoughnutChart grade={seoData.scores.social.grade} />
              <p>Social</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AuditResults