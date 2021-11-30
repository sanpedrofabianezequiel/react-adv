import React, { useState } from 'react'
/*import { ProductCard, ProductImage, ProductTitle, ProductButton } from '../components';*/
import { ProductCard } from '../components';
import { Product } from '../interfaces/interfaces';

import './custom-styles.css'
import {products} from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';





export const ShoppingPage = () => {

   const {shoppingCard,onProductCountChange} = useShoppingCart();


      
   
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            
            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>



                {
                    //eL VALUE ES el del producto.counter SI existe
                    products.map((item, index)=>(
                        <ProductCard values={ shoppingCard[item.id]?.counter || 0 } key={item.id} product={item}
                         className='bg-dark text-white'
                         onChange={(e)=> onProductCountChange(e)} >
                            <ProductCard.Image />
                            <ProductCard.Title />
                            <ProductCard.Button className='custom-buttons' />
                        </ProductCard>
                    ))
                }
               
              

            </div>


            <div className="shopping-cart ">
                {
                     Object.entries(shoppingCard).map( ([key,value])=>(
                        <ProductCard values={value.counter} key={key} product={value} 
                        className='bg-dark text-white colum-right'
                        onChange={(e)=> onProductCountChange(e)} 
                        >
                            <ProductCard.Image />
                            <ProductCard.Button className='custom-buttons margin-bottons ' />
                        </ProductCard>
                     ))                  
                }
            </div>

        </div>
    )
}
