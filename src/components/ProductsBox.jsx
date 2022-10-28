import React from 'react';
import ClickedProductContextProvider from '../contexts/ClickedProductContext';
import Product from './Product';

function ProductsBox({ products }) {
    return (
        <div className="productBox">
            {
                products.length !== 0 ?
                    products.map(product => {
                        return (
                            <ClickedProductContextProvider key={product.id}>
                                <Product product={product} />
                            </ClickedProductContextProvider>
                        )
                    }) : <div className='only'>Aucun produit disponible</div>
            }
        </div>
    );
}

export default ProductsBox;