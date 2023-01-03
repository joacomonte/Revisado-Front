import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";

import revisadoLogo from "../images/logo-revisado.png"
import heroImg from "../images/hero-img.png"
import separator1 from "../images/Separator1.svg"


function home() {
    return (
    <>
        <div className='homeHeader'>
            <div className='revisado-home'>
                <img src={revisadoLogo} alt="logo"   />
            </div>

            <div className='headerButtonsWrapper'>   
                <Link to="/shop" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button className='navBarButtons'>Shop</button>
                </Link>             
                <button className='navBarButtons'>Nosotros</button>

                <button className='navBarButtons'>Vender</button>
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button className='loginButton'>Login</button>
                </Link>   
            </div>
        </div>


        <div className='Hero'>
            <div className='heroLeft'> 
                <div className='sub1'> Compra con <mark style={{fontWeight:700, background:'none'}}>confianza.</mark></div>
                <div className='sub2'> Vende <mark style={{fontWeight:700, background:'none'}}>sin esfuerzo</mark></div>
            </div>
            <div className='heroImg'>
                <img src={heroImg} alt="heroimg" />
            </div>

        </div>

        <img src={separator1} alt="separator" className='separator1'/>
    </>
  )
}

export default home