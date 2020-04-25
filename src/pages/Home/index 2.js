import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Licitacoes from '../Licitacoes/Licitacoes'
import NavBar from '../../components/NavBar';

import './styles.css';

// import heroesLogo from '../../assets/logo.svg';
// import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    return (
        <>
            <Licitacoes />;
            <NavBar> </NavBar>
        </>
    );
}