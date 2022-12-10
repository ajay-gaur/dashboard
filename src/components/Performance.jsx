import React from 'react'
import DoughnutChart from './charts/DoughnutChart'
import GaugeChar from './charts/GaugeChart'

const Performance = ({seoData}) => {

//   const serverArray = [5, 5, 20,40];
  const serverArray = [0, 0.5, 1, 3];
  const allPageArray = [5, 5, 10,25];
  const allPageScriptArray = [10, 5, 5,25];
  const [show, setShow] = React.useState(false)


  return (
    <div className='performance py-12'>
        {/* <h2>Performace Results</h2> */}

        <h2>
            <button type="button" onClick={()=> setShow(c => !c )} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-t-xl " >
            <span class="flex items-center"> <h2>Performace Results</h2></span>
            <svg data-accordion-icon class={show ? "w-6 h-6 rotate-180 shrink-0": "w-6 h-6  shrink-0"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>


        <div className={show ? 'show' : 'hidden'}>
            <div class="p-5">
        <div className='flex gap-3'>
            <div className='flex justify-center card'>
                <DoughnutChart grade={seoData.scores.links.grade}/>
            </div>

            <div className='card'>
                <h4>{seoData.scores.performance.title}</h4>
                <p>{seoData.scores.performance.description}</p>
            </div>
        </div>


        <div className=' card my-3'>
            <div className='mb-10'>
                <h4>Page Speed Info</h4>
                <p className='text-lg'>{seoData.serverResponseTime.shortAnswer}</p>
            </div>

            <div className='flex justify-around'>
                <div className='flex items-center flex-col '>
                    <h5 className="text-lg text-gray-700">Server Response</h5>
                    <GaugeChar chartValue = {seoData.serverResponseTime.data.responseTime / 1000} chartData={serverArray}/>
                </div>

                <div className='flex items-center flex-col '>
                    <h5 className="text-lg text-gray-700">All Page Content Loaded</h5>
                    <GaugeChar chartValue = {seoData.serverResponseTime.data.loadTime / 1000} chartData={allPageArray}/>
                </div>

                <div className='flex items-center flex-col '>
                    <h5 className="text-lg text-gray-700">All Page Scripts Complete</h5>
                    <GaugeChar chartValue = {seoData.serverResponseTime.data.completeTime / 1000} chartData={allPageScriptArray}/>
                </div>
            </div>
        </div>


        <div className='card'>
            <div className='mb-10'>
                <h4>Page Size Info</h4>
                <p className='text-lg'>{seoData.pageSize.shortAnswer}</p>
            </div>

            <div className='flex justify-around'>
                {/* TODO-- Gauge graphs */}
                <div className='flex items-center flex-col '>
                    <h5 className="text-lg text-gray-700">Total Page Size</h5>
                    <GaugeChar chartValue = {seoData.serverResponseTime.data.responseTime / 1000} chartData={serverArray}  />
                </div>

                <div className='flex items-center flex-col '>
                    <h5 className="text-lg text-gray-700">Page Size Breakdown</h5>
                    <GaugeChar chartValue = {seoData.serverResponseTime.data.responseTime / 1000} chartData={serverArray}  />
                </div>
            </div>
        </div>

        <div className='grid grid-cols-4 gap-3 my-3'>
            <div className="card">
                <h4>Number of Resources</h4>
                <p>{seoData.numberOfResources.shortAnswer}</p>
            </div>

            <div className="card">
                <table>
                    <tbody>
                        <tr>
                            <td>Total Objects</td>
                            <td className='px-6'>{seoData.numberOfResources.data.total}</td>
                        </tr>
                        <tr>
                            <td>Number of HTML Pages</td>
                            <td className='px-6'>{seoData.numberOfResources.data.html}</td>
                        </tr>
                        <tr>
                            <td>Number of JS Resources</td>
                            <td className='px-6'>{seoData.numberOfResources.data.js}</td>
                        </tr>
                        <tr>
                            <td>Number of CSS resources</td>
                            <td className='px-6'>{seoData.numberOfResources.data.css}</td>
                        </tr>
                        <tr>
                            <td>Number of Images</td>
                            <td className='px-6'>{seoData.numberOfResources.data.images}</td>
                        </tr>
                        <tr>
                            <td>Other Resources</td>
                            <td className='px-6'>{seoData.numberOfResources.data.other}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card">
                <h4>Google Accelerated Mobile Pages(AMP)</h4>
                <p>{seoData.hasAmp.shortAnswer}</p>
            </div>
            <div className="card">
                <h4>Javascript Errors</h4>
                <p>{seoData.javascriptErrors.shortAnswer}</p>
            </div>
            <div className="card">
                <h4>GZIP Compression</h4>
                <p>{seoData.gzip.shortAnswer}</p>
            </div>
            <div className="card">
                <h4>Optimize Images</h4>
                <p>{seoData.optimizedImages.shortAnswer} </p>
            </div>
            <div className="card">
                <h4>Minification </h4>
                <p>{seoData.minified.shortAnswer} </p>
            </div>
            <div className="card">
                <h4>Deprecated HTML </h4>
                <p>{seoData.deprecated.shortAnswer}</p>
            </div>
            <div className="card">
                <h4>Inline Styles</h4>
                <p>{seoData.inlineCss.shortAnswer}</p>
            </div>
        </div>  

        </div>  
        </div>  
    </div>
  )
}

export default Performance