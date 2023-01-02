import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'



import './Login.css';
import 'tw-elements';
import './tailwind.css'

import backIcon from '../images/icon-back.svg'
import revisadoLogo from "../images/logo-revisado.png"



function Login() {

  const url = "https://revisado-back.onrender.com/api/auth/register";

  let navigate = useNavigate();
 
  // const yupSchema = Yup.object().shape(
  //   {
  //       name: Yup.string().min(3).required("Marca: minimo 3 caracteres"),
  //       email: Yup.string().min(1).required("minimo 4 caracteres"),
  //   }
  // )


  const formik = useFormik({
    initialValues:
    {
    email:"",
    password:"",
    },

    // validationSchema: yupSchema,

    onSubmit: values => {
        alert(JSON.stringify(values))
        }
    })







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


  <div className="px-6 h-full text-gray-800 p-10">
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
        
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6 grid place-items-center">
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <div className="mb-6 grid place-items-center">
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col justify-between items-center mb-6">
            <div className="form-group form-check ">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-red-300 rounded-sm bg-blue-200 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />

              <label 
              className="form-check-label inline-block text-gray-800" 
              htmlFor="exampleCheck2"
                >Remember me
              </label>

            </div>
            <a href="#!" className="text-gray-800">Forgot password?</a>
          </div>

          <div className="text-center lg:text-left flex flex-col justify-between items-center mb-6 gap-4">
            <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <p>No tenes cuenta?</p>
              <a
                href="/register"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Register</a
              >
          </div>
        </form>
    </div>
  </div>





    </>

  )
}

export default Login