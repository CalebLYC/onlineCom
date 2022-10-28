import React from 'react';

function HomeButton() {
    return (
        <div className="homeButton">
            <a href="/#products" role="button"><button className='but'>Voir les produits</button></a>
            <div className="homeButtonContent">
                <div className=" homeButtonCard">
                    <h4>Vêtements</h4>
                    <p>
                        Des vêtements de qualité pour vous rendre élégant et révéler votre beauté intérieure. Des vêtements de tout type, de toute circonstance,  de
                        meilleures qualité à des prix abordables.
                    </p>
                </div>
                <div className=" homeButtonCard">
                    <h4>Chaussures</h4>
                    <p>
                        Divers chaussures dégageant de la classe, adaptés à plusieurs évènements, de toute taille et de toute forme, pour tout le monde.
                        Des chaussures de marque comme des chaussures discrets
                    </p>
                </div>
                <div className=" homeButtonCard">
                    <h4>Sacs</h4>
                    <p>
                        Des sacs de meilleures qualité à prix abordables.Des sacs de marque, des sarcs pour de voyages, des sacs pour les sorties,
                        des sacs standards, des sacs pour tous.
                    </p>
                </div>
                <div className=" homeButtonCard">
                    <h4>Accessoires</h4>
                    <p>
                        Divers types d'accessoires. Des accessoires de cusine, des accessoires informatiques, des accessoires pour le bricolage, des
                        accessoires agricoles, tout type d'accessoires.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeButton;