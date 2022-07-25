import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product{...products[product.id - 1]} key={product.id}/>)}; {/* nie umiem wyjasnic dokladniejak działa Product{...products[0]}, jak dodac dodatkowy parametr key */}
    
    </section>
  );
  
};

export default Products;