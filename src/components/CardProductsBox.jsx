import React, { useContext } from 'react';
import { CardProductsContext } from '../contexts/CardProductsContext';
import ProductsBox from './ProductsBox';

function CardProductsBox() {
    const { cardProducts } = useContext(CardProductsContext);
    return (
        <>
            <h3>Produits ajoutés au panier</h3>
            <ProductsBox products={cardProducts} />
        </>
    );
}

export default CardProductsBox;