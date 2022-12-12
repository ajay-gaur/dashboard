import React from 'react'
// import GaugeChart from 'react-gauge-chart'
import Chart from 'chartjs-gauge'

const GaugeChar = ({chartValue, chartData}) => {

  console.log(chartData)
  console.log(chartValue)
  const canva = React.useRef()
  
  React.useEffect(()=>{
    
    let ctx = canva.current.getContext("2d");

    new Chart(ctx, {
      type: 'gauge',
      data: {
        datasets: [{
          value: chartValue,
          // minValue: 0,
          data: chartData,
          backgroundColor: ['','green', 'orange','red'],
        }]
      },
      options: {
        needle: {
          radiusPercentage: 2,
          widthPercentage: 3.2,
          lengthPercentage: 80,
          color: 'rgba(0, 0, 0, 1)'
        },
        valueLabel: {
          display: true,
          // formatter: (value) => {
          //   return '$' + Math.round(value);
          // },
          color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderRadius: 5,
          padding: {
            top: 10,
            bottom: 10
          }
        }
      }
    });

}, [])

  return (
    <div className='w-6/7' style={{width: "300px"}} >
      {/* <GaugeChart id="gauge-chart1" 
        nrOfLevels={3} 
        arcsLength={chartData}
        arcPadding={0.02}
        cornerRadius={1}
        percent={0.2} 
        colors={["green", "lightgreen", 'red']} 
        arcWidth={0.3}
        textColor={'gray'}
        formatTextValue= {value => value/100}
      /> */}

      {/* <Gauge /> */}
      <canvas ref={canva}  >

      </canvas>
    </div>
    )
}

export default GaugeChar