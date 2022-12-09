import React from 'react'
import GaugeChart from 'react-gauge-chart'

const GaugeChar = ({chartValue, chartData}) => {

  console.log(chartValue)
  return (
    <div className='w-5/6'>
      <GaugeChart id="gauge-chart2" 
        nrOfLevels={30} 
        arcsLength={chartData}
        arcPadding={0.02}
        cornerRadius={1}
        percent={chartValue} 
        colors={["green", "lightgreen", 'red']} 
        arcWidth={0.3}
        textColor={'gray'}
        formatTextValue= {value => value/100}
      />
    </div>
    )
}

export default GaugeChar