import React, {useContext, useEffect} from 'react';
import { Link }                     from 'react-router-dom';
import imgSuccess                   from '../assets/payment/success.gif';
import Context                      from '../context';

const PaymentSuccess = () => {

    const { fetchCountProductsToCart } = useContext(Context);

    useEffect(() => {
        fetchCountProductsToCart();
    }, []);

    return (
        <div className='h-[80vh] w-full flex flex-col justify-center items-center gap-3 mx-auto'>
            <img src={imgSuccess} width={200} height={200} />
            <p className='text-green-600 font-bold text-xl'>Pago Realizado con Éxito</p>
            <Link
                to='/order'
                className='p-2 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'
            >Mis Compras</Link>
        </div>
    );
};

export default PaymentSuccess;
