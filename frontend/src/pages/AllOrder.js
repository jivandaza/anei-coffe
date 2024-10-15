import React, {useEffect, useState}         from 'react';
import { useAuthService }                   from '../services/authService';
import { orderApi }                         from '../common';
import moment                               from 'moment';
import toastr                               from 'toastr';
import displayCOPCurrency from "../helpers/displayCurrency";

const AllOrder = () => {

    const { handleSessionClosed } = useAuthService();

    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const formatNumber = (number) => {
        return (number).toLocaleString('en-CO', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    };

    const fetchOrders = async () => {
        setIsLoading(true);

        const response = await fetch(orderApi.allOrder.url, {
            method: orderApi.allOrder.method,
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok)
            setOrders(data.orders);
        else if (response.status === 500)
            toastr.error(data.error)
        else
            await handleSessionClosed(data.error);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            {
                isLoading && (
                    <section className='flex justify-center items-center h-full'>
                        <span className='loader'></span>
                    </section>
                )
            }
            {
                orders.length === 0 && !isLoading && (
                    <div className='h-full flex justify-center items-center'>
                        <p className='font-bold text-xl'>No existe ningún pedido...</p>
                    </div>
                )
            }
            {
                orders.length !== 0 && (
                    <section className='flex flex-col h-full overflow-y-scroll'>
                        {
                            orders.map((order, index) => {
                                return (
                                    <div key={order?._id + index} className='mb-4'>
                                        <p className='font-medium text-lg'>
                                            {moment(order.createdAt).format('LL')}
                                        </p>
                                        <div className='border rounded p-2'>
                                            <div className='flex flex-col lg:flex-row lg:justify-between'>
                                                <div className='grid gap-1'>
                                                    {
                                                        order?.productDetails?.map((product, index) => {
                                                            return (
                                                                <div key={product?.productId + index} className='flex gap-3 bg-slate-200 py-2 px-4'>
                                                                    <img
                                                                        src={product.images[0]}
                                                                        alt={product?.name}
                                                                        className='h-28 w-28 bg-white object-scale-down p-2'
                                                                    />
                                                                    <div>
                                                                        <p className='font-medium text-lg text-ellipsis line-clamp-1'>{product?.name}</p>
                                                                        <div className='flex items-center gap-5 mt-1'>
                                                                            <p className='text-lg text-red-500'>{displayCOPCurrency(product?.price)}</p>
                                                                            <p>Cantidad: {product?.quantity}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className='flex flex-col lg:flex-row gap-6 py-4'>
                                                    <div>
                                                        <p className='text-lg font-medium'>Detalles de pago</p>
                                                        <p className='text-ellipsis'>Método de pago: {order.paymentDetails.payment_method_types[0] ? 'Tarjeta de Crédito' : ''}</p>
                                                        <p className='text-ellipsis'>Estado de pago: {order.paymentDetails.payment_status ? 'Pagado' : ''}</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-lg font-medium'>Detalles de envío</p>
                                                        {
                                                            order.shipping_options.map((shipping, index) => {
                                                                return (
                                                                    <p key={shipping.shipping_rate} className='text-ellipsis'>
                                                                        Monto del envío: {formatNumber(shipping.shipping_amount)}
                                                                    </p>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='text-lg font-semibold ml-auto w-fit'>
                                                Importe total: {formatNumber(order.totalAmount)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                )
            }
        </>
    );
};

export default AllOrder;
