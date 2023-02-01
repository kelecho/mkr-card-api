import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';



export const Products = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
      const handleRequest = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      };

      handleRequest();
 
      return () => {
        console.log('Unmounted');
      }
    }, [])
    

    return (
    <>
        <h2>Lista de Productos</h2>
        {   products.map( ({ id, image, title, description, price }) => <ProductCard 
                                    key={id} 
                                    title={title} 
                                    description={description}
                                    image={image}
                                    price={price}  
                                    />) 
        }
    </>
    
  )
}
