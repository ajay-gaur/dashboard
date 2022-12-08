import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'
import GaugeChar from '../charts/GaugeChart'

const Performance = ({seoData}) => {
  return (
    <div className='performance'>
        <h2>Performace Results</h2>
        <div className='flex'>
            <DoughnutChart grade={seoData.scores.links.grade}/>
        </div>

        <div>
            <h3>{seoData.scores.performance.title}</h3>
            <p>{seoData.scores.performance.description}</p>
        </div>

        <div>
            <h4>Page Speed Info</h4>
            <p>{seoData.serverResponseTime.shortAnswer}</p>
        </div>

        <div>
            {/* TODO-- Gauge graphs */}
            {/* <GaugeChar/> */}
        </div>

        <div>
            <h4>Page Size Info</h4>
            <p>{seoData.pageSize.shortAnswer}</p>
        </div>

        <div>
            {/* TODO-- Gauge graphs */}
        </div>

        <div>
            <h4>Number of Resources</h4>
            <p>{seoData.numberOfResources.shortAnswer}</p>
        </div>

        <div>
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

        <div>
            <h4>Google Accelerated Mobile Pages(AMP)</h4>
            <p>{seoData.hasAmp.shortAnswer}</p>
        </div>
        <div>
            <h4>Javascript Errors</h4>
            <p>{seoData.javascriptErrors.shortAnswer}</p>
        </div>
        <div>
            <h4>GZIP Compression</h4>
            <p>{seoData.gzip.shortAnswer}</p>
        </div>
        <div>
            <h4>Optimize Images</h4>
            <p>{seoData.optimizedImages.shortAnswer} </p>
        </div>
        <div>
            <h4>Minification </h4>
            <p>{seoData.minified.shortAnswer} </p>
        </div>
        <div>
            <h4>Deprecated HTML </h4>
            <p>{seoData.deprecated.shortAnswer}</p>
        </div>
        <div>
            <h4>Inline Styles</h4>
            <p>{seoData.inlineCss.shortAnswer}</p>
        </div>
    </div>
  )
}

export default Performance