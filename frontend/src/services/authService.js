import { useContext  }      from 'react';
import { useDispatch }      from 'react-redux';
import { useNavigate }      from 'react-router-dom';
import { setUserData }      from '../store/userSlice';
import { authApi     }      from '../common';
import Context              from '../context';
import toastr               from 'toastr';

export const useAuthService = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { fetchCountProductsToCart, setShowUserGeneralComponent } = useContext(Context);

    const handleLogout = async () => {
        const response = await fetch(authApi.logout.url, {
            method: authApi.logout.method,
            credentials: 'include',
        });

        const {message, error} = await response.json();

        if (response.ok) {
            await handleSessionClosed(message);
        } else
            toastr.error(error);
    };

    const handleSessionClosed = async (message) => {
        dispatch(setUserData(null));
        await fetchCountProductsToCart();
        setShowUserGeneralComponent(true);
        toastr.info(message);
        navigation('/');
    }

    return {
        handleLogout,
        handleSessionClosed
    };
};