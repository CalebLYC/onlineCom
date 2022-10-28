import { createContext, useCallback, useMemo, useState } from "react";

export const ClickedProductContext = createContext();

function ClickedProductContextProvider({ children }) {
    const [clickedProduct, setClickedProduct] = useState({});
    const [aProductIsClicked, setAProductIsClicked] = useState(false);

    const clickedAProduct = useCallback((product) => {
        setClickedProduct(product);
    }, [setClickedProduct]);
    const toggleAProductIsClicked = useCallback((state = true) => {
        setAProductIsClicked(state);
    }, [setAProductIsClicked]);
    const value = useMemo(function () {
        return { clickedProduct, clickedAProduct, aProductIsClicked, toggleAProductIsClicked };
    }, [clickedProduct, clickedAProduct, aProductIsClicked, toggleAProductIsClicked]);

    return (
        <ClickedProductContext.Provider value={value}>
            {children}
        </ClickedProductContext.Provider>
    );
}

export default ClickedProductContextProvider;