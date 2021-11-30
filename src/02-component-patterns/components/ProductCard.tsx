import React,{createContext, ReactElement, useContext, useState} from 'react'
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';


export interface ProductCardProps {
    product:Product;
    children?:  ReactElement | ReactElement[];
    className?:string;
    onChange?: (ars:onChangeArgs)=>void;
    values?:number;
}


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children,product,className,onChange,values} :ProductCardProps) => {

    
    const {counter,increseBy} = useProduct({onChange,product ,values });

    return (
        <Provider value={{ counter,increseBy ,product} }>
            <div className={`${styles.productCard} ${className}`}>
                    
                    {/*<ProductImage img={product.img}/>
                    <ProductTitle title={product.title} />
                    <ProductButton counter={counter} increseBy={increseBy} />
                    */}
                    {
                        children
                    }

                </div>
        </Provider>
        
    )
}



