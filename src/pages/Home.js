import React from 'react'
import './HomeStyles.css'
import { Link } from "react-router-dom";

import revisadoLogo from "../images/logo-revisado.png"
import heroImg from "../images/hero-img.png"
import separator1 from "../images/Separator1.svg"


function home() {
  return (
    <>
        <div className='homeHeader'>
            <img src={revisadoLogo} alt="logo" width="200"  />
            <div className='headerButtonsWrapper'>   
                <Link to="/shop" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button className='navBarButtons'>Shop</button>
                </Link>             
                <button className='navBarButtons'>Nosotros</button>



                <button className='navBarButtons'>Vender</button>
                <button className='loginButton'>Login</button>
            </div>
        </div>
        <div className='Hero'>
            <div className='heroLeft'> 
                <div className='sub1'> Compra con <mark style={{fontWeight:700, background:'none'}}>confianza.</mark></div>
                <div className='sub2'> Vende <mark style={{fontWeight:700, background:'none'}}>sin esfuerzo</mark></div>
            </div>
            <img src={heroImg} alt="heroimg" className='heroImg'/>
        </div>

        <img src={separator1} alt="separator" className='separator1'/>
    </>
  )
}

export default home