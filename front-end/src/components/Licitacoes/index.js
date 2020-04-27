import React, { Component } from "react";

import { IoIosPeople, IoIosArrowDown, IoIosStar, IoIosStarOutline, } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import './style.css'
import { Link } from 'react-router-dom';
//import box from "../../assets/img/imgbox.png";

export default class LicitacaoAberta extends Component {

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
        return this.state.companies.forEach(company => <div className='card-licitacoes-abertas'>
            <div className="orca-company">
                <IoIosPeople />
            </div>
            <div className="company-data">
                <p>company.nome</p>
                <p>company.email</p>
            </div>
            <div className="company-options">
                <p>{this.rate(company.classificacao)}</p>
                <IoIosArrowDown />
            </div>
        </div>
        )
    }

    render() {
        return <>
            <div className="main_container">
                <section className='card-container-dash'>
                    {/* TO DO: loop printing each card item */}
                    <Link to="/dashboard/licitacaoaberta">
                    <div className='card-licitacoes-abertas'>

                        <div className="orca-company">
                            <FaBoxOpen />
                            <p>Licitação A</p>
                        </div>
                        <div className="company-data">
                            <p>2 Macbooks</p>
                            <p>3 Impressoras</p>
                            <p>4 Celulares</p>
                        </div>
                        <div className="company-options">
                            <IoIosArrowDown />

                        </div>

                    </div>
                    </Link>

                    <Link to="/dashboard/licitacaoaberta">
                    <div className='card-licitacoes-abertas'>
                        
                        <div className="orca-company">
                            <FaBoxOpen />
                            <p>Licitação B</p>
                        </div>
                        <div className="company-data">
                            <p>7 Computadores</p>
                            <p>3 Impressões</p>
                        </div>
                        <div className="company-options">
                            <IoIosArrowDown />

                        </div>
                    </div>
                    </Link>

                    <Link to="/dashboard/licitacaoaberta">
                    <div className='card-licitacoes-abertas'>
                        <div className="orca-company">
                            <FaBoxOpen />
                            <p>Licitação C</p>
                        </div>
                        <div className="company-data">
                            <p>1 Reforma de Interiores</p>
                            <p>Pintura da Fachada</p>
                        </div>
                        <div className="company-options">
                            <IoIosArrowDown />

                        </div>
                    </div>
                    </Link>


                    {/* Loop closure */}
                </section>
            </div>
        </>
    }
} 
