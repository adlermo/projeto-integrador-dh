import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark';
import Orcamentos from '../../pages/Orcamentos';

import './styles.css'

export default function Dashboard() {
<<<<<<< HEAD
  return (
    <>
      <div className="color-background dashboard-bg"/>             
        <NavBarDark />
          <div className="main_container">
            <h1> teste </h1>
          </div>
=======
    return (
        <>
            <div className="color-background dashboard-bg" />

            <NavBarDark active='Overview' />

            <>
                <div className='main_container overview'>
                    <Orcamentos />
                </div>
            </>

>>>>>>> 2f371d28894a487dfb0499e0ad2e714902aba39a
        </>
  )
}