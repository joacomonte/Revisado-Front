
import React, {useEffect, useState} from 'react'
import axios, { Axios } from 'axios';

import ClockLoader from "react-spinners/ClockLoader";
import { Link } from "react-router-dom";
import backIcon from '../images/icon-back.svg'
import revisadoLogo from "../images/logo-revisado.png"

import useFetchWithCancel from '../hooks/useFetchWithCancel';

import './ShopStyles.css';
import Product from "../components/product"



function Shop() {
  
  const url = `https://mocki.io/v1/6bf7b429-39a4-4461-936b-0b6dc856a47a`;



  const {data, isLoading,error} = useFetchWithCancel(url);


  useEffect(()=>{
    setTimeout(()=>{
      setMounted(false)
    },1000)
  },[])


    let productsListDiv = null;

    if(error)
    {
      productsListDiv = <p>{error}</p>
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
      productsListDiv = 
      data.map(item=>{
        return(
          <Product
            key={item.id}
            title={item.nameToDisplay}
            price={item.price}
            productImg={item.productImg}
            id={item.id}
          />
        )
      })
    }
  



  return (
    <div className='pageContainer'>
      <div className='pageContent'>
        <div className='shopPage'>
          <div className='shopHeader'>
            <img src={revisadoLogo} alt="logo" width="200" style={{marginTop:"5px"}} />
            <Link className='backButton' to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <img src={backIcon} alt="back" width="20"></img>
              <p>Volver</p>
            </Link>
          </div>

          <div className='shopTitle'>
            Productos disponibles
          </div>

          <div className='productListContainer'>
            {productsListDiv}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Shop

