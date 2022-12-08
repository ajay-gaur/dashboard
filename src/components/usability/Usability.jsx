import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'

const Usability = ({seoData}) => {
  return (
    <div className='usability'>
        <h2>Usability</h2>
        <div className='flex'>
            <DoughnutChart grade={seoData.scores.links.grade}/>
        </div>

        <div>
            <h3>Your usability is very good!</h3>
            <p>{seoData.scores.ui.description}</p>
        </div>

        <div>
            <div>
                <h4>Use of Mobile Viewports</h4>
                <p>{seoData.mobileViewport.shortAnswer}</p>
            </div>
            <div>
                <h4>Flash Used?</h4>
                <p>{seoData.flash.shortAnswer}</p>
            </div>
            <div>
                <h4>iFrames Used?</h4>
                <p>{seoData.iframe.shortAnswer} </p>
            </div>
            <div>
                <h4>Favicon </h4>
                <p>{seoData.favicon.shortAnswer}</p>
            </div>
            <div>
                <h4>Legible Font Sizes </h4>
                <p>{seoData.legibleFonts.shortAnswer}</p>
            </div>
            <div>
                <h4>Tap Target Sizing </h4>
                <p>{seoData.tapTargetSizing.shortAnswer}
                    </p>
            </div>
            <div>
                <h4>Email Privacy </h4>
                <p>{seoData.email.shortAnswer}</p>
            </div>
        </div>
    </div>
  )
}

export default Usability