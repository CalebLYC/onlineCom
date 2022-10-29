import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardProductsContext } from '../contexts/CardProductsContext';

function Product({ product }) {
    const [isInCard, setIsInCard] = useState(product.isInCard);
    const { addInCard, removeInCard } = useContext(CardProductsContext);

    function handleCard(id) {
        if (!isInCard) {
            addInCard(id);
            setIsInCard(true);
        } else {
            removeInCard(id);
            setIsInCard(false);
        }
    }

    return (
        <div className="product" >
            <Link to={`/product?id=${product.id}&src=${product.src}&name=${product.name}&description=${product.description}&isInCard=${isInCard}`}>
                <img src={product.src} alt={product.name} width='400' height='400' className='image-thumbnails' />
            </Link>
            <p> Nom: {product.name}</p>
            <p>Price: <span className='underlined'>{product.oldPrice}frs</span> {product.newPrice}frs</p>
            <button className='but' onClick={(e) => handleCard(product.id)} >
                {!isInCard ? "Ajouter au panier" : "Retirer du panier"}
            </button>
        </div >
    );
}

export default Product;