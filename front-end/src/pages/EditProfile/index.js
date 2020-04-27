import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark';
import Card from 'react-bootstrap/Card'
import './style.css'
import image from '../../assets/perfil.jpg';
import { withFormik, Form, Field } from 'formik'



export default function profile() {
  return (
    <>
      <div className="color-background dashboard-bg" />

      <NavBarDark />

      <div className="main_container">
        <Card className="cardProfile">
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
        </ Card>
      </div>
    </>
  )
}