import React from 'react'
import DoughnutChart from '../../components/charts/DoughnutChart'
import seodata from "../../data/seo_data.json"
import './onPageSeo.scss'
import Keywords from '../keywords/Keywords'

const onPageSeo = () => {
  const grade = seodata.data.output;
  return (
    <>
    <div className='onPageSeo'>
      <h2>On-Page SEO Results</h2>
      <div className='top-sectionn'>
        <div className='doughnut-container'>
          <DoughnutChart grade={grade.scores.links.grade} />
        </div>
        <header>
          <h3>Your on page SEO is good</h3>
          <p>Your page is largely optimized for On-Page SEO performance. On-Page SEO optimization
          is important to ensure you can maximize ranking potential and drive traffic to your
          website from search engines. You can continue to build on your position by ensuring On
          and Off-Page factors highlighted here are improved, as well as through application of
          On-Page SEO strategies like content generation and link building</p>
        </header>
      </div>
      <div className='description'>
        <div>
          <h3>Title Tag</h3>
          <p>You have a title tag of optimal length (between 10 and 70 characters). 
            Length: 57 </p>
        </div>

        <div>
          <h3>Meta Description Tag</h3>
          <p>Your page has a meta description of optimal length (between 70 and 320 characters).</p>
        </div>

        <div>
          <h3>Header Tags</h3>
          <p>Your page is making good use of header tags. </p>
        </div>

        <div>
          <table>
            <tr>
              <th>Tag</th>
              <th>frequency</th>
            </tr>
            <tr>
              <td>H1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>H2</td>
              <td>8</td>
            </tr>
            <tr>
              <td>H3</td>
              <td>10</td>
            </tr>
            <tr>
              <td>H4</td>
              <td>17</td>
            </tr>
            <tr>
              <td>H5</td>
              <td>0</td>
            </tr>
            <tr>
              <td>H6</td>
              <td>0</td>
            </tr>
          </table>
        </div>

        <div>
          <h3>Keyword consistency</h3>
          <p>Keyword consistency too low</p>
        </div>
      </div>
      <Keywords/>
    </div>
    </>
  )
}

export default onPageSeo