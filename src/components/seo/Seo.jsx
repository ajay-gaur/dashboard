import React from 'react'
import Keywords from './keywords/Keywords'
import Phrases from './phrases/Phrases'
import OnPageSeo from './onPageSeo/OnPageSeo'

const Seo = ({seoData}) => {
  // const grade = seodata.data.output;
  return (
    <div className='Seo py-28'>
      <OnPageSeo seoData ={seoData}/>
      <Keywords seoData ={seoData}/>
      <Phrases seoData ={seoData}/>
    </div>

  )
}

export default Seo