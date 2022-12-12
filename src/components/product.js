import React from 'react'
import './product.css';
import { Link } from "react-router-dom";

function product(props) {
  const id = `/shop/${props.id}`
  return (
    <div className='cardContainer'>
        {/* <img className='temp1' src={require(`../images/${props.productImg}`)}></img> */}
        <div className='temp2'>{props.brand}</div>    
        {props.modelName ? <div className='temp3'>{props.modelName}</div> : <p>no existe esta prop</p> }
        <Link className='temp4' to={id} style={{textDecoration: 'inherit'}}>    
          <div>Más</div>    
        </Link>   
    </div>
  )
}

export default product