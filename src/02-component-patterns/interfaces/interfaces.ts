import { ReactElement } from "react";
import { ProductCardProps } from "../components/ProductCard";



export interface Product {
    id:string;
    title:string;
    img?:string
}

export interface ProductContextProps {
    counter:number;
    increseBy: (value:number)=>void;
    product:Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title:({ title }: { title?: string | undefined; }) => JSX.Element,
    Image:({ img }: { img?: string | undefined; }) => JSX.Element,
    Button:({className}:{className?:string}) => JSX.Element
}

export interface onChangeArgs {
    product:Product;
    count:number
}


export interface ProductInCart extends Product {
    counter:number
}

