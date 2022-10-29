import React, { useContext, useState } from 'react';
import '../styles/pages/ProductPage.scss';
import { Link, useSearchParams } from 'react-router-dom';
// import { ClickedProductContext } from '../contexts/ClickedProductContext';
import { CardProductsContext } from '../contexts/CardProductsContext';

function ProductPage() {
    const { addInCard, removeInCard } = useContext(CardProductsContext);
    const [clickedProduct] = useSearchParams();
    const [isInCard, setIsInCard] = useState(clickedProduct.get('isInCard'));

    const handleClick = (id) => {
        if (!isInCard) {
            addInCard(id);
            setIsInCard(true);
        } else {
            removeInCard(id);
            setIsInCard(false);
        }
    }

    return (
        <div className='container productContainer'>
            <div className="productImage">
                <img src={clickedProduct.get('src')} alt={clickedProduct.get('name')} width='600' height='600' className='image-thumbnails' />
            </div>
            <div className="productName">{clickedProduct.get('name')}</div>
            <div className="productDescription">{clickedProduct.get('description')}</div>
            <div className="endProductCard">
                <button className='btn btn-primary' onClick={() => handleClick(clickedProduct.get('id'))}>
                    {!isInCard ? 'Ajouter au panier' : 'Retirer du panier'}
                </button>
                <Link to='/#products'><button className='btn btn-primary'>voir d'autres produits</button></Link>
            </div>
        </div>
    )
}

export default ProductPage;