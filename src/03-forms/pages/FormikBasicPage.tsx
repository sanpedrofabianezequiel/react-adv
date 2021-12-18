import React from 'react'
import '../styles/styles.css';
import {FormikErrors, useFormik} from 'formik';

interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = (values : IFormValues)=>{
        const errors: FormikErrors<IFormValues> = {};
        const {firstName,lastName,email} = values;
        if(!firstName){
            errors.firstName='Required';
        }else if(firstName.length >= 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if(!lastName){
            errors.lastName = 'Required';
        }else if(lastName.length >=10){
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const  {handleChange,values,handleSubmit ,errors ,touched,handleBlur} = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
        },
        onSubmit: (value)=>{
            console.log(value);
        },
        validate:validate
    })
    
    return (
        <div>
            <h1>Formil Basic</h1>

            <form action="" noValidate={true} onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name= "firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.firstName && values.firstName && <span>{errors.firstName}</span>
                }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />

                <label htmlFor="email">Email address</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
