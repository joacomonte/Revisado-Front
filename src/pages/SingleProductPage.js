import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ClockLoader from "react-spinners/ClockLoader";
import axios from 'axios';
import { Link } from "react-router-dom";
import './SingleProductPageStyles.css';
import backIcon from '../images/icon-back.svg'
import revisadoLogo from "../images/logo-revisado.png"


function SingleProductPage() {

    const {productId} = useParams() // the same as useParams().productId

    // const url = `https://mocki.io/v1/6bf7b429-39a4-4461-936b-0b6dc856a47a`;
    // const url = "http://192.168.0.128:3001/api/products";
    const url = "https://revisado-back.onrender.com/api/products";


    const [products, setProducts] = useState({
      loading:false, 
      data:null, 
      error:false
    })
  
  
      useEffect(() => {
        setProducts( {loading:true, data:null,error:false} );
        setTimeout(()=>{
          axios.get(url).then(res=>{setProducts({loading:false, data: res.data, error:false})})
            .catch( () => {setProducts({loading:false, data:null, error:true})})
        },300)  
      },[])
  
      let content = null;
  
      if(products.error){
        content = <p>error</p>
      }
      if(products.loading){
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
  
      if(products.data){
        const info = products.data[productId-1];
        content = 
        <div>
          <div className='topSide'>

            <h1>{info.brand} {info.modelName}</h1>
            <img className='imgProduct' src={require(`../images/${info.productImg}`)}></img> 

          </div>

          <div className='bottomSide'>

            <div className='caracts'>
              <h2>Detalles</h2>
              <div>Caracteristicas: {info.caracts}</div>
              <div>Modelo Técnico: {info.modelNumber}</div>
              <div>Color: {info.color}</div>
              <div>Estado: {info.details}</div>
            </div>
            <div className='contactUs'>
              <h2>Comprar</h2>
            </div>
          </div>
        </div>
      }

  return (
    <div className='pageContainer'>
      <div className='pageContent'>
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
      </div>
    </div>
  )
}

export default SingleProductPage