import React from 'react'
import './crawler.scss'
import Sidebar from '../../components/sidebar/Sidebar'

const Crawler = () => {
  return (
    <div className='crawler'>
        <Sidebar/>
        <div className='crawler-section'>
            <h1>Hello from cawler</h1>
        </div>

    </div>
  )
}

export default Crawler