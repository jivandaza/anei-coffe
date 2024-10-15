import React, { useContext }                        from 'react';
import { useLocation, useNavigate }                 from 'react-router-dom';
import { FaShoppingCart }                           from 'react-icons/fa';
import { useSelector }                              from 'react-redux';
import Context                                      from '../context';
import ROLE                                         from '../constants/role';
import toastr                                       from "toastr";

const Cart = () => {

    const navigation = useNavigate();
    const location = useLocation();

    const { countProductsOfCart } = useContext(Context);

    const user = useSelector(state => state?.user?.user);

    const hiddenRoutes = ['/login', '/register', '/cart', '/payment/success', '/payment/cancel'];

    if (hiddenRoutes.includes(location.pathname)) {
        return null;
    }

    const handleBtn = () => {
        if (!user) {
            toastr.error('Por favor, debe iniciar sesión');
        } else {
            navigation('/cart');
        }
    };

    return (
        <button
            className={`fixed bottom-4 right-4 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600
            ${user?.role === ROLE.ADMIN ? 'hidden' : ''}`}
            onClick={() => handleBtn()}
            title={'Comprar'}
        >
            <div className='relative -left-1 -bottom-1'>
                <FaShoppingCart size={24} />

                <div className='bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3'>
                    <p className='text-sm'>
                        { countProductsOfCart }
                    </p>
                </div>
            </div>
        </button>
    );
};

export default Cart;