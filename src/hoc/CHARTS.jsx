import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';


export default class CHARTS extends Component {
    state = {
        data:{
            labels: [
                'Białko',
                'Tłuszcze',
                'Węglowodany'
            ],
            datasets: [{
                data: [100, 20, 0],
                backgroundColor: [
                '#CDF3FF',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        }
    }
    
    
  render() {
    console.log(this.state.data.datasets[0].data[0] = 100)
    return (
      <div>
        <Doughnut data={this.state.data} />
        
      </div>
    )
  }
}

