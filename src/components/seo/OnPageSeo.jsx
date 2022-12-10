import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'

const OnPageSeo = ({seoData}) => {

  const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]
  const headersCount = headers.map(item => seoData.headers.data[item]? seoData.headers.data[item].length : 0 )
  const percentage = headersCount.map( (item, index) =>  headersCount[index]/Math.max(...headersCount) * 100 + "%" ) 

  return (
    <>
    {/* <div className='onPageSeo'> */}
      {/* <h2>On-Page SEO Results</h2> */}
      
      <div className='top-sectionn grid grid-cols-4 items-stretch gap-3 justify-between'>
        <div className='card doughnut-container flex  shadow-lg rounded-lg p-6 justify-center '>
          <DoughnutChart grade={seoData.scores.links.grade} />
        </div>

        <div className="card col-span-2 ">
            <h4 >{seoData.scores.seo.title}</h4>
            <p >{seoData.scores.seo.description}</p>
        </div>

        <div className='card '>
          <h4>Title Tag</h4>
          <p>{seoData.title.shortAnswer}</p> 
          <p>Length: {seoData.title.value}</p>  
        </div>
      </div>

      <div className='description grid grid-cols-4 gap-3 py-3 '>
        <div className='card'>
          <h4>Meta Description Tag</h4>
          <p>{seoData.description.shortAnswer}</p>
        </div>

        <div className='card'>
          <h4>Header Tags</h4>
          <p>{seoData.headers.shortAnswer}</p>
        </div>

        <div  className='card' 
        >
          <table>
            <tbody>
              <tr>
                <td>Tag</td>
                <td className='px-10'>frequency</td>
              </tr>
              <tr>
                <td>H1</td>
                <td className='px-10'>{seoData.headers.data.h1 ?  seoData.headers.data.h1.length: 0 }</td>
                <td> 
                  <div class="w-40 bg-gray-200  h-5.5">
                    <div class="bg-blue-600 h-3.5 rounded-sm" style={{width: percentage[0]}}></div>
                  </div>  
                </td>
              </tr>
              <tr>
                <td>H2</td>
                <td className='px-10'>{seoData.headers.data.h2 ?  seoData.headers.data.h2.length: 0 }</td>
                <td> 
                  <div class="w-40 bg-gray-200  h-5.5">
                    <div class="bg-blue-600 h-3.5 rounded-sm" style={{width: percentage[1]}}></div>
                  </div>  
                </td>
              </tr>
              <tr>
                <td>H3</td>
                <td className='px-10'>{seoData.headers.data.h3 ?  seoData.headers.data.h3.length: 0}</td>
                <td> 
                  <div class="w-40 bg-gray-200  h-5.5">
                    <div class="bg-blue-600 h-3.5 rounded-sm" style={{width: percentage[2]}}></div>
                  </div>  
                </td>
              </tr>
              <tr>
                <td>H4</td>
                <td className='px-10'>{seoData.headers.data.h4 ?  seoData.headers.data.h4.length: 0}</td>
                <td> 
                  <div class="w-40 bg-gray-200  h-5.5">
                    <div class="bg-blue-600 h-3.5 rounded-sm" style={{width: percentage[3]}}></div>
                  </div>  
                </td>
              </tr>
              <tr>
                <td>H5</td>
                <td className='px-10'>{seoData.headers.data.h5 ?  seoData.headers.data.h5.length: 0}</td>
                <td> 
                  <div class="w-40 bg-gray-200  h-5.5">
                    <div class="bg-blue-600 h-3.5 rounded-sm" style={{width: percentage[4]}}></div>
                  </div>  
                </td>
              </tr>
              <tr>
                <td>H6</td>
                <td className='px-10'>{seoData.headers.data.h6 ?  seoData.headers.data.h6.length: 0}</td>
                <td> 
                  <div class="w-40 bg-gray-200  h-5.5">
                    <div class="bg-blue-600 h-3.5 rounded-sm" style={{width: percentage[5]}}></div>
                  </div>  
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='card'>
          <h4>Keyword consistency</h4>
          <p>{seoData.keywords.shortAnswer}</p>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default OnPageSeo