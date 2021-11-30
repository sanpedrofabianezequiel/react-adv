import React ,{useEffect, useRef, useState} from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product :Product;
    onChange?: (args:onChangeArgs) => void;
    values?:number
}

export const useProduct = ({onChange,product,values= 0}:useProductArgs)=>{


    const [counter, setCounter] = useState<number>(values);
    const isControlled = useRef(!!onChange);//Si existe este componente uso eluseRef

    const increseBy  = (value :number)=>{

        if(isControlled.current){
            return onChange!({ count: value,product});
        }

        const newValue =Math.max( counter + value , 0);
        setCounter(newValue);
        onChange && onChange({product,count:newValue});
    }

    useEffect(() => {
        setCounter(values);     
    }, [values])



    return {
        counter,increseBy
    }
}