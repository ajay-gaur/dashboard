import React from 'react'

const Rankings = ({seoData}) => {
  return (
    <div className='rankings'>
        <h2>Top Keyword Rankings</h2>
        <p>This shows your top 10 Keyword Rankings in the specific location. The list is ordered by
            the keywords that drive the most traffic to your page.</p>

            <div id="detailed-pricing" class="overflow-x-auto w-full">
            <div class="overflow-hidden min-w-max">
                <div class="grid grid-cols-5 gap-x-16 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div class="flex items-center">Keyword</div>
                    <div>Country</div>
                    <div>Position</div>
                    <div>Total Searches</div>
                    <div>Traffic</div>
                </div>
               {seoData.topKeywordRankings.data.keywords.map(item => {
                    return( 
                        item.keyword ?
                        <div class="grid grid-cols-5 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700">
                            <div class="text-gray-500 dark:text-gray-400">{item.keyword}</div>
                            <div>
                               {item.country}
                            </div>
                            <div>
                                {item.position}
                            </div>
                            <div>
                                {item.total_searches}
                            </div>
                            <div>
                                {item.estimated_traffic}
                            </div>
                        </div> : null
                    )
                })}
            </div>
        </div>

        <div>
            <h4>Total Traffic From Search</h4>
            <p>This shows you the Estimated Traffic Volume your page receives from it’s Keyword
                Rankings</p>
        </div>

        <div>
            <h4>{seoData.totalTrafficFromSearch.data.total}</h4>
            <p>Monthly Traffic volume</p>
        </div>

        <div>
            <h4>Keyword Positions</h4>
            <p>This shows you a summary of the positions for your Keyword Rankings. The higher you rank, the more likely you are to capture traffic, with recen research showing that as much as 92% of clicks happen on the first page.</p>
        </div>

        <table>
            <tbody>
                { Object.keys(seoData.keywordPositions.data).map(item =>{
                    return(
                        <tr>
                        <td>{item}</td>
                        <td className='px-6'>{seoData.keywordPositions.data[item]}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Rankings