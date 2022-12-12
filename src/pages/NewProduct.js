import React, {useState, useEffect} from 'react'
import './NewProductStyles.css';

import {useFormik} from 'formik';

import UsePost from '../hooks/UsePost';

function NewProduct() {

  const url = "http://192.168.0.128:3001/api/products";

  const [startBoolean, setStartBoolean] = useState(false)

  const [formikData, setFormikData] = useState();

  const {response, error} = UsePost(url,formikData,startBoolean);
  



  // consolea 
  useEffect(() => {
    console.log(response)
  }, [response])
  

    const formik = useFormik(
        {
            initialValues:
            {
                // idProduct:"",
                brand:"",
                modelName:""
                // modelNumber:"",
                // caracts:"",
                // nameToDisplay:"",
                // price:"",
                // color:"",
                // details:"",
                // username: authState.username,
            },
            onSubmit: values => {
              alert(JSON.stringify(values, null, 2))
              setFormikData(values);
              setStartBoolean(true);
            },

        }
    )


    // const validationSchema = Yup.object().shape(
    //     {
    //         idProduct: Yup.string().min(1).required("minimo 4 caracteres"),
    //         brand: Yup.string().min(1).required("minimo 4 caracteres"),
    //         modelName: Yup.string().min(1).required("minimo 4 caracteres")
    //     }
    // )



  return (
    <div >
      <form className='tempForm'
            onSubmit={formik.handleSubmit}>
        <div>
          <label>Brand</label>
          <input
            id="brand"
            name="brand"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
        </div>
 

        <div>
        <label>ModelName</label>
          <input
            id="modelnName"
            name="modelName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.modelName}
          />
        </div>

        <button type="submit">Submit</button>


      </form>

      {/* <p>{response}</p> */}
    </div>
  )
}

export default NewProduct;




// import React from 'react';
// import { useFormik } from 'formik';

// const SignupForm = () => {
//   // Note that we have to initialize ALL of fields with values. These
//   // could come from props, but since we don’t want to prefill this form,
//   // we just use an empty string. If we don’t do this, React will yell
//   // at us.
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };