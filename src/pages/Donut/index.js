import React, { Component } from 'react';
import Chart from 'react-apexcharts'

import './styles.css'

export default class Donut extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                // Labels inside options object set the names
                labels: ['Nome', 'Quantidade', 'Alguma Coisa', 'Outra Coisa', 'Estrela']
            },
            series: [0, 5, 41, 17, 25]
        }
    }

    render() {
        return <>
            <div className="donut">
                <Chart options={this.state.options} series={this.state.series} type="donut" width="320" />
                <Chart options={this.state.options} series={[31, 10, 7, 15, 13]} type="donut" width="320" />
                <Chart options={this.state.options} series={[21, 6, 15, 7, 10]} type="donut" width="320" />
            </div>
        </>
    }
}