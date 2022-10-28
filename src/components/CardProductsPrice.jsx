import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardProductsContext } from '../contexts/CardProductsContext';

function CardProductsPrice() {
    const [totalPrice, setTotalPrice] = useState(0);
    // let totalPrice = 0;
    const { cardProducts } = useContext(CardProductsContext);
    useEffect(() => {
        cardProducts.map(product => setTotalPrice(p => p + product.newPrice));
        // cardProducts.map(product => totalPrice += product.newPrice);
    }, [cardProducts, setTotalPrice]);

    return (
        <div className='cardProductPrice'>
            <p className='pricePara'>Prix total: <span className='price'>{totalPrice}frs</span></p>
            <button className='but'>Procéder au payement</button>
            <p><Link to='/#products'>Ajouter d'autres produits</Link></p>
        </div>
    );
}

export default CardProductsPrice;