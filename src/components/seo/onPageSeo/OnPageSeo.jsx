import React from 'react'
import DoughnutChart from '../../charts/DoughnutChart'
import './onPageSeo.scss'

const OnPageSeo = ({seoData}) => {
  // const grade = seodata.data.output;
  return (
    <>
    <div className='onPageSeo'>
      <h2>On-Page SEO Results</h2>
      <div className='top-sectionn flex items-stretch gap-5 justify-between'>
        <div className='doughnut-container flex basis-[30%] shadow-lg rounded-lg p-6 justify-center '>
          <DoughnutChart grade={seoData.scores.links.grade} />
        </div>
        <div className='basis-[50%] shadow-lg rounded-lg p-6'>
        <header >
          <h3 className='text-4xl mb-7'>{seoData.scores.seo.title}</h3>
          <p>{seoData.scores.seo.description}</p>
        </header>
        </div>
        <div className='shadow-lg rounded-lg p-6 basis-1/2'>
          <h3>Title Tag</h3>
          <p>{seoData.title.shortAnswer}</p> 
          <p>Length: {seoData.title.value}</p>  
        </div>
      </div>

      <div className='description flex justify-center gap-5 py-6 '>
        <div className='shadow-lg rounded-lg p-6 basis-1/2'>
          <h3>Meta Description Tag</h3>
          <p>{seoData.description.shortAnswer}</p>
        </div>

        <div className='shadow-lg rounded-lg p-6 basis-1/2'>
          <h3>Header Tags</h3>
          <p>{seoData.headers.shortAnswer}</p>
        </div>

        <div  className='shadow-lg rounded-lg p-6 basis-1/2' 
        >
          <table>
            <tbody>
              <tr>
                <td>Tag</td>
                <td>frequency</td>
              </tr>
              <tr>
                <td>H1</td>
                <td>{seoData.headers.data.h1 ?  seoData.headers.data.h1.length: 0 }</td>
              </tr>
              <tr>
                <td>H2</td>
                <td>{seoData.headers.data.h2 ?  seoData.headers.data.h2.length: 0 }</td>
              </tr>
              <tr>
                <td>H3</td>
                <td>{seoData.headers.data.h3 ?  seoData.headers.data.h3.length: 0}</td>
              </tr>
              <tr>
                <td>H4</td>
                <td>{seoData.headers.data.h4 ?  seoData.headers.data.h4.length: 0}</td>
              </tr>
              <tr>
                <td>H5</td>
                <td>{seoData.headers.data.h5 ?  seoData.headers.data.h5.length: 0}</td>
              </tr>
              <tr>
                <td>H6</td>
                <td>{seoData.headers.data.h6 ?  seoData.headers.data.h6.length: 0}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='shadow-lg rounded-lg p-6 basis-1/2'>
          <h3>Keyword consistency</h3>
          <p>{seoData.keywords.shortAnswer}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default OnPageSeo