import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark';
import Card from 'react-bootstrap/Card'
import './style.css'
import image from '../../assets/img/perfil.jpg';
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
      <div className="main_container">
        <section className='card-container-dash'>
          {/* TO DO: loop printing each card item */}

          <Link to="/editprofile">
            <div className='card-profile'>
              <div>
              <p>Responsável</p>
              <img clasName= "image-profile" src={image} alt="image-profile" />
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
  )
}