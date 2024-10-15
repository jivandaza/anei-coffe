import React                        from 'react';
import { Link }                     from 'react-router-dom';
import imgCancel                    from '../assets/payment/cancel.gif';

const PaymentCancel = () => {
    return (
        <div className='h-[80vh] w-full flex flex-col justify-center items-center gap-3 mx-auto'>
            <img src={imgCancel} width={200} height={200} />
            <p className='text-red-600 font-bold text-xl'>Pago Cancelado</p>
            <Link
                to='/cart'
                className='p-2 mt-5 border-2 border-red-600 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white'
            >Regresar</Link>
        </div>
    );
};

export default PaymentCancel;
