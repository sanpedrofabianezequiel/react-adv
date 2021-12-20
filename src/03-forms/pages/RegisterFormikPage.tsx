import React, { useState } from 'react'
import '../styles/styles.css';
import {  Form, Formik, useFormik } from 'formik';
import * as YUP from 'yup';
import { MyTextInput } from '../components';

interface IFormulario {
    name:string,
    email:string,
    password1:string,
    password2:string,
}

export const RegisterFormikPage = () => {

  
    return (
        <div>
            <h1>Formik Register Page</h1>

            <Formik 
                initialValues={{
                    name:'',
                    email:'',
                    password1:'',
                    password2:''
                }}

                onSubmit={()=>{}}

                validationSchema={ YUP.object({
                    name: YUP.string()
                            .max(15,'Debe de tener 15 caracteres o menos')
                            .min(2,'Debe de tener 2 caracteres o mas')
                            .required('Requerido'),
                    email: YUP.string()
                            .email('El email no tiene el formato correcto')
                            .required('Requerido'),
                    password1: YUP.string()
                            .min(6,'Minimo 6 letras')
                            .required('Requerido'),
                    password2: YUP.string()
                            .oneOf( [ YUP.ref('password1')],'Las contraseñas no son iguales')
                            .required('Requerido')
                    
                })}
                
            >

                {
                    (formik) =>(
                        <Form>
                                <MyTextInput label='Name' name='name' type='text' placeholder='Your Name' />

                                <MyTextInput label='Email' name='email' type='email' placeholder='Your Email' />

                                <MyTextInput label='Password' name='password1' type='password' placeholder='Your Password' />
                                
                                <MyTextInput label='Confirm Password' name='password2' type='password' placeholder='Your Password' />

                                 <button type="submit">Create</button>
                                 <button type="button"  onClick={formik.handleReset}>Reset</button>
                        </Form>
                    )
                }


            </Formik>
        </div>
    )
}


/*
    
                <input type="text" placeholder='Name' {...getFieldProps('name')} />
                <input type="email" placeholder='Email' {...getFieldProps('email')} />
                <input type="password" placeholder='Password' {...getFieldProps('password1')} />
                <input type="password" placeholder='Repetea password' {...getFieldProps('password2')} />
                <button type='submit' >Load</button>
                <button type='button'  onClick={onReset}>Reset</button>

*/