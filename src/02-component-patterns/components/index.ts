import { ProductCard as ProductHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductButton } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import {  ProductCardHOCProps } from '../interfaces/interfaces';

/*
export { ProductCard } from './ProductCard';
export { ProductImage } from './ProductImage';
export { ProductButton } from './ProductButtons';
export { ProductTitle } from './ProductTitle';*/


export const ProductCard:ProductCardHOCProps = Object.assign(ProductHOC,{
    Title:ProductTitle,
    Image:ProductImage,
    Button: ProductButton
})

export default ProductCard;