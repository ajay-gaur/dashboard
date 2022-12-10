import React from 'react'

const Technology = ({seoData}) => {
  
  const [show, setShow] = React.useState(false)

  return (
    <div className='technology py-12'>
        <h2>
            <button type="button" onClick={()=> setShow(c => !c )} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-t-xl " >
            <span class="flex items-center"> <h2>Technology Results</h2></span>
            <svg data-accordion-icon class={show ? "w-6 h-6 rotate-180 shrink-0": "w-6 h-6  shrink-0"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>
        <div className={show ? 'show' : 'hidden'}>
            <div class="p-5 ">
            
                <div className='grid grid-cols-2 gap-3'>
                    <div className='card row-span-2'>
                        <div>
                            <h4>Technology List</h4>
                            <p className='text-lg mb-5'>{seoData.technologies.shortAnswer} </p>
                        </div>

                        <div>
                            <ul>
                                {seoData.technologies.data.map(item => <li>{item}</li>) }
                            </ul>
                        </div>
                    </div>

                    <div className='card'>
                        <h4>Server IP Address</h4>
                        <p>{seoData.ip.data}</p>
                    </div>
                    <div className='card'>
                        <h4>DNS Servers </h4>
                        <p>{seoData.dns.data}</p>
                    </div>
                    <div className='card'>
                        <h4>Web Server</h4>
                        <p>{seoData.webServer.data}</p>
                    </div>
                    <div className='card'>
                        <h4>Charset </h4>
                        <p>{seoData.charset.data}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Technology