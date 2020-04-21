import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export default class Donut extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                0: 'nome'
            },
            series: [0, 5, 41, 17, 25],
            labels: ['Nome', 'Quantidade', 'Alguma Coisa', 'Outra Coisa', 'Estrela']
        }
    }

    render() {
        return <>
            <div className="donut item">
                <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
            </div>
        </>
    }
}