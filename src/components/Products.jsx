import React from 'react';
import ProductBox from './ProductBox';

function Products(props) {
    return (
        <div className='products' id='products'>
            <h2>Produits</h2>
            <ProductBox />
        </div>
    );
}

export default Products;