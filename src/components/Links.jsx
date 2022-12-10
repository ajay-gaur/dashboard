import React from 'react'
import DoughnutChart from '../components/charts/DoughnutChart'

const  Links = ({seoData}) => {
  const [show, setShow] = React.useState(false)
  return (
    <div className='links py-12'>
        {/* <h2 className='mb-4'>Links</h2> */}

        <h2>
            <button type="button" onClick={()=> setShow(c => !c )} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-t-xl " >
            <span class="flex items-center"> <h2>Links</h2></span>
            <svg data-accordion-icon class={show ? "w-6 h-6 rotate-180 shrink-0": "w-6 h-6  shrink-0"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>


        <div className={show ? 'show' : 'hidden'}>
            <div class="p-5">
                <div className='grid grid-cols-4 gap-3'>
                    <div className='flex justify-center card'>
                        <DoughnutChart grade={seoData.scores.links.grade}/>
                    </div>

                    <div className='card'>
                        <h4>On-page Link Structure</h4>
                        <p>We found {seoData.onPageLinks.data.total} total links. {seoData.onPageLinks.data.externalPercentage}% of your links are external links and are sending authority to other sites. {seoData.onPageLinks.data.nofollowPercentage}% of your links are nofollow links, meaning authority is not being passed to those destination pages.
                        </p>
                    </div>
                    <div className='card'>
                        <h4>Friendly Links</h4>
                        <p>{seoData.friendlyUrls.shortAnswer}</p>
                    </div>

                    <div className='card'>
                        <h4>Number of Backinks</h4>
                        <p>{seoData.backlinks.shortAnswer}</p>
                        <p>Total number of backlink is {seoData.backlinks.data.allbacklinks}</p>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Links