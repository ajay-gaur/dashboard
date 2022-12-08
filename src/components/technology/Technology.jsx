import React from 'react'

const Technology = ({seoData}) => {
  return (
    <div className='technology'>
        <div>
            <h2>Technology List</h2>
            <p>{seoData.technologies.shortAnswer} </p>
        </div>

        <div>
            <ul>
                {seoData.technologies.data.map(item => <li>{item}</li>) }
            </ul>
        </div>

        <div>
            <h4>Server IP Address</h4>
            <p>{seoData.ip.data}</p>
        </div>
        <div>
            <h4>DNS Servers </h4>
            <p>{seoData.dns.data}</p>
        </div>
        <div>
            <h4>Web Server</h4>
            <p>{seoData.webServer.data}</p>
        </div>
        <div>
            <h4>Charset </h4>
            <p>{seoData.charset.data}</p>
        </div>
    </div>
  )
}

export default Technology