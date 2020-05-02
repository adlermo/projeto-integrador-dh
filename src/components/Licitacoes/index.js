import React, { Component } from "react";

import { IoIosPeople, IoIosArrowDown, IoIosStar, IoIosStarOutline, } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import './style.css'
import { Link } from 'react-router-dom';
//import box from "../../assets/img/imgbox.png";

export default class LicitacaoAberta extends Component {
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
