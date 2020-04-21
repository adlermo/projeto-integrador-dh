import React, { Component } from "react";

import { IoIosPeople, IoIosArrowForward, IoIosStar, IoIosStarOutline } from "react-icons/io";

import './styles.css'

export default class Overview extends Component {
    rate = (grade = 4) => {
        let classificacao = []
        for (let i = 0; i < 5; i++) {
            if (grade > i) {
                classificacao.push(<IoIosStar />)
            } else {
                classificacao.push(<IoIosStarOutline />)
            }
        }
        return classificacao
    }

    render() {
        return <>
            <section className='card-container'>
                <div className='card-item'>
                    <div className="company-profile">
                        <IoIosPeople />
                    </div>
                    <div className="company-data">
                        <p>Nome Empresa</p>
                        <p>example@company.org</p>
                    </div>
                    <div className="company-options">
                        <p>{this.rate(4)}</p>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className='card-item'>
                    <div className="company-profile">
                        <IoIosPeople />
                    </div>
                    <div className="company-data">
                        <p>Nome Empresa</p>
                        <p>example@company.org</p>
                    </div>
                    <div className="company-options">
                        <p>{this.rate(3)}</p>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className='card-item'>
                    <div className="company-profile">
                        <IoIosPeople />
                    </div>
                    <div className="company-data">
                        <p>Nome Empresa</p>
                        <p>example@company.org</p>
                    </div>
                    <div className="company-options">
                        <p>{this.rate(3)}</p>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className='card-item'>
                    <div className="company-profile">
                        <IoIosPeople />
                    </div>
                    <div className="company-data">
                        <p>Nome Empresa</p>
                        <p>example@company.org</p>
                    </div>
                    <div className="company-options">
                        <p>{this.rate(2)}</p>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className='card-item'>
                    <div className="company-profile">
                        <IoIosPeople />
                    </div>
                    <div className="company-data">
                        <p>Nome Empresa</p>
                        <p>example@company.org</p>
                    </div>
                    <div className="company-options">
                        <p>{this.rate(0)}</p>
                        <IoIosArrowForward />
                    </div>
                </div>
            </section>
        </>
    }
} 
