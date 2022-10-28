import React from 'react';
import { Link } from 'react-router-dom';
import cardImage from "../assets/img/cardImg2.jpg";

function WhyUs(props) {
    return (
        <div className='aboutCard WhyUs'>
            <h2>Pourquoi notre choix?</h2>
            <div className='containBox'>
                <img src={cardImage} alt="cardImage" width='400' height='400' />
                <p>
                    A <span className="text-logo">OnlineCom</span>, nous faisons des clients satisfaits. Avec 10 ans d'expérience et 2 ans d'expérience dans le
                    e-commerce, nous founissons des services basées sur l'efficacité et la rapidité de nos livraisons sans oublier la sécurité des payements. Nos
                    services sont satisfaits ou remboursés. Si vous n'avez pas de compte,<Link to='/signIn'>Créez en un </Link>
                    et <Link to='/#products'>effectuez rappidemment des achats</Link>.
                </p>
            </div>
        </div>
    );
}

export default WhyUs;