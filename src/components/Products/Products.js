import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product{...products[product.id - 1]} key={product.id}/>)}; 
    
    </section>
  );
  
};

export default Products;