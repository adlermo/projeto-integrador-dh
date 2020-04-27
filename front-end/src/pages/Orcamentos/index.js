import React, { Component } from 'react';

import ReactApexChart from 'react-apexcharts'
import Dashboard from '../Dashboard';

export default class Orcamentos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Fechado',
                data: [0, 3, 3, 10, 7, 8, 2]
            }, {
                name: 'Aberto',
                data: [3, 4, 6, 5, 8, 3, 7]
            }, {
                name: 'Cancelado',
                data: [2, 2, 7, 5, 13, 11, 4]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                responsive: [{
                    breakpoint: 280,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                    },
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        'Oct 1 2019 GMT',
                        'Nov 1 2019 GMT',
                        'Dec 1 2019 GMT',
                        'Jan 1 2020 GMT',
                        'Feb 1 2020 GMT',
                        'Mar 1 2020 GMT',
                        'Apr 1 2020 GMT',
                    ],
                    labels: {
                        show: true,
                        format: 'MMMM'
                    }
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                }
            },


        };
    }


    render() {
        return <Dashboard>
            <div id="chart" className="item" style={{ backgroundColor: 'white' }}>
                <h1 style={{ textAlign: 'center' }}>Visão Geral dos Orçamentos</h1>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        </Dashboard >
    }
}
