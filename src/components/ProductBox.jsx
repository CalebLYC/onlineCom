import product1 from '../assets/img/products/IMG1.jpg';
import product2 from '../assets/img/products/IMG2.jpg';
import product3 from '../assets/img/products/IMG3.jpg';
import product4 from '../assets/img/products/IMG4.jpg';
import product5 from '../assets/img/products/IMG5.jpg';
import product6 from '../assets/img/products/IMG6.jpg';
import product7 from '../assets/img/products/IMG7.jpg';
import product8 from '../assets/img/products/IMG8.jpg';
import product9 from '../assets/img/products/IMG9.jpg';
import product10 from '../assets/img/products/IMG10.jpg';
import product11 from '../assets/img/products/IMG11.jpg';
import product12 from '../assets/img/products/IMG12.jpg';
import product13 from '../assets/img/products/IMG13.png';
import product14 from '../assets/img/products/IMG14.png';
import product15 from '../assets/img/products/IMG15.jpg';
import jordanLV from '../assets/img/products/Jordan1.png';
import jordan from '../assets/img/products/JordanLV.png';
import runner from '../assets/img/products/Runner.png';
import airMag from '../assets/img/products/AirMag.png';

import ProductsBox from './ProductsBox';
import { Link } from 'react-router-dom';


function ProductBox() {
    const products = [
        {
            id: 1,
            src: product1,
            name: "Sac 1",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: true
        },
        {
            id: 2,
            src: product2,
            name: "Sac 2",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: true
        }, {
            id: 3,
            src: product3,
            name: "Sac 3",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: false
        }, {
            id: 4,
            src: product4,
            name: "Sac 4",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: false
        }, {
            id: 5,
            src: product5,
            name: "Sac 5",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: false
        }, {
            id: 6,
            src: product6,
            name: "Sac 6",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: false
        }, {
            id: 7,
            src: product7,
            name: "Sac 7",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: false
        }, {
            id: 8,
            src: product8,
            name: "Sac 8",
            oldPrice: 125000,
            newPrice: 105000,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: false
        }, {
            id: 9,
            src: product9,
            name: "Sac 9",
            oldPrice: 32500,
            newPrice: 30500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "sac",
            isInCard: false
        }, {
            id: 10,
            src: product10,
            name: "Tablette",
            oldPrice: 225000,
            newPrice: 215000,
            description: "Un ordinateur portable puissant destiné aux traveaux proffessionnels, à la programmation et au gamin.",
            category: "accessoire",
            isInCard: false
        }, {
            id: 11,
            src: product11,
            name: "Pot de fleur",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "accessoire",
            isInCard: false
        }, {
            id: 12,
            src: product12,
            name: "Ordinateur portable",
            oldPrice: 2500,
            newPrice: 1500,
            description: "Un super sac pour les sorties entre filles, les évènements importants, les soirées. Ce sac est fait pour vous transcender et vous rendre plus élégant.",
            category: "accessoire",
            isInCard: false
        }, {
            id: 13,
            src: product13,
            name: "Chaussure 1",
            oldPrice: 25300,
            newPrice: 21550,
            description: "Une chaussure pour les sorties, chausure de marque pour vous imposer.",
            category: "chausure",
            isInCard: false
        }, {
            id: 14,
            src: product14,
            name: "Chaussure 2",
            oldPrice: 25300,
            newPrice: 21550,
            description: "Une chaussure pour les sorties, chausure de marque pour vous imposer.",
            category: "chausure",
            isInCard: false
        }, {
            id: 15,
            src: product15,
            name: "Stylo",
            oldPrice: 1000,
            newPrice: 750,
            description: "Un très bon stylo.",
            category: "accessoire",
            isInCard: true
        }, {
            id: 16,
            src: product13,
            name: "Chaussure 1",
            oldPrice: 25300,
            newPrice: 21550,
            description: "Une chaussure pour les sorties, chausure de marque pour vous imposer.",
            category: "chausure",
            isInCard: false
        }, {
            id: 17,
            src: product13,
            name: "Chaussure 1",
            oldPrice: 25300,
            newPrice: 21550,
            description: "Une chaussure pour les sorties, chausure de marque pour vous imposer.",
            category: "chausure",
            isInCard: false
        }, {
            id: 18,
            src: jordan,
            name: "Chaussure Jordan",
            oldPrice: 25300,
            newPrice: 21550,
            description: "Une chaussure pour les sorties, chausure de marque pour vous imposer.",
            category: "chausure",
            isInCard: false
        }, {
            id: 19,
            src: jordanLV,
            name: "Chaussure Jordan LV",
            oldPrice: 25300,
            newPrice: 21550,
            description: "Une chaussure pour les sorties, chausure de marque pour vous imposer.",
            category: "chausure",
            isInCard: true
        }, {
            id: 20,
            src: airMag,
            name: "Chaussure Air Mag",
            oldPrice: 25300,
            newPrice: 21550,
            description: "Une chaussure pour les sorties, chausure de marque pour vous imposer.",
            category: "chausure",
            isInCard: false
        }, {
            id: 21,
            src: runner,
            name: "Chaussure Runner",
            oldPrice: 15800,
            newPrice: 13250,
            description: "Une chaussure pour courrir, faire du sport.",
            category: "chausure",
            isInCard: false
        },
    ]

    return (
        <>
            <ProductsBox products={products} />
            <Link to='/panier'><button className='consulBut'>Consulter le panier</button></Link>
        </>
    );
}

export default ProductBox;