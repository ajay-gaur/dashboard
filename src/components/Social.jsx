import React from 'react'
import DoughnutChart from './charts/DoughnutChart'

const Social = ({seoData}) => {
  const [show, setShow] = React.useState(false)
  return (
    <div className='social py-12'>
        {/* <h2>Social Results</h2> */}


        <h2>
            <button type="button" onClick={()=> setShow(c => !c )} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-t-xl " >
            <span class="flex items-center"> <h2>Social Results</h2></span>
            <svg data-accordion-icon class={show ? "w-6 h-6 rotate-180 shrink-0": "w-6 h-6  shrink-0"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>

        <div className={show ? 'show' : 'hidden'}>
            <div class="p-5">

        <div className='grid grid-cols-4 gap-3'>
            <div className='card'>
                <div className='flex justify-center'>
                    <DoughnutChart grade={seoData.scores.links.grade}/>
                </div>
            </div>

            <div className="card">
                <h4>Your Social could be better</h4>
                <p>{seoData.scores.social.description}</p>
            </div>

                <div className="card">
                    <h4>Facebook Connected</h4>
                    <p>{seoData.facebookLink.shortAnswer}</p>
                </div>

                <div className="card">
                    <h4>Open Graph Tags</h4>
                    <p>{seoData.openGraphTags.shortAnswer}</p>
                </div>

                <div className="card">
                    <h4>Facebook Pixel </h4>
                    <p>{seoData.facebookPixel.shortAnswer}</p>
                </div>
                <div className="card">
                    <h4>Instagram Connected</h4>
                    <p>{seoData.instagramLink.shortAnswer}</p>
                </div>
                <div className="card">
                    <h4>YouTube Connected </h4>
                    <p>{seoData.youtubeLink.shortAnswer}</p>
                </div>
                <div className="card">
                    <h4>YouTube Activity </h4>
                    <p>{seoData.youtubeActivity.shortAnswer}</p>
                </div>
                <div className='flex card gap-8 '>
                    <div className='flex items-center flex-col'>
                        <h4>{seoData.youtubeActivity.data.subscribers}</h4>
                        <p>Followers</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <h4>{seoData.youtubeActivity.data.views}</h4>
                        <p>View Count</p>
                    </div>
                </div>
                <div className="card">
                    <h4>Twitter Connected </h4>
                    <p>{seoData.twitterLink.shortAnswer}</p>
                </div>
                <div className="card">
                    <h4>Twitter Cards </h4>
                    <p>{seoData.twitterTags.shortAnswer}</p>
                </div>
                <div className="card">
                    <h4>LinkedIn Connected </h4>
                    <p>{seoData.linkedInLink.shortAnswer}</p>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Social