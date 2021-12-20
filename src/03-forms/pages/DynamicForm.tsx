import { Form, Formik } from 'formik';
import React from 'react'
import { MySelect, MyTextInput } from '../components';
import formsData from '../data/custom-form.json';
import * as Yup from 'yup';


interface Props {
    [key:string]:any
}

const initialValue : Props ={};
const schemaDinamyc :Props = {};


for (const item of formsData) {
    initialValue[item.name] = item.value;

    if(!item.validations) continue; //si NO hay validaciones continua

    let schema = Yup.string();

    for (const rules of item.validations) {
        if(rules.type === 'required'){
            schema =  schema.required('Este campo es requerido');
        }

        if(rules.type === 'minLenght'){
            schema = schema.min((rules.value as any),`El minimo es ${rules.value || 2} caracteres` )
        }
        //Otras reglas
    }
    schemaDinamyc[item.name] = schema;
}


export const DynamicForm = () => {


    return (
        <Formik 
            initialValues={initialValue} 

            onSubmit={(value)=>{
                console.log(value);
            }}
            
            validationSchema={ Yup.object({
                ...schemaDinamyc
            })}
        >
            {
                (formik)=>(

                    <Form noValidate>
                        {
                            formsData.map( (item,index)=>{
                               if(item.type === 'input' || item.type === 'password' || item.type === 'email'){
                                   return <MyTextInput key={index.toString()} type={ (item.type as any)} name={item.name} label={item.label} placeholder={item.placeholder} />     
                               }else if (item.type === 'select'){

                                    return (
                                        <MySelect  key={index.toString()} type={ (item.type as any)} name={item.name} label={item.label} placeholder={item.placeholder} >
                                            <option value="">Select an option</option>
                                            {
                                               item.options?.map(  (opts, index)=>(
                                                   <option key={index.toString()} value={opts.id} > { opts.label}</option>
                                               ))     
                                            }
                                        </MySelect>
                                    )
                               }

                               throw new Error(`El type ${item.type},no es soportado`);
                            })
                        }

                        <button type="submit" >Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
