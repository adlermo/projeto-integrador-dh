import React, { Component } from "react";

import { IoIosPeople, IoIosArrowDown, IoIosStar, IoIosStarOutline, } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import NavBarDark from '../../components/NavBarDark/index.js';
import './style.css'
//import box from "../../assets/img/imgbox.png";

export default class LicitacaoAberta extends Component {
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
