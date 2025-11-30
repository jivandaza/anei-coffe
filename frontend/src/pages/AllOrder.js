import React, { useEffect, useState }       from 'react';
import DatePicker                           from 'react-datepicker';
import { useAuthService }                   from '../services/authService';
import { orderApi }                         from '../common';
import displayCOPCurrency                   from '../helpers/displayCurrency';
import moment                               from 'moment';
import toastr                               from 'toastr';
import                                      'react-datepicker/dist/react-datepicker.css';

const AllOrder = () => {

    const { handleSessionClosed } = useAuthService();

    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [selectedActions, setSelectedActions] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [filterOrder, setFilterOrder] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);

    const formatNumber = (number) => {
        return (number).toLocaleString('en-CO', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    };

    const handleOneChange = (e) => setFilterOrder(e.target.value);

    const handleRadioChange = (orderId, value) => {
        setSelectedActions((prevActions) => ({
            ...prevActions,
            [orderId]: value,
        }));
    };

    const fetchOrders = async () => {
        setIsLoading(true);

        const response = await fetch(orderApi.allOrder.url, {
            method: orderApi.allOrder.method,
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok) {
            setOrders(data.orders);
            setFilteredOrders(data.orders);
        } else if (response.status === 500)
            toastr.error(data.error)
        else
            await handleSessionClosed(data.error);

        setIsLoading(false);
    };

    const handleUpdateOrderStatus = async (orderId) => {
        const selectedAction = selectedActions[orderId];

        if (!selectedAction) {
            toastr.error('Debe seleccionar una acción para actualizar el estado.');
            return;
        }

        const response = await fetch(orderApi.updateOrderStatus.url, {
            method: orderApi.updateOrderStatus.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: orderId,
                newStatus: selectedAction
            })
        });

        const { message, error } = await response.json();

        if (response.ok) {
            toastr.success(message);
            await fetchOrders();
        } else if (response.status === 404) {
            toastr.error(error);
        } else {
            handleSessionClosed(error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        const formattedStartDate = moment(startDate).format('LL');

        const filtered = orders.filter(order =>
            moment(order.createdAt).format('LL') === formattedStartDate
        );

        setFilteredOrders(filtered);
    }, [startDate]);

    useEffect(() => {
        const filtered = orders.filter(order =>
            order.email.toLowerCase().includes(filterOrder.toLowerCase())
        );

        setFilteredOrders(filtered);
    }, [filterOrder]);

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
            <section className='flex flex-col h-full'>
                <div className='flex flex-row justify-between items-center py-2'>
                    <div className='flex flex-row items-center gap-2 w-4/12 px-2'>
                        <label
                            htmlFor="email"
                        >Buscar:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Ingresar correo electronico'
                            value={filterOrder}
                            onChange={handleOneChange}
                            className='p-2 border rounded-md bg-slate-100 outline-slate-400 w-full'
                        />
                    </div>
                    <div className='px-2'>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            className="p-2 border rounded-md w-full"
                        />
                    </div>
                </div>
                {
                    filteredOrders.length !== 0 && (
                        <section className='flex flex-col h-full overflow-y-scroll'>
                            {
                                filteredOrders.map((order, index) => {
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
                                                                        <div className='h-fix'>
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
                                                    <div className='flex-grow flex-row lg:flex-col gap-3 py-4'>
                                                        <div className='flex flex-col lg:flex-row lg:justify-between gap-6 px-8'>
                                                            <div className='flex flex-col gap-2'>
                                                                <b className='text-lg'>DETALLES DE PAGO</b>
                                                                <p className='text-ellipsis'><p className='font-medium inline'>Método:</p> {order.paymentDetails.payment_method_types[0] ? 'Tarjeta de Crédito' : ''}</p>
                                                                <p className='text-ellipsis'><p className='font-medium inline'>Estado:</p> {order.paymentDetails.payment_status ? 'Pagado' : ''}</p>
                                                            </div>
                                                            <div className='flex flex-col gap-2'>
                                                                <b className='text-lg'>DETALLES DE ENVÍO</b>
                                                                <p className='text-ellipsis'><p className='font-medium inline'>Email:</p> {order.email}</p>
                                                                {
                                                                    order.shipping_options.map((shipping, index) => {
                                                                        return (
                                                                            <p key={shipping.shipping_rate} className='text-ellipsis'>
                                                                                <p className='font-medium inline'>Monto:</p> {formatNumber(shipping.shipping_amount)}
                                                                            </p>
                                                                        )
                                                                    })
                                                                }
                                                                <p className='text-ellipsis'><p className='font-medium inline'>Ciudad:</p> {order?.city}</p>
                                                                <p className='text-ellipsis'><p className='font-medium inline'>Dirección:</p> {order?.address}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-row justify-start px-8'>
                                                            <div className='flex flex-col gap-2'>
                                                                <b className='text-lg'>ESTADO DE ENVÍO</b>
                                                                {
                                                                    order.status === 'processing' && (
                                                                        <>
                                                                            <div className="flex items-center space-x-4">
                                                                                <label className="flex items-center">
                                                                                    <input
                                                                                        type="radio"
                                                                                        name={`action-${order._id}`}
                                                                                        checked={selectedActions[order._id] === 'sent'}
                                                                                        onChange={() => handleRadioChange(order._id, 'sent')}
                                                                                        defaultChecked
                                                                                        className="mr-2"
                                                                                    />
                                                                                    Enviar
                                                                                </label>
                                                                                <label className="flex items-center">
                                                                                    <input
                                                                                        type="radio"
                                                                                        name={`action-${order._id}`}
                                                                                        checked={selectedActions[order._id] === 'cancelled'}
                                                                                        onChange={() => handleRadioChange(order._id, 'cancelled')}
                                                                                        className="mr-2"
                                                                                    />
                                                                                    Cancelar
                                                                                </label>
                                                                            </div>
                                                                            <button
                                                                                className="px-4 py-2 bg-blue-500 text-white rounded-md w-fit"
                                                                                onClick={() => handleUpdateOrderStatus(order._id)}
                                                                            >
                                                                                Aceptar
                                                                            </button>
                                                                        </>
                                                                    )
                                                                }
                                                                {
                                                                    order.status === 'cancelled' && (
                                                                        <p className='text-ellipsis py-1 px-2 bg-red-600 text-white w-fit rounded-md select-none'>
                                                                            Cancelado
                                                                        </p>
                                                                    )
                                                                }
                                                                {
                                                                    order.status === 'sent' && (
                                                                        <p className='text-ellipsis py-1 px-2 bg-yellow-600 text-white w-fit rounded-md select-none'>
                                                                            Enviado
                                                                        </p>
                                                                    )
                                                                }
                                                                {
                                                                    order.status === 'received' && (
                                                                        <p className='text-ellipsis py-1 px-2 bg-green-600 text-white w-fit rounded-md select-none'>
                                                                            Recibido
                                                                        </p>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row justify-end py-2'>
                                                    <p className='text-lg font-semibold w-fit'>
                                                        Importe total: {formatNumber(order.totalAmount)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    )
                }
            </section>
        </>
    );
};

export default AllOrder;