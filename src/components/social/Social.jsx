import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'

const Social = ({seoData}) => {
  return (
    <div className='social'>
        <h2>Social Results</h2>
        <div className='flex'>
            <DoughnutChart grade={seoData.scores.links.grade}/>
        </div>

        <div>
            <h3>Your Social could be better</h3>
            <p>{seoData.scores.social.description}</p>
        </div>

        <div>
            <div>
                <h4>Facebook Connected</h4>
                <p>{seoData.facebookLink.shortAnswer}</p>
            </div>

            <div>
                <h4>Open Graph Tags</h4>
                <p>{seoData.openGraphTags.shortAnswer}</p>
            </div>

            <div>
                <h4>Facebook Pixel </h4>
                <p>{seoData.facebookPixel.shortAnswer}</p>
            </div>
            <div>
                <h4>Instagram Connected</h4>
                <p>{seoData.instagramLink.shortAnswer}</p>
            </div>
            <div>
                <h4>YouTube Connected </h4>
                <p>{seoData.youtubeLink.shortAnswer}</p>
            </div>
            <div>
                <h4>YouTube Activity </h4>
                <p>{seoData.youtubeActivity.shortAnswer}</p>
            </div>
            <div className='flex'>
                <div>
                    <h4>{seoData.youtubeActivity.data.subscribers}</h4>
                    <p>Followers</p>
                </div>
                <div>
                    <h4>{seoData.youtubeActivity.data.views}</h4>
                    <p>View Count</p>
                </div>
            </div>
            <div>
                <h4>Twitter Connected </h4>
                <p>{seoData.twitterLink.shortAnswer}</p>
            </div>
            <div>
                <h4>Twitter Cards </h4>
                <p>{seoData.twitterTags.shortAnswer}</p>
            </div>
            <div>
                <h4>LinkedIn Connected </h4>
                <p>{seoData.linkedInLink.shortAnswer}</p>
            </div>
        </div>
    </div>
  )
}

export default Social