import { useState } from "react";




export const useForm =  <T>(initialState :T)=>{

    const [formData, setFormData] = useState(initialState)


    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData( item=> ({
             ...item,
            [event.target.name]: event.target.value,
        }))
    }

    const onReset = ()=>{
        setFormData({...initialState})
    }
    return {
        //Propertys
        formData,
        ...formData,
        //Method
        onChange,
        onReset
    }
};