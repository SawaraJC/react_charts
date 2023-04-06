import React from 'react'
import {Line} from 'react-chartjs-2'
import 'chart.js/auto'

function LineChart() {


const data = {
    labels: ['Event1', 'Event2', 'Event3','Event4','Event5'],
    
    datasets: [{
        label:'Event registrations 2022',
        // bezierCurve: true,
        lineTension: 0.4,
        data:[30,20,40,35,40],
        borderColor: '#FE6C19',
        pointBorderColor: '#FE6C19',
        pointBackgroundColor: '#FE6C19',
        borderBackgroundColor: '#FE6C19',
        
    },

{
    label: 'Event Registrations 2023',
    data: [40, 15, 25, 45, 50],
    lineTension: 0.4,
    borderColor: '#814DBC',
    pointBorderColor: '#814DBC',
    pointBackgroundColor: '#814DBC',
    borderBackgroundColor: '#814DBC'
}],

} 
    return (
        <div>
            <Line data = {data}/>
        </div>
    )
}

export default LineChart