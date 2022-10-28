import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

function useConnexionIsRequired() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [navigate, user]);

}

export default useConnexionIsRequired;