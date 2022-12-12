import React from 'react'
import './crawler.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Form from '../../components/form/Form'

const Crawler = () => {
  return (
    <div className='crawler'>
        <Sidebar/>
        <div className='crawler-section p-6'>
            <Form />
        </div>

    </div>
  )
}

export default Crawler
