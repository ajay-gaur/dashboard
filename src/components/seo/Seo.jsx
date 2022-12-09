import React from 'react'
import Keywords from './keywords/Keywords'
import Phrases from './phrases/Phrases'
import OnPageSeo from './onPageSeo/OnPageSeo'

const Seo = ({seoData}) => {
  const [show, setShow] = React.useState(false)
  return (
    <div className='Seo py-12'>
       <h2>
            <button type="button" onClick={()=> setShow(c => !c )} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-t-xl " >
            <span class="flex items-center"> <h2>On-Page SEO Results</h2></span>
            <svg data-accordion-icon class={show ? "w-6 h-6 rotate-180 shrink-0": "w-6 h-6  shrink-0"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>

        <div className={show ? 'show' : 'hidden'}>
            <div class="p-5">

          <OnPageSeo seoData ={seoData}/>
          <Keywords seoData ={seoData}/>
          <Phrases seoData ={seoData}/>
      </div>
      </div>
    </div>

  )
}

export default Seo