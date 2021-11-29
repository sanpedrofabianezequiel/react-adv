import { useContext } from "react";
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    className?:string;
}


export const ProductButton = ({className}:Props)=>{

    const {counter,increseBy} = useContext(ProductContext);

    return (
        <div className={ `${styles.buttonsContainer} ${className} `} >
            <button className={styles.buttonMinus} onClick={()=>increseBy(-1)} > - </button>
            <div className={styles.countLabel}>
                    {counter}
            </div>

            <button className={styles.buttonAdd} onClick={()=> increseBy( + 1)} > + </button>
        </div>
    )
}