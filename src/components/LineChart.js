import React from 'react'
import {Line} from 'react-chartjs-2'
import 'chart.js/auto'
import moment from 'moment';


function LineChart() {

    const data = {
        labels: ['Event1 2022-01-01', 'Event2 2022-02-01', 'Event3 2022-03-01','Event4 2022-04-01','Event5 2022-05-01'],
        datasets: [
            {
                label:'Expected Footfall',
                // bezierCurve: true,
                lineTension: 0.4,
                data:[30,20,40,35,40],
                borderColor: '#FE6C19',
                pointBorderColor: '#FE6C19',
                pointBackgroundColor: '#FE6C19',
                borderBackgroundColor: '#FE6C19', 
            },
            {
                label: 'Actual Footfall',
                data: [40, 15, 25, 45, 50],
                lineTension: 0.4,
                borderColor: '#814DBC',
                pointBorderColor: '#814DBC',
                pointBackgroundColor: '#814DBC',
                borderBackgroundColor: '#814DBC'
            }
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Event Attendees Statistics',
                font: {
                    size: 16
                }
            }
        },

        scales: {
            xAxes: [{
                type: 'time', // set the x-axis type to 'time'
                time: {
                    unit: 'date', // set the time unit to 'month'
                    displayFormats: {
                        month: 'DD MMM YYYY' // set the display format of the time unit
                    },
                    parser: function (date) { // use Moment.js library to parse the date
                        return moment.utc(date);
                    }
                }
            }]
        }
    };

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart
