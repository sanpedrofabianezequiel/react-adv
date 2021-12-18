import React from 'react'
import '../styles/styles.css';
import {FormikErrors, useFormik} from 'formik';
import * as YUP from 'yup';


interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {

      const  {handleChange,values,handleSubmit ,errors ,touched,handleBlur,getFieldProps} = useFormik<IFormValues>({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
        },
        onSubmit: (value)=>{
            console.log(value);
        },
        validationSchema: YUP.object({
            firstName: YUP.string()
                          .max(15,'Debe de tener 15 caracteres o menos') 
                          .required('Requerido'),
            lastName : YUP.string()
                           .max(15,'Debe de tener 15 caracteres o menos')
                           .required('Requerido'),
            email: YUP.string()
                      .email('El correo no tiene el formato valido')
                      .required('Requerido')  
        })
    })
    
    return (
        <div>
            <h1>Formil Yup</h1>

            <form action="" noValidate={true} onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {
                    touched.firstName && values.firstName && <span>{errors.firstName}</span>
                }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />

                <label htmlFor="email">Email address</label>
                <input type="email" {...getFieldProps('email')} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
