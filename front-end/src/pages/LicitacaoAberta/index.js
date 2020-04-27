import React, { Component } from "react";

import { IoIosPeople, IoIosArrowDown, IoIosStar, IoIosStarOutline, } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import NavBarDark from '../../components/NavBarDark/index.js';
import './style.css'
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
        return this.state.companies.forEach(company => <div className='card-item'>
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
            <div className="color-background dashboard-bg" />

            <NavBarDark />

            <div className="main_container">
                <section className='card-container'>
                    {/* TO DO: loop printing each card item */}

                    <div className='card-licitacao'>
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
                         <p2>Verificar Contrato</p2>

                        </div>
                    </div>

                    <div className='card-item-vencedor'>
                        <div className="orca-company">
                            <FaBoxOpen />
                            <p>Fornecedor X</p>
                        </div>
                        <div className="company-data">
                            <p>Item 1 - R$ 2.000,00</p>
                            <p>Item 1 - R$ 2.000,00</p>
                            <p>Item 1 - R$ 2.000,00</p>
                        </div>
                        <div className="company-options">
                            <IoIosArrowDown />

                        </div>
                    </div>

                    <div className='card-item'>
                        <div className="orca-company">
                            <FaBoxOpen />
                            <p>Nome Empresa</p>
                        </div>
                        <div className="company-data">
                            <p>Item 1 - R$ 2.000,00</p>
                            <p>Item 1 - R$ 2.000,00</p>
                            <p>Item 1 - R$ 2.000,00</p>
                        </div>
                        <div className="company-options">
                            <IoIosArrowDown />

                        </div>
                    </div>

                    <div className='card-item'>
                        <div className="orca-company">
                            <FaBoxOpen />
                            <p>Nome Empresa</p>
                        </div>
                        <div className="company-data">
                            <p>Item 1 - R$ 2.000,00</p>
                            <p>Item 1 - R$ 2.000,00</p>
                            <p>Item 1 - R$ 2.000,00</p>
                        </div>
                        <div className="company-options">
                            <IoIosArrowDown />

                        </div>
                    </div>


                    {/* Loop closure */}
                </section>
            </div>
        </>
    }
} 
