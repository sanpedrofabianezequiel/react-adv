import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart =()=>{

    const [shoppingCard, setShoppingCard] = useState<{ [key:string]:ProductInCart}>({})


    const onProductCountChange = ({count,product}: {count:number,product:Product})=>{
        //console.log(count,product)

        setShoppingCard( prev => {

            const prodoductInCard : ProductInCart = prev[product.id] || {...product,counter:0};

            if( Math.max( prodoductInCard.counter + count , 0) > 0){
                prodoductInCard.counter += count;
                return {
                    ...prev,
                    [product.id]:prodoductInCard
                }
            }


            const {  [product.id]:toDelte, ...rest} =prev;
            return {...rest};



           /* //FORMA DE ELIMINAR UN ELEMENTO 
            // useState<{ [key:string]:ProductInCart}>({})
            if(count === 0){
                //Extraigo la propiedad del objeto como estba que MACHE CON ELID [] y mando el resto de props;
                const { [product.id]:toDelete, ...rest } = prev;


                return {
                    ...rest
                }
            }    

            //Retorna el valor anterior mas el nuevo counter en el ID
            //asignamos el nuevo valor
            return {
                ...prev,
                [product.id] : {...product,counter:count}    
            }*/
            
        });
    }


    return {
        shoppingCard,
        onProductCountChange
    }
}

