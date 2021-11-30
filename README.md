# Algoritmo
de filtrado y borrado en Dictionary


export const ShoppingPage = () => {

    const [shoppingCard, setShoppingCard] = useState<{ [key:string]:ProductInCart}>({})


    const onProductCountChange = ({count,product}: {count:number,product:Product})=>{
        //console.log(count,product)

        setShoppingCard( prev => {

            //FORMA DE ELIMINAR UN ELEMENTO 
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
            }
            
        });
    }
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>

            ////////////////////////////

            Object.entries(shoppingCard).map( ([key,value])=>(
                        <ProductCard key={key} product={value} className='bg-dark text-white colum-right'>
                            <ProductCard.Image />
                            <ProductCard.Button className='custom-buttons' />
                        </ProductCard>
                     ))               