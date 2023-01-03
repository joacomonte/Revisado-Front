import React from 'react'
import './product.css';
import { Link } from "react-router-dom";

function product(props) {
  const id = `/shop/${props.id}`



  return (
    <div className='cardContainer'>
        {props.seller ? <div>{props.seller}</div> : <div style={{color:"grey"}} >Vendedor: Montech</div>}
        {props.img ? <div>{props.img}</div> : <img className='card-img' src={require(`../images/bottle-black.png`)}></img>}
        {props.brand ? <div className='card-brand'>{props.brand}</div> :  <div className='temp2'>No Prop</div>}
        {props.modelName ? <div className='card-modelName'>{props.modelName}</div> : <div>No Prop</div> }
        {props.price ? <div className='card-price'>${props.price}</div> : <div>No tiene precio</div>}
        {props.caracts? <div>{props.caracts}</div> :''}
        {props.color ? <div>{props.color}</div> : ''}


        <Link className='button1-revisado' to={id} style={{textDecoration: 'inherit'}}>    
          <div>Más</div>    
        </Link>   
    </div>
  )
}

export default product