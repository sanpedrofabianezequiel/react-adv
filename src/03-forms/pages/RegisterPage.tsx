import React, { useState } from 'react'
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

interface IFormulario {
    name:string,
    email:string,
    password1:string,
    password2:string,
}

export const RegisterPage = () => {

    const { onChange,formData,onReset,
        name,
        email,
        password1,
        password2
    } = useForm<IFormulario>({
        name:'',
        email:'',
        password1:'',
        password2:''
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form action="" noValidate={true} onSubmit={(e)=>onSubmit(e)}>
                <input type="text" placeholder='Name' name="name" value={name} onChange={(e)=>onChange(e)} />
                <input type="email" placeholder='Email' name="email" value={email} onChange={(e)=>onChange(e)} />
                <input type="password" placeholder='Password' name="password1" value={password1} onChange={(e)=>onChange(e)} />
                <input type="password" placeholder='Repetea password' name="password2" value={password2} onChange={(e)=>onChange(e)} />
                <button type='submit' >Load</button>
                <button type='button'  onClick={onReset}>Reset</button>
            </form>
        </div>
    )
}
