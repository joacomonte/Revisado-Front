import React from 'react'
import {useParams} from 'react-router-dom'
import ClockLoader from "react-spinners/ClockLoader";
import { Link } from "react-router-dom";
import './SingleProductPage.css';
import backIcon from '../images/icon-back.svg'
import revisadoLogo from "../images/logo-revisado.png"
import useFetchWithCancel from '../hooks/useFetchWithCancel';


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
        content =  
        <div className='loadingDiv'>
          <ClockLoader
            color={"#17CE82"}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1 style={{color:"#17CE82", paddingLeft:"15px"}}>Loading...</h1>
        </div>
  
      }
  
      if(data){
        const info = data;
        content = 
        <div>
          <div className='topSide'>

            { info.brand && info.modelName ? <h1>{info.brand} {info.modelName}</h1> : <h1>no se encontraron datos</h1>}
            {/* <img className='imgProduct' src={require(`../images/${info.productImg}`)}></img>  */}

          </div>

          <div className='bottomSide'>

            {/* <div className='caracts'>
              <h2>Detalles</h2>
              <div>Caracteristicas: {info.caracts}</div>
              <div>Modelo Técnico: {info.modelNumber}</div>
              <div>Color: {info.color}</div>
              <div>Estado: {info.details}</div>
            </div> */}
            <div className='contactUs'>
              <h2>Comprar</h2>
            </div>
          </div>
        </div>
      }

  return (

        <div className='productPage'> 


        <img src={revisadoLogo} alt="logo" width="200" style={{marginTop:"5px"}} />
              
              <Link className='backButton' to={-1} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <img src={backIcon} alt="back" width="20"></img>
                <p>Volver</p>
              </Link>

          <div className='productMainSection'>
              <div>
                {content}
              </div>  
          </div>
   
    </div>
  )
}

export default SingleProductPage

