import '../styles/pages/panier.scss';
import CardProductsBox from '../components/CardProductsBox';
import CardProductsPrice from '../components/CardProductsPrice';
import useConnexionIsRequired from '../hooks/useConnexionIsRequired';

function Panier(props) {
    useConnexionIsRequired();
    return (
        <div>
            <CardProductsBox />
            <CardProductsPrice />
        </div>
    );
}

export default Panier;