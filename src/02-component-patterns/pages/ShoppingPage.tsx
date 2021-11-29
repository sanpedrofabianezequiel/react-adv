import React from 'react'
/*import { ProductCard, ProductImage, ProductTitle, ProductButton } from '../components';*/
import { ProductCard } from '../components';
import './custom-styles.css'


const product = {
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            
            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                <ProductCard product={product} className='bg-dark text-white'>
                    <ProductCard.Image />
                    <ProductCard.Title title={''} />
                    <ProductCard.Button className='custom-buttons' />
                </ProductCard>
            </div>
        </div>
    )
}
