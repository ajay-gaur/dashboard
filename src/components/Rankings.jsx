import React from 'react'

const Rankings = ({seoData}) => {
  const [show, setShow] = React.useState(false)

  return (
    <div className='rankings py-12'>
        {/* <h2>Top Keyword Rankings</h2> */}

        <h2>
            <button type="button" onClick={()=> setShow(c => !c )} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-t-xl " >
            <span class="flex items-center"> <h2>Top Keyword Rankings</h2></span>
            <svg data-accordion-icon class={show ? "w-6 h-6 rotate-180 shrink-0": "w-6 h-6  shrink-0"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>


        <div className={show ? 'show' : 'hidden'}>
            <div class="p-5">
                <p className='text-lg mb-6 mt-3'>This shows your top 10 Keyword Rankings in the specific location. The list is ordered by
                    the keywords that drive the most traffic to your page.</p>

                    <div id="detailed-pricing" class="overflow-x-auto w-full border border-gray-200">
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
                
                <div className='grid grid-cols-4 gap-2 mt-8'>
                    <div className='card'>
                        <h4>Total Traffic From Search</h4>
                        <p>This shows you the Estimated Traffic Volume your page receives from it’s Keyword
                            Rankings</p>
                    </div>

                    <div className='card'>
                        <h4>{seoData.totalTrafficFromSearch.data.total}</h4>
                        <p>Monthly Traffic volume</p>
                    </div>

                    <div className='card'>
                        <h4>Keyword Positions</h4>
                        <p>This shows you a summary of the positions for your Keyword Rankings. The higher you rank, the more likely you are to capture traffic, with recen research showing that as much as 92% of clicks happen on the first page.</p>
                    </div>
                    
                    <div className='card'>
                        <table >
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
                </div>
            </div>
        </div>

    </div>
  )
}

export default Rankings