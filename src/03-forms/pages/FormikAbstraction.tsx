import React from 'react'
import '../styles/styles.css';
import {FormikErrors, useFormik,Form,Field,ErrorMessage,Formik} from 'formik';
import * as YUP from 'yup';
import {
    MyTextInput,
    MySelect,
    MyCheckBox
} from '../components';


interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikAbstraction = () => {
       
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik initialValues={{
                        firstName:'',
                        lastName:'',
                        email:'',
                        terms:false,
                        jobType:''
                    }}
                    
                    onSubmit={ (values): void =>{
                                  console.log(values)
                             }}
                    
                    validationSchema={
                        YUP.object({
                        firstName: YUP.string()
                                      .max(15,'Debe de tener 15 caracteres o menos') 
                                      .required('Requerido'),
                        lastName : YUP.string()
                                       .max(15,'Debe de tener 15 caracteres o menos')
                                       .required('Requerido'),
                        email: YUP.string()
                                  .email('El correo no tiene el formato valido')
                                  .required('Requerido'),  
                        terms: YUP.boolean()
                                  .oneOf([true],'Debe de aceptar las condiciones')
                                  .required('Requerido'),  
                        jobType: YUP.string()
                                  .notOneOf(['it-jr'],'Esta opcion no es permitida')
                                  .required('Requerido'),           
                    })}                
            >
                {
                    (formik)=>(
                        <Form  >
                            <MyTextInput label={'First Name'} name={'firstName'} placeholder='Ezequiel' />

                            <MyTextInput label={'Last Name'} name={'lastName'} placeholder='San Pedro' />
                            
                            <MyTextInput label={'Email address'} name={'email'} placeholder='email@gmail.com' type='email' />


                            <MySelect name="jobType" label={'Job Type'} >
                                <option value="">Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>

                            <MyCheckBox label={'Terms & Conditions'} name={'terms'} />
            
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
