import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome, IoIosInformationCircle, IoMdCart, IoMdText, IoIosLogIn } from 'react-icons/io';

export default function TopNavBar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                        <span className="icon"><IoIosHome /> </span>
                        <span className="title">Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/orcamentos">
                        <span className="icon"><IoMdCart /></span>
                        <span className="title">Orçamentos</span>
                    </Link>
                </li>

                <li>
                    <Link to="/logon">
                        <span className="icon"><IoIosLogIn /></span>
                        <span className="title">Entrar</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}