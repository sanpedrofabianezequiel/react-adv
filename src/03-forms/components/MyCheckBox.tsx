import { useField } from 'formik'
import React from 'react'

interface Props {
    label:string;
    name:string;
    type?:'text'| 'email'|'password';
    placeholder?:string;
    [x:string]:any;
}

export const MyCheckBox = ( {label , ...props} : Props) => {
    const [field,meta] = useField({...props,type:'checkbox'});
    return (
        <>
            <label>
                {label}
                <input  type='checkbox' {...field}  {...props} />
            </label>  
            {
                meta.touched && meta.error && (
                    <span className='error' >{meta.error}</span>
                )
            }
        </>
    )
}
