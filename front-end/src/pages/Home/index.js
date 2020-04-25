import React from 'react';
import NavBar from '../../components/NavBar';

import './styles.css';

import homeSite from '../../assets/img/home.svg';
import testeBg from '../../assets/img/home-fundo.JPG';

export default function home() {

    return (
        <>
            <div className="img-background img--home">   
            
            </div>

            <NavBar />

            <div className="main_container">
                <section className="home-bg">
                    <div className="home">
                        <div className="home-info">
                            <h1>Home</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores sit quis voluptatibus aut dolorem ea nemo! Doloremque itaque numquam, vel porro unde dolor? Aut aspernatur accusantium dolor eveniet tenetur!</p>
                            
                        </div>

                        <div className="home-img">
                            <img src={homeSite} alt="home-site" />
                        </div>

                    </div>
                </section>
            </div>

        </>
    );
}