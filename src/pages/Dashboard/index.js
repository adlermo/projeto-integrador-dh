import React from 'react'

import NavBarDark from '../../components/NavBarDark';

import './styles.css'

export default function Dashboard(props) {
  return (
    <>
      <NavBarDark />
      <div className="main_container">
        <section>
          {props.children /* Dashboard é chamada no componente que for renderizado */}
        </section>
      </div>
    </>
  )
}