import React from 'react'
import DoughnutChart from '../../components/charts/DoughnutChart'

const  Links = ({seoData}) => {
  return (
    <div className='links'>
        <h2>Links</h2>
        <div className='flex'>
            <DoughnutChart grade={seoData.scores.links.grade}/>
        </div>

        <div>
            <h4>On-page Link Structure</h4>
            <p>We found {seoData.onPageLinks.data.total} total links. {seoData.onPageLinks.data.externalPercentage}% of your links are external links and are sending authority to other sites. {seoData.onPageLinks.data.nofollowPercentage}% of your links are nofollow links, meaning authority is not being passed to those destination pages.
            </p>
        </div>
        <div>
            <h4>Friendly Links</h4>
            <p>{seoData.friendlyUrls.shortAnswer}</p>
        </div>

        <div>
            <h4>Number of Backinks</h4>
            <p>{seoData.backlinks.shortAnswer}</p>
            <p>Total number of backlink is {seoData.backlinks.data.allbacklinks}</p>
        </div>
    </div>
  )
}

export default Links