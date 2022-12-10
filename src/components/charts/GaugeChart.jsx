import React from 'react'
import GaugeChart from 'react-gauge-chart'

const GaugeChar = ({chartValue, chartData}) => {

  console.log(chartValue)
  return (
    <div className='w-6/7'>
      <GaugeChart id="gauge-chart1" 
        nrOfLevels={3} 
        arcsLength={chartData}
        arcPadding={0.02}
        cornerRadius={1}
        percent={0.2} 
        colors={["green", "lightgreen", 'red']} 
        arcWidth={0.3}
        textColor={'gray'}
        formatTextValue= {value => value/100}
      />
    </div>
    )
}

export default GaugeChar