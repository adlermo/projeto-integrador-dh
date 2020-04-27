import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark';
import Card from 'react-bootstrap/Card'
import './style.css'
import image from '../../assets/perfil.jpg';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { IoMdWarning } from "react-icons/io";
import { Link } from 'react-router-dom';

import { IoIosPeople, IoIosArrowDown, IoIosStar, IoIosStarOutline, } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";



export default function profile() {
  return (
    <>
      <div className="color-background dashboard-bg" />

      <NavBarDark />
      return <>
            <div className="main_container">
                <section className='card-container-dash'>
                    {/* TO DO: loop printing each card item */}

                    <Link to="/editprofile">
                    <div className='card-profile'>
                        <div className="profileImage" img src={image }>
                        <p>Responsável</p>
                        </div>
                        <div className="warning">
                            <p>Ligia Albuquerque</p>
                            <p>Coordenadora</p>
                        </div>
                        <div className="company-options">
                            <p>Editar</p>

                        </div>
                    </div>
                    </Link>

                    <div className='card-warning'>
                        
                        <div className="warning">
                            <p>Avisos</p>
                        </div>
                        <div className="company-data">
                            <p><IoMdWarning />Verificar contrato</p>
                            <p><IoMdWarning />Documentos Solicitados</p>
                        </div>

                    </div>
                    {/* Loop closure */}
                </section>
            </div>
        </>
    }
} 


      <div className="main_container">
      <Card className="cardWarning">
        <Card-Titular>
          <Card.Title>Avisos</Card.Title>
        </Card-Titular>
        <Card-Mother className="card">
          <Card.Body>
            <Card.Text><IoMdWarning />Verificar contrato Licitação Y</Card.Text>
            <Card.Text><IoMdWarning />Informações solicitadas</Card.Text>
            <Card.Text><IoMdWarning />Itens a serem entregues</Card.Text>
          </Card.Body>
        </Card-Mother>
      </ Card>

      <Card variant="cardProfile"> <Link to="/editprofile">
        <Card-Titular>
          <Card.Title>Responsável</Card.Title>
        </Card-Titular>
        <Card-Mother className="card">
          <Card.Body>
            <Card.Img className="profileImage" src={image} alt="Profile Image" />
            <Card.Text>Ligia Albuquerque</Card.Text>
            <Card.Text>Coordenadora</Card.Text>
            <Card.Text>Varejista</Card.Text>
          </Card.Body>
        </Card-Mother>
      </Link>
      </ Card>
      </div>

      

    </>
  )
}