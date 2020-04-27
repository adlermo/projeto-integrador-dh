import React from 'react'

import NavBarDark from '../../components/NavBarDark';

import './styles.css'

export default function Dashboard(props) {
  return (
    <>
      <div className="color-background dashboard-bg" />
      <NavBarDark />
      <div className="main_container dark-blue">
        {props.children /* Dashboard é chamada no componente que for renderizado */}
      </div>
    </>
  )
}