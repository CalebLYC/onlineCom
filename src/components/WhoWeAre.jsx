import React from 'react';
import { Link } from 'react-router-dom';
import cardImage from "../assets/img/cardImg1.jpg";

function WhoWeAre(props) {
    return (
        <div className='WhoWeAre aboutCard'>
            <h2>Qui sommes nous?</h2>
            <div className='containBox'>
                <img src={cardImage} alt="cardImage" width='400' height='400' />
                <p>
                    <span className="text-logo">OnlineCom</span> est une entreprise spécialisée dans le comerce avec plus de 10 ans d'expérience. Nous vendons
                    divers produits comme Vêtements, sacs, chaussures,... accessoires et leurs produits dérivés  à des prix très abordables.
                    L'entreprise physique de OnlineCom se trouve à Lomé dans le quartier de Djidjole. Abonnez-vous à notre newsletter pour
                    être informé des nouveautés et être notifié lors de la publication de nouveaux produits. Si vous n'avez pas de compte,<Link to='/signIn'>Créez en un </Link>
                    et <Link to='/#products'>effectuez rappidemment des achats</Link>.
                </p>
            </div>
        </div>
    );
}

export default WhoWeAre;