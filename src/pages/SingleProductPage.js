import React from 'react'
import {useParams} from 'react-router-dom'
import ClockLoader from "react-spinners/ClockLoader";

import './SingleProductPage.css';
import backIcon from '../images/icon-back.svg'

import useFetchWithCancel from '../hooks/useFetchWithCancel';

import { Link } from "react-router-dom";
import revisadoLogo from "../images/logo-revisado.png"



function SingleProductPage() {

    const {productId} = useParams() // the same as useParams().productId

    // const url = `https://mocki.io/v1/6bf7b429-39a4-4461-936b-0b6dc856a47a`;
    // const url = "http://192.168.0.128:3001/api/products";
    const url = `https://revisado-back.onrender.com/api/products/all/${productId}`;


    const {data, isLoading,error} = useFetchWithCancel(url);



  
      let content = null;
  
      if(error){
        content = <p>error</p>
      }
      if(isLoading){
        content =  <>
        <div className='loadingDiv'>
          <ClockLoader
            color={"#17CE82"}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1 style={{color:"#17CE82", paddingLeft:"15px"}}>Loading...</h1>
        </div>
        <p>Debido a que nuestro Servido es gratuito es comun una espera de varios segundos</p>
        </>
  
      }
  
      if(data){
        const info = data;
        content = 
        <div>
          <div className='topSide'>
            { info.brand && info.modelName ? <h1>{info.brand} {info.modelName}</h1> : <h1>no se encontraron datos</h1>}
          </div>

          <div className='bottomSide'>
            <div className='contactUs'>
              <h2>Comprar</h2>
            </div>
          </div>
        </div>
      }

  return (
  <>
    <div className='shopHeader'>  
      <Link className='backButton' to={-1} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <img className='back-icon' src={backIcon} alt="back" width="20"></img>
        <div>Volver</div>
      </Link>
      <Link to={'/'}>
        <img className='revisado-header' src={revisadoLogo} alt="logo" />
      </Link>
    </div>
    <div className='productMainSection'>
        <div>
          {content}
        </div>  
    </div>
  </>
  )
}

export default SingleProductPage

