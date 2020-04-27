import React, { Component } from "react";

import { IoIosPeople, IoIosArrowForward, IoIosStar, IoIosStarOutline } from "react-icons/io";

import './styles.css'

export default class Overview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            companies: [
                {
                    nome: "Digital House",
                    email: "dh@dh.org",
                    classificacao: 5
                },
                {
                    nome: "Fastcash Digital Payments",
                    email: "fastcash@fastcash.com",
                    classificacao: 4
                },
                {
                    nome: "iSeven Desenvolvimento Web",
                    email: "isevendev@gmail.com",
                    classificacao: 3
                },
                {
                    nome: "Orca S.A.",
                    email: "atendimento@orca.org",
                    classificacao: 5
                }
            ]
        }
    }

    // Function fills the classification given by param
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

    companyRender = () => {
        return this.state.companies.forEach(company => <div className='card-item'>
            <div className="company-profile">
                <IoIosPeople />
            </div>
            <div className="company-data">
                <p>company.nome</p>
                <p>company.email</p>
            </div>
            <div className="company-options">
                <p>{this.rate(company.classificacao)}</p>
                <IoIosArrowForward />
            </div>
        </div>
        )
    }

    render() {
        return <>
            <section className='card-container'>
                {/* TO DO: loop printing each card item */}

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
                        <p>{this.rate(1)}</p>
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

                {/* Loop closure */}
            </section>
        </>
    }
} 
