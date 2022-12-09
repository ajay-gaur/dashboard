import React from 'react'

const Phrases = ({seoData}) => {
  return (
    <div className='phrases '>
         <h3 className='pb-4'>Phrases</h3>       
        <div id="detailed-pricing" class="overflow-x-auto w-full border border-gray-200">
            <div class="overflow-hidden min-w-max">
                <div class="grid grid-cols-5 gap-x-16 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div class="flex items-center">Phrase</div>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Heaading</div>
                    <div>Frequency</div>
                </div>

                {seoData.keywords.data.phrases.map(item => {
                    return( item.word ?
                        <div class="grid grid-cols-5 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700">
                            <div class="text-gray-500 dark:text-gray-400">{item.word}</div>
                            <div>
                                {item.title ?  <svg class="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> : <svg class="w-5 h-5 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> }
                            </div>
                            <div>
                                {item.description ?  <svg class="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> : <svg class="w-5 h-5 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> }
                            </div>
                            <div>
                                {item.headers ?  <svg class="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> : <svg class="w-5 h-5 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> }
                            </div>
                            <div>
                                {item.count}
                            </div>
                        </div> : null
                    )
                })}
            </div>
        </div>

        <div className='grid grid-cols-4 gap-3 mt-8'>
            <div className="card">
                <h4>Amount of content</h4>
                <p>{seoData.contentLength.shortAnswer}</p>
                <p>Word Count: {seoData.contentLength.value}</p>
            </div>

            <div className="card">
                <h4>Image Alt Attributes</h4>
                <p>{seoData.imageAlt.shortAnswer}</p> 
               <p>We found {seoData.imageAlt.data.total} images on your page and {!seoData.imageAlt.data.noAltCount ? 'none' : seoData.imageAlt.data.noAltCount} of them are missing the attribute.</p>
            </div>

            <div className="card">
                <h4>Noindex Tag Test </h4>
                <p>{seoData.noindexTags.shortAnswer}</p>
            </div>

            <div className="card">
                <h4>Noindex Header Test  </h4>
                <p>{seoData.noindexHeaders.shortAnswer}</p>
            </div>

            <div className="card">
                <h4>SSL Enabled</h4>
                <p>{seoData.sslEnabled.shortAnswer}</p>
            </div>

            <div className="card">
                <h4>HTTPS Redirect</h4>
                <p>{seoData.httpsRedirect.shortAnswer}</p>
            </div>

            <div className="card">
                <h4>Robots.txt</h4>
                <p>{seoData.robotsTxt.shortAnswer}</p>
                <a href={seoData.robotsTxt.data}>{seoData.robotsTxt.data}</a>
            </div>

            <div className="card">
                <h4>XML Sitemaps </h4>
                <p>{seoData.sitemap.shortAnswer}</p>
                {seoData.sitemap.data.urls.map(item => <a href={item}>{item}</a> )}      
            </div>

            <div className="card">
                <h4>Analytics </h4>
                <p>{seoData.analytics.shortAnswer} </p>
            </div>

            <div className="card">
                <h4>Schema.org Structured Data </h4>
                <p>{seoData.schemaOrg.shortAnswer}</p>
            </div>

        </div>

    </div>
  )
}

export default Phrases