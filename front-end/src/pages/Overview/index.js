import React, { Component } from "react";

import { IoIosPeople, IoIosArrowForward, IoIosStar, IoIosStarOutline } from "react-icons/io";

import './styles.css'
import Dashboard from "../Dashboard";

export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // List os Sample Companies to Render
            companies: [
                {
                    nome: "Digital House",
                    email: "dh@dh.org",
                    classificacao: 4.3
                },
                {
                    nome: "Fastcash Digital Payments",
                    email: "fastcash@fastcash.com",
                    classificacao: 4.7
                },
                {
                    nome: "iSeven Desenvolvimento Web",
                    email: "isevendev@gmail.com",
                    classificacao: 3
                },
                {
                    nome: "Orca S.A.",
                    email: "atendimento@orca.org",
                    classificacao: 4.4
                },
                {
                    nome: "Oracle Company",
                    email: "onlyimportant@oracle.org",
                    classificacao: 5
                },
                {
                    nome: "Salesforce",
                    email: "finances@salesforce.uk",
                    classificacao: 4
                },
                {
                    nome: "Google",
                    email: "humanresources@google.com",
                    classificacao: 5
                },
                {
                    nome: "Amazon",
                    email: "awsservices@amazon.com",
                    classificacao: 5
                },
                {
                    nome: "Great Thinkers Group",
                    email: "thinkersgroup@thinkers.com",
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

    // handleClick = () => {
    //     console.log(this.state.companies)
    // }

    render() {
        // Code statement sorts the obj by classification
        let companies = this.state.companies.sort((a, b) => {
            return b.classificacao - a.classificacao
        })

        return <Dashboard className='card-container'>
            {/* Loop printing each card item */}

            {companies.map(company => < /*a href=''  onClick={this.handleClick()} */ >
                <div className='card-item'>
                    <div className="company-profile">
                        <IoIosPeople />
                    </div>
                    <div className="company-data">
                        <p>{company.nome}</p>
                        <p>{company.email}</p>
                    </div>
                    <div className="company-rate">
                        <p>{this.rate(company.classificacao)}</p>
                        <IoIosArrowForward />
                    </div>
                </div>
            </ /*a*/ >
            )}

            {/* Loop closure */}
        </Dashboard>
    }
} 
