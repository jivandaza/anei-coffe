import                                           './App.css';
import                                           'toastr/build/toastr.min.css';
import React, { useEffect, useState }       from 'react';
import { Outlet }                           from 'react-router-dom';
import { useDispatch, useSelector }         from 'react-redux';
import Header                               from './components/Header';
import Footer                               from './components/Footer';
import Cart                                 from './components/Cart';
import Loader                               from './components/Loader';
import ScrollTop                            from './components/ScrollTop';
import { setUserData }                      from './store/userSlice';
import { userApi, cartApi }                 from './common';
import Context                              from './context/index';
import ROLE                                 from './constants/role';
import toastr                               from 'toastr';

function App() {

    const dispatch = useDispatch();

    const user = useSelector(state => state?.user?.user);

    const [isLoading, setIsLoading] = useState(true);
    const [countProductsOfCart, setCountProductsOfCart] = useState(0);
    const [showUserGeneralComponent, setShowUserGeneralComponent] = useState(true);

    const fetchUserData = async () => {
        setIsLoading(true);

        const response = await fetch(userApi.getUser.url, {
            method: userApi.getUser.method,
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok)
            dispatch(setUserData(data.user));
        else if (response.status === 500)
            toastr.error(data.error);

        setIsLoading(false);
    };

    const fetchCountProductsToCart = async () => {
        const response = await fetch(cartApi.countProductsToCart.url, {
            method: cartApi.countProductsToCart.method,
            credentials: 'include'
        });

        const data = await response.json()

        if (response.ok)
            setCountProductsOfCart(data?.count);
        else
            setCountProductsOfCart(0);
    };

    useEffect(() => {
        /**     Toastr Options     */
        toastr.options = {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-left',
            preventDuplicates: true,
            timeOut: 3000
        };

        fetchCountProductsToCart();
        fetchUserData();
    }, []);

    useEffect(() => {
        if (user){
            setShowUserGeneralComponent(user?.role === ROLE.GENERAL);
        }
    }, [user]);

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <Context.Provider value={{
                        fetchUserData,
                        fetchCountProductsToCart,
                        countProductsOfCart,
                        isLoading,
                        setShowUserGeneralComponent
                    }} >
                        <ScrollTop />

                        {
                            showUserGeneralComponent && (
                                <Header />
                            )
                        }

                        <main>
                            <Outlet />
                        </main>

                        {
                            showUserGeneralComponent && (
                                <Cart />
                            )
                        }

                        {
                            showUserGeneralComponent && (
                                <Footer />
                            )
                        }
                    </Context.Provider>
                )
            }
        </>
    );
}

export default App;