import React, { useContext, useEffect, useRef, useState }       from 'react';
import { Link }                                                 from 'react-router-dom';
import { useSelector }                                          from 'react-redux';
import { FaAngleLeft, FaAngleRight }                            from 'react-icons/fa';
import { IoMdCart }                                             from 'react-icons/io';
import { useAuthService }                                       from '../services/authService';
import { productApi }                                           from '../common';
import displayCOPCurrency                                       from '../helpers/displayCurrency';
import addToCart                                                from '../helpers/addToCart';
import Context                                                  from '../context';
import toastr                                                   from 'toastr';

const VerticalCardProduct = () => {

    const { handleSessionClosed } = useAuthService();

    const user = useSelector(state => state?.user?.user);

    const scrollElement = useRef();
    const loadingList = new Array(13).fill(null);

    const { fetchCountProductsToCart } = useContext(Context);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300;
    }

    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300;
    }

    const handleBtnAddToCart = async (e, id) => {
        e.preventDefault();
        e.preventDefault();

        if (user) {
            await addToCart(id, handleSessionClosed);

            await fetchCountProductsToCart();
        } else {
            toastr.error('Por favor, debe iniciar sesión');
        }
    };

    const fetchAllProducts = async () => {
        setLoading(true);

        const response = await fetch(productApi.getAllProduct.url, {
            method: productApi.getAllProduct.method,
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok)
            setData(data.products);
        else
            toastr.info(data.error);

        setLoading(false);
    };

    useEffect( ()  => {
        fetchAllProducts();
    }, []);

    return (
        <div className='container mx-auto px-4 my-6 relative'>

            <h2 className='text-2xl font-bold py-4'>Nuestros Cafés</h2>

            <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all' ref={scrollElement}>

                <button
                    className='bg-white text-red-600 shadow-md rounded-full p-1 hover:opacity-70 absolute left-0 text-lg hidden md:block'
                    onClick={scrollLeft}
                >
                    <FaAngleLeft />
                </button>
                <button
                    className='bg-white text-red-600 shadow-md rounded-full p-1 hover:opacity-70 absolute right-0 text-lg hidden md:block'
                    onClick={scrollRight}
                >
                    <FaAngleRight />
                </button>

                {
                    loading ? (
                        loadingList.map((item, index) => {
                            return (
                                <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow-md' key={'vertical'+index} >
                                    <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse'>
                                    </div>

                                    <div className='p-3 w-full grid gap-2'>
                                        <h2 className='p-1 py-2 animate-pulse rounded-full bg-slate-200'
                                        ></h2>
                                        <p className='p-1 animate-pulse rounded-full bg-slate-200 py-2'></p>
                                        <p className='p-1 animate-pulse rounded-full bg-slate-200 py-2'></p>
                                        <p className='p-1 animate-pulse rounded-full bg-slate-200 py-2'></p>

                                        <div className='flex items-center py-1 w-10'>
                                            <button className='px-3 rounded-full bg-slate-200 py-2 w-full animate-pulse'>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        data.map((item, index) => {
                            return (
                                <Link to={'product/'+item?._id} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow-md' key={'producto'+index}>
                                    <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
                                        <img
                                            src={item?.image[0]}
                                            alt={item?.name}
                                            className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply'
                                        />
                                    </div>

                                    <div className='p-3'>
                                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'
                                        >{item?.name}</h2>

                                        <div className='flex flex-col'>
                                            <p
                                                className='text-red-600 font-medium'
                                            >{displayCOPCurrency(item?.price)}</p>
                                        </div>

                                        <div className='flex items-center py-1'>
                                            <button
                                                className='bg-[#593d2b] hover:opacity-80 text-white text-1xl px-3 py-1 rounded-full'
                                                onClick={(e) => handleBtnAddToCart(e, item?._id)}
                                            >
                                                <IoMdCart />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    )
                }
            </div>

        </div>
    );
};

export default VerticalCardProduct;
