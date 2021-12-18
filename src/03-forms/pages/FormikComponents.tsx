import React from 'react'
import '../styles/styles.css';
import {FormikErrors, useFormik,Form,Field,ErrorMessage,Formik} from 'formik';
import * as YUP from 'yup';


interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikComponents = () => {
       
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
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component='span' />
            
                            <label htmlFor="lastName">Last Name</label>
                            <Field  name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component='span' />
            
                            <label htmlFor="email">Email address</label>
                            <Field  name="email"    type="text" />
                            <ErrorMessage  name="email" component='span' />



                            <label htmlFor="jobType">Job type</label>
                            <Field name="jobType" as="select">
                                <option value="">Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </Field>
                            <ErrorMessage  name="jobType" component='span' />


                            
                            <label >Terms and conditions
                                <Field  name="terms"    type="checkbox" />
                            </label>
                            <ErrorMessage  name="terms" component='span' />




            
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
