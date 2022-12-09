import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'

const Usability = ({seoData}) => {
  const [show, setShow] = React.useState(false)

  return (
    <div className='usability py-12'>
        {/* <h2>Usability</h2> */}

        <h2>
            <button type="button" onClick={()=> setShow(c => !c )} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-t-xl " >
            <span class="flex items-center"> <h2>Usability</h2></span>
            <svg data-accordion-icon class={show ? "w-6 h-6 rotate-180 shrink-0": "w-6 h-6  shrink-0"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>


        <div className={show ? 'show' : 'hidden'}>
            <div class="p-5">
                <div className='grid grid-cols-4 gap-3'>
                    <div className='flex justify-center card'>
                        <DoughnutChart grade={seoData.scores.links.grade}/>
                    </div>

                    <div className="card">
                        <h4>Your usability is very good!</h4>
                        <p>{seoData.scores.ui.description}</p>
                    </div>

                        <div className="card">
                            <h4>Use of Mobile Viewports</h4>
                            <p>{seoData.mobileViewport.shortAnswer}</p>
                        </div>
                        <div className="card">
                            <h4>Flash Used?</h4>
                            <p>{seoData.flash.shortAnswer}</p>
                        </div>
                        <div className="card">
                            <h4>iFrames Used?</h4>
                            <p>{seoData.iframe.shortAnswer} </p>
                        </div>
                        <div className="card">
                            <h4>Favicon </h4>
                            <p>{seoData.favicon.shortAnswer}</p>
                        </div>
                        <div className="card">
                            <h4>Legible Font Sizes </h4>
                            <p>{seoData.legibleFonts.shortAnswer}</p>
                        </div>
                        <div className="card">
                            <h4>Tap Target Sizing </h4>
                            <p>{seoData.tapTargetSizing.shortAnswer}
                                </p>
                        </div>
                        <div className="card">
                            <h4>Email Privacy </h4>
                            <p>{seoData.email.shortAnswer}</p>
                        </div>
                </div>
             </div>
        </div>

    </div>
  )
}

export default Usability