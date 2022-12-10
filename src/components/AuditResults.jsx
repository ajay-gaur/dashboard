import React from 'react'
import DoughnutChart from './charts/DoughnutChart'
import gptSnap from '../assets/gpt.png'


const AuditResults = ({seoData}) => {



  return (
    <div className='auditResults pb-12'>
        <h2 className='p-4 pt-0 text-gray-500'>Audit results</h2>
        <section id="top-section" className=''>
          <div className="overall-doughnut grid grid-cols-5 gap-3 my-3">
            <div className='card flex items-center justify-center flex-col flex-1 col-span-2'>
              <DoughnutChart grade={seoData.scores.overall.grade} />
              <p className='text-xl my-4 '>{seoData.scores.overall.title}</p>
            </div>
            <div className="card gptSnap flex flex-1 col-span-3 justify-center items-center ">
              <img className='max-w-[60%] rounded-lg my-6' src={gptSnap} alt="girlpowertalk-screenshot" />
            </div>
          </div>
          <div className="doughnut-section grid grid-cols-5 gap-3">
            <div className='card flex justify-center items-center flex-col'>
              <DoughnutChart grade={seoData.scores.seo.grade} />
              <p className='text-xl my-4 '>On page SEO</p>
            </div>
            <div className='card flex justify-center items-center flex-col'>
              <DoughnutChart grade={seoData.scores.links.grade} />
              <p className='text-xl my-4 '>Links</p>
            </div>
            <div className='card flex justify-center items-center flex-col'>
              <DoughnutChart grade={seoData.scores.ui.grade} />
              <p className='text-xl my-4 '>Usability</p>
            </div>
            <div className='card flex justify-center items-center flex-col'>
              <DoughnutChart grade={seoData.scores.performance.grade} />
              <p className='text-xl my-4 '>Performance</p>
            </div>
            <div className='card flex justify-center items-center flex-col'>
              <DoughnutChart grade={seoData.scores.social.grade} />
              <p className='text-xl my-4 '>Social</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AuditResults