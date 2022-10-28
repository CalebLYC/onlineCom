import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const toggleUser = useCallback((state = null) => {
        setUser(state);

    }, [setUser]);
    const value = useMemo(function () {
        return { user, toggleUser };
    }, [user, toggleUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;