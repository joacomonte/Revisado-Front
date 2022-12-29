import React, {useState} from 'react'

import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

import './NewProduct.css';
import './Shop.css';


import revisadoLogo from "../images/logo-revisado.png"
import backIcon from '../images/icon-back.svg'
import imageUpload from  '../images/image-upload.svg'
import iphoneImg from '../images/iphone.jpg'


import UsePost from '../hooks/UsePost';



function NewProduct() {

  // const url = "https://revisado-back.onrender.com/api/products";
  const url = "http://192.168.0.128:3001/api/products";

  const [img, setImg] = useState(imageUpload)
  function changeImg() { setImg(iphoneImg) }


  const yupSchema = Yup.object().shape(
    {
        brand: Yup.string().min(3).required("Marca: minimo 3 caracteres"),
        modelName: Yup.string().min(1).required("minimo 4 caracteres"),
        price: Yup.string().matches(/^[0-9]+$/, 'Precio: Solo numeros, sin puntos ni comas.')
    }
)


  const [formikData, setFormikData] = useState();

  const {response, error, fetchData} = UsePost(url,formikData);
  

  const formik = useFormik({
          initialValues:
          {
            brand:"",
            modelName:"",
            price:'',
            username: "joacomonte94",

            modelNumber: "", 
            caracts:"",
            color:"",
            details:""

          },
          validationSchema: yupSchema,
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            setFormikData(values);
            fetchData();
          },
      }
    )



  return (
    <>

    <div className='shopPage'>

    <div className='shopHeader'>

      <Link className='backButton' to={-1} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <img className='back-icon' src={backIcon} alt="back" width="20"></img>
        <div>Volver</div>
      </Link>

      <img className='revisado-header' src={revisadoLogo} alt="logo"/>
      
      <Link className='newProductButton' to="/shop/new-product" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div>New Product</div>
      </Link>
    </div>





      <form className='tempForm'onSubmit={formik.handleSubmit} >
        <h1>Vendé tu producto</h1>
        <h3>Preview de la publicación</h3>
        <div className='cardContainer2'>
          <div className='user'> Vendedor: joacomonte94</div>
          <div className='form-img-div' >
            <img className='formIMG' src={img} onClick={changeImg} ></img>
            <div>click to upload img</div>
          </div>

          

          <input className={formik.errors.brand ? "brand-error" : "brand"}
            id="brand"
            name="brand"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
            placeholder="Marca"
          /> 


          <input className='modelName'
            id="modelnName"
            name="modelName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.modelName}
            placeholder="Modelo"
          />

          <input className='price'
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            placeholder="Precio"
          />

          <Link className='masButton' to={2} style={{textDecoration: 'inherit'}}>    
            <div>Más</div>    
          </Link>   
        </div>

        {formik.errors.brand && formik.touched.brand && formik.values.brand!="" && (<div className='errorField'>La marca debe ser de al menos 2 caracteres</div>)}
        {formik.errors.price && formik.touched.price && formik.values.price!="" && (<div className='errorField'>{formik.errors.price}</div>)}

        <div>
          <select
            id="details"
            name="details"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.details}
            style={{ display: 'block' }}
          >
            <option value="" label="Estado" />
            <option value="Nuevo" label="Nuevo" />
            <option value="Usado" label="Usado" />
          </select>
        </div>


        {/* resto de los datos */}
        <div className='caracts2'>
          <textarea className='textarea'
            id="caracts"
            name="caracts"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.caracts}
            placeholder="Describa aqui todo lo posible"
          />
        </div>
        {/* termina resto de los datos */}


        <button className='masButton' style={{textAlign:'center'}} type="submit">Submit</button>
      </form>


    </div>
    </>
  )
}

export default NewProduct;

