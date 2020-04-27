import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarDark from '../../components/NavBarDark';
import Orcamentos from '../../pages/Orcamentos';

import './styles.css'

export default function Dashboard() {
    return (
        <>
            <div className="color-background dashboard-bg" />

            <NavBarDark active='Overview' />

            <>
                <div className='main_container overview'>
                    <Orcamentos />
                </div>
            </>

        </>
    )
}