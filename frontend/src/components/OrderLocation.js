import React, {useEffect, useState} from 'react';
import {useAuthService} from "../services/authService";
import {IoMdClose} from "react-icons/io";
import toastr                               from 'toastr';
import {loadStripe} from "@stripe/stripe-js";
import {orderApi} from "../common";

const OrderLocation = ({
    onClose,
    cartItems
}) => {

    const { handleSessionClosed } = useAuthService();

    const [data, setData] = useState({
        city: '',
        address: '',
        zipCode: '',
    });
    const [city, setCity] = useState([]);

    const handleOneChange = (e) => {
        const { name, value } = e.target;

        setData((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            }
        });
    };

    const fetchApiCity = async () => {
        const res = await fetch(
            'https://api-colombia.com/api/v1/Department', {
                method: 'GET'
            }
        )

        const data = await res.json();

        if (res.ok) {
            setCity(data);
        }
    }

    const handlePayment = async (e) => {
        e.preventDefault();

        if (data.city === '') {
            toastr.error('La ciudad es obligatoria')
        } else if (data.address === '') {
            toastr.error('La dirección es obligatoria')
        } else if (data.zipCode === '') {
            toastr.error('El código postal es obligatorio')
        } else {
            const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

            const response = await fetch(orderApi.paymentOrder.url,{
                method : orderApi.paymentOrder.method,
                credentials : 'include',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    cartItems,
                    locationDetails: data
                })
            });

            const dataResponse = await response.json();

            if (dataResponse?.id)
                await stripePromise.redirectToCheckout({sessionId: dataResponse.id});
            else if (response.status === 500)
                toastr.error(dataResponse.error);
            else
                await handleSessionClosed(dataResponse.error);
        }
    }

    useEffect(() => {
        fetchApiCity();
    }, []);

    return (
        <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 letf-0 right-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 shadow-md rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden pb-12'>
                <div className='relative flex items-center pt-2 pb-4'>
                    <h2 className='text-center text-lg font-semibold w-full'>Ubicación de compra</h2>
                    <button className='absolute -right-2 -top-2 p-0.5 text-red-600 text-lg rounded-full hover:bg-red-600 hover:text-white' onClick={onClose}>
                        <IoMdClose />
                    </button>
                </div>

                <form onSubmit={(e) => handlePayment(e)} className='grid p-4 h-full pb-8'>
                    <label
                        htmlFor="city"
                    >Ciudad:</label>
                    <select
                        id='city'
                        name='city'
                        className='mb-4 p-2 border rounded-md bg-slate-100 outline-slate-400 cursor-pointer custom-select'
                        value={data.city}
                        onChange={handleOneChange}
                    >
                        <option value="">Seleccionar ciudad</option>
                        {
                            city.length !== 0 && (
                                city.map((item, index) => {
                                    return (
                                        <option
                                            value={item.cityCapital.name}
                                            key={item.cityCapitalId+index}
                                        >{item.cityCapital.name}</option>
                                    )
                                })
                            )
                        }
                    </select>

                    <label
                        htmlFor="address"
                    >Dirección:</label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        value={data.address}
                        onChange={handleOneChange}
                        className='mb-4 p-2 border rounded-md bg-slate-100 outline-slate-400'
                    />

                    <label
                        htmlFor="zipCode"
                    >Código Postal:</label>
                    <input
                        type='number'
                        id='zipCode'
                        name='zipCode'
                        value={data.zipCode}
                        onChange={handleOneChange}
                        className='mb-4 p-2 border rounded-md bg-slate-100 outline-slate-400'
                    />

                    <button
                        className='w-1/2 mx-auto mt-6 px-3 py-2 bg-blue-600 font-semibold text-white hover:bg-blue-700'
                        onClick={(e) => handlePayment(e)}
                    >Continuar Compra</button>
                </form>
            </div>
        </div>
    );
};

export default OrderLocation;
