
import React from 'react'
import './Shop.css';


import ClockLoader from "react-spinners/ClockLoader";
import { Link } from "react-router-dom";
import backIcon from '../images/icon-back.svg'
import revisadoLogo from "../images/logo-revisado.png"

import useFetchWithCancel from '../hooks/useFetchWithCancel';

import Product from "../components/product"


function Shop() {
  
  // const url = `https://mocki.io/v1/6bf7b429-39a4-4461-936b-0b6dc856a47a`;
  const url = `https://revisado-back.onrender.com/api/products/all`;
  // const url = "http://192.168.0.128:3001/api/products/all";




  const {data, isLoading,error} = useFetchWithCancel(url);



    let productsListDiv = null;

    if(error)
    {
      productsListDiv = <p>Hubo un error al comunicarse con el servidor</p>
    }

    if(isLoading)
    {
      productsListDiv =  
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

    if(data)
    {
      productList = data.products
      console.log(data.products)
      productsListDiv = 
      productList.map(item=>{
        return(
          <Product
            key={item.idProduct}
            brand={item.brand}
            id={item.idProduct}
            modelName={item.modelName}
            // price={item.price}
            // productImg={item.productImg}

          />
        )
      })
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

      <Link className='newProductButton' to="/shop/new-product" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div>New Product</div>
      </Link>
    </div>
      



    <div className='shopTitle'>
      Productos disponibles
    </div>

    <div className='productListContainer'>
      {productsListDiv}
    </div>

  </>
  )
}

export default Shop

