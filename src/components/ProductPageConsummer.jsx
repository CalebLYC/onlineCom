import ClickedProductContextProvider from '../contexts/ClickedProductContext';
import ProductPage from '../pages/ProductPage';

function ProductPageConsummer() {
    return (
        <ClickedProductContextProvider>
            <ProductPage />
        </ClickedProductContextProvider>
    );
}

export default ProductPageConsummer;