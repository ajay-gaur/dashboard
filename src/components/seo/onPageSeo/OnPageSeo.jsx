import React from 'react'
import DoughnutChart from '../../charts/DoughnutChart'
import './onPageSeo.scss'

const OnPageSeo = ({seoData}) => {
  // const grade = seodata.data.output;
  return (
    <>
    {/* <div className='onPageSeo'> */}
      {/* <h2>On-Page SEO Results</h2> */}
      
      <div className='top-sectionn flex items-stretch gap-3 justify-between'>
        <div className='card doughnut-container flex basis-[30%] shadow-lg rounded-lg p-6 justify-center '>
          <DoughnutChart grade={seoData.scores.links.grade} />
        </div>

        <div className="card basis-1/2">
            <h4 >{seoData.scores.seo.title}</h4>
            <p >{seoData.scores.seo.description}</p>
        </div>

        <div className='card basis-1/2'>
          <h4>Title Tag</h4>
          <p>{seoData.title.shortAnswer}</p> 
          <p>Length: {seoData.title.value}</p>  
        </div>
      </div>

      <div className='description flex justify-center gap-3 py-3 '>
        <div className='card basis-1/2'>
          <h4>Meta Description Tag</h4>
          <p>{seoData.description.shortAnswer}</p>
        </div>

        <div className='card basis-1/2'>
          <h4>Header Tags</h4>
          <p>{seoData.headers.shortAnswer}</p>
        </div>

        <div  className='card basis-1/2' 
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

        <div className='card basis-1/2'>
          <h4>Keyword consistency</h4>
          <p>{seoData.keywords.shortAnswer}</p>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default OnPageSeo