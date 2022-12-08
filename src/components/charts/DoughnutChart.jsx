import React from 'react'
import './doughnutChart.scss'
import { Doughnut } from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'


const Chart = ({grade}) => {
    
    ChartJS.register(ArcElement, Tooltip, Legend);

    function gradeColor(grade) {   
        let bgColor; 
        switch(grade){
            case 'A':
                bgColor = "skyblue"
                break
            
            case 'A+':
                bgColor = "green"
                break
    
            case 'B':
                bgColor = "yellow"
                break
    
            case 'B+':
                bgColor = "green"    
                break
    
            case 'C':
                bgColor = "green"
                break
    
            case 'C+':
                bgColor = "green"
                break
    
            case 'D':
                bgColor = "red"
                break
    
            case 'D+':
                bgColor = "red"
                break   
    
            case 'E':
                bgColor = "green"    
                break
    
            case 'E+':
                bgColor = "green"
                break
    
            case 'F':
                bgColor = "green"
                break
    
            default:
                bgColor = 'gray'
        }       
            return bgColor
    }



    const gradeArr = ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'E+', 'E', 'F'];
    const shadePercent = 12 - (gradeArr.indexOf(grade) + 1)
    const shading = gradeColor(grade); 

    const [chartData, setChartData] = React.useState({
        datasets:[{
            label: 'my first data',
            data: [shadePercent, 12 - shadePercent],
            backgroundColor: [
                shading,
                'rgb(220,220,220)'
            ],
            hoverOffset: 4,
            cutout: "85%",
        }]
    })

  return (
    <div className='doughnut-wrapper max-w-[200px] flex flex-col items-center before:content-[attr(data-content)] before:relative before:top-[50%] before:text-5xl ' data-content={grade} data-color={gradeColor(grade)}>
        <Doughnut data={chartData} />
    </div>
  )
}

export default Chart