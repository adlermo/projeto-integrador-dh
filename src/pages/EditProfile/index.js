import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark';

import './style.css'
import image from '../../assets/img/perfil.jpg';



export default function profile() {
  return (
    <>
      <div className="color-background dashboard-bg" />

      <NavBarDark />
      <div className="main_container">
        <section className='card-container-dash'>
          {/* TO DO: loop printing each card item */}

          <div className='card-profile'>
            <div>
              <p>Responsável</p>
              <img clasName="image-profile" src={image} alt="image-profile" />
            </div>
            <div className="warning">
              <p>Ligia Albuquerque</p>
              <p>Coordenadora</p>
            </div>
            <div className="company-options">
              <p>Editar</p>

            </div>
          </div>
          {/* Loop closure */}
        </section>
      </div>
    </>
  )
}