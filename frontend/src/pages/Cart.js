import React, {
    useContext,
    useEffect,
    useState
}                               from 'react';
import OrderLocation            from '../components/OrderLocation';
import { MdDelete }             from 'react-icons/md';
import { cartApi }              from '../common';
import { useAuthService }       from '../services/authService';
import displayCOPCurrency       from '../helpers/displayCurrency';
import Context                  from '../context';
import toastr                   from 'toastr';

const Cart = () => {

    const { fetchCountProductsToCart } = useContext(Context);
    const { handleSessionClosed } = useAuthService();

    const loadingCart = new Array(3).fill(null);

    const [showLocationOrder, setShowLocationOrder] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let totalQty = 0;
    let totalPrice = 0;

    const fetchAllProductsToCart = async () => {
        setIsLoading(true);

        const response = await fetch(cartApi.allProductsToCart.url, {
            method: cartApi.allProductsToCart.method,
            credentials: 'include'
        });

        const { productsToCart, error } = await response.json();

        if (response.ok)
            setData(productsToCart);
        else if (response.status === 500)
            toastr.eeror(error);
        else
            handleSessionClosed(error);

        setIsLoading(false);
    };

    const handleEditQuantityToCart = async (e, id, qty) => {
        const buttonText = e?.target?.textContent || e?.target?.innerText;

        if (buttonText === "+" || (buttonText === "-" && qty > 1)) {
            const quantity = buttonText === "+" ? qty + 1 : qty - 1;

            const response = await fetch(cartApi.editQuantityToCart.url,{
                method : cartApi.editQuantityToCart.method,
                credentials : 'include',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(
                    {
                        cartId : id,
                        quantity
                    }
                )
            });

            // Verificar si el contenido de la respuesta es JSON
            const contentType = response.headers.get('content-type');
            let data;

            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            if (response.ok)
                await fetchAllProductsToCart();
            else if (response.status === 404) {
                toastr.error(data.error);
                await fetchAllProductsToCart();
            } else if (response.status === 500)
                toastr.error(data.error);
            else
                handleSessionClosed(data.error);
        }
    }

    const handleDeleteProductToCart = async (id) => {
        const response = await fetch(`${cartApi.deleteProductToCart.url}/${id}`,{
            method : cartApi.deleteProductToCart.method,
            credentials : 'include',
            headers : {
                'content-type' : 'application/json'
            }
        });

        // Verificar si el contenido de la respuesta es JSON
        const contentType = response.headers.get('content-type');
        let data;

        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        if (response.ok){
            await fetchAllProductsToCart();
            await fetchCountProductsToCart();
        } else if (response.status === 404) {
            toastr.error(data.error);
            await fetchAllProductsToCart();
        } else if (response.status === 500)
            toastr.error(data.error);
        else
            handleSessionClosed(data.error);
    };

    useEffect(() => {
        fetchAllProductsToCart();
    }, []);

    totalQty = data?.reduce((previousValue, currentValue) => previousValue + currentValue?.quantity, 0);
    totalPrice = data?.reduce((previousValue, currentValue) => previousValue + (currentValue?.quantity * currentValue?.productId?.price) ,0);

    return (
        <div className='container mx-auto min-h-[80vh]'>
            {
                isLoading && (
                    <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                        <div className='w-full max-w-3xl'>
                            {
                                loadingCart.map((item, index) => {
                                    return (
                                        <div className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse' key={'loading'+index}>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-5 lg:mt-2 w-full max-w-sm'>
                            <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                !isLoading && data.length === 0 && (
                    <div className='flex justify-center items-center h-[calc(93vh-85px)]'>
                        <p className='text-lg font-medium'>No hay productos agregados...</p>
                    </div>
                )
            }
            {
                !isLoading && data.length !== 0 && (
                    <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                        <div className='w-full max-w-3xl'>
                            {
                                data.map(item => {
                                    return (
                                        <div className='w-full bg-white h-36 sm:h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]' key={item?._id}>
                                            <div className='w-32 h-36 sm:h-32 bg-slate-200'>
                                                <img src={item?.productId?.image[0]} className='w-full h-full object-scale-down mix-blend-multiply' alt={item?.productId?.name} />
                                            </div>
                                            <div className='px-4 py-2 relative'>
                                                <div
                                                    className='absolute right-2 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer'
                                                    onClick={()=> handleDeleteProductToCart(item?._id)}
                                                >
                                                    <MdDelete/>
                                                </div>

                                                <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{item?.productId?.name}</h2>

                                                <div className='sm:flex items-center justify-between'>
                                                    <p className='text-red-600 font-medium text-sm sm:text-lg'>{displayCOPCurrency(item?.productId?.price)}</p>
                                                    <p className='text-slate-600 font-semibold text-sm sm:text-lg'>{displayCOPCurrency(item?.productId?.price * item?.quantity)}</p>
                                                </div>

                                                <div className='flex items-center gap-3 mt-1'>
                                                    <button
                                                        onClick={(e)=> handleEditQuantityToCart(e, item?._id, item?.quantity)}
                                                        className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'
                                                    >
                                                        -
                                                    </button>
                                                    <span>{item?.quantity}</span>
                                                    <button
                                                        onClick={(e)=> handleEditQuantityToCart(e, item?._id, item?.quantity)}
                                                        className='border border-green-600 text-green-600 hover:bg-green-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            data[0] && (
                                <div className='mt-5 lg:mt-2 w-full max-w-sm'>
                                    <div className='h-36 bg-white'>

                                        <h2 className='text-center uppercase text-white bg-[#593d2b] py-1'>
                                            Resumen
                                        </h2>

                                        <div className='flex items-center justify-between gap-2 px-4 font-medium text-lg text-slate-600'>
                                            <p>Cantidad</p>
                                            <p>{totalQty}</p>
                                        </div>

                                        <div className='flex items-center justify-between gap-2 px-4 font-medium text-lg text-slate-600'>
                                            <p>Precio Total</p>
                                            <p>{displayCOPCurrency(totalPrice)}</p>
                                        </div>

                                        <div className='px-4'>
                                            <button
                                                className='bg-blue-600 p-2 text-white w-full mt-2 font-bold rounded-full hover:bg-blue-700'
                                                onClick={() => setShowLocationOrder(true)}
                                            >
                                                Realizar Compra
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }

            {
                showLocationOrder && (
                    <OrderLocation
                        onClose={() => setShowLocationOrder(false)}
                        cartItems={data}
                    />
                )
            }
        </div>
    );
};

export default Cart;
