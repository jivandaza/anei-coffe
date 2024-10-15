import React, { useCallback, useContext, useEffect, useState }      from 'react';
import { useSelector }                                              from 'react-redux';
import { useNavigate, useParams }                                   from 'react-router-dom';
import { IoMdCart }                                                 from 'react-icons/io';
import { productApi }                                               from '../common';
import { useAuthService }                                           from '../services/authService';
import displayCOPCurrency                                           from '../helpers/displayCurrency';
import addToCart                                                    from '../helpers/addToCart';
import toastr                                                       from 'toastr';
import Context from "../context";

const ProductDetails = () => {

    const { handleSessionClosed } = useAuthService();

    const user = useSelector(state => state?.user?.user);

    const productImageListLoading = new Array(4).fill(null);
    const params = useParams();
    const navigate = useNavigate();

    const { fetchCountProductsToCart } = useContext(Context);

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [activeImage,setActiveImage] = useState('');
    const [zoomImage,setZoomImage] = useState(false);
    const [zoomImageCoordinate,setZoomImageCoordinate] = useState({
        x : 0,
        y : 0
    });

    const handleZoomImage = useCallback((e) => {
        setZoomImage(true);
        const { left , top, width , height } = e.target.getBoundingClientRect();

        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        setZoomImageCoordinate({
            x,
            y
        });
    },[zoomImageCoordinate]);

    const handleLeaveImageZoom = () => {
        setZoomImage(false);
    };

    const handleMouseEnterProduct = (imageURL) => {
        setActiveImage(imageURL);
    };

    const fetchProductDetails = async () => {
        setIsLoading(true);
        const response = await fetch(`${productApi.getProduct.url}/${params?.id}`,{
            method: productApi.getProduct.method,
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok) {
            setData(data?.product);
            setActiveImage(data?.product?.image[0]);
        } else
            toastr.error(data.error);

        setIsLoading(false);
    };

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

    const handleBtnBuy = async (e, id) =>{
        e.preventDefault();
        e.preventDefault();

        if (user) {
            await addToCart(id, handleSessionClosed);
            await fetchCountProductsToCart();
            navigate('/cart');
        } else {
            toastr.error('Por favor, debe iniciar sesión');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProductDetails();
    }, [params]);

    return (
        <div className='container mx-auto p-4 mb-3 h-[80vh]'>
            <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>

                {/**        product Image       */}
                <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
                    {
                        isLoading ? (
                            <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2 animate-pulse'>
                            </div>
                        ) : (
                            <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
                                <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom}/>

                                {/**        product zoom        */}
                                {
                                    zoomImage && (
                                        <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
                                            <div
                                                className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                                                style={{
                                                    background : `url(${activeImage})`,
                                                    backgroundRepeat : 'no-repeat',
                                                    backgroundPosition : `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}% `
                                                }}
                                            ></div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }

                    <div className='h-full'>
                        {
                            isLoading ? (
                                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                                    {
                                        productImageListLoading.map((el,index) =>{
                                            return(
                                                <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage"+index}>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            ) : (
                                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                                    {
                                        data?.image?.map((item) =>{
                                            return(
                                                <div className='h-20 w-20 bg-slate-200 rounded p-1' key={item}>
                                                    <img src={item} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' alt={item?.name} onMouseEnter={()=>handleMouseEnterProduct(item)}  onClick={()=>handleMouseEnterProduct(item)}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                {/***product details */}
                {
                    isLoading ? (
                        <div className='grid gap-1 w-full'>
                            <p className='bg-slate-200 animate-pulse h-6 lg:h-8 w-full rounded-full inline-block'></p>
                            <h2 className='h-6 lg:h-8  bg-slate-200 animate-pulse w-full'></h2>
                            <p className='bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8 w-full'></p>

                            <div className='bg-slate-200 h-6 lg:h-8 animate-pulse flex items-center gap-1 w-full'>
                            </div>

                            <div className='flex items-center gap-2 my-1 h-6 lg:h-8 animate-pulse w-full'>
                                <p className='bg-slate-200 w-full'></p>
                                <p className='bg-slate-200 w-full'></p>
                            </div>

                            <div className='flex items-center gap-3 my-2 w-full'>
                                <button className='h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></button>
                                <button className='h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></button>
                            </div>

                            <div className='w-full'>
                                <p className='my-1 h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></p>
                                <p className=' bg-slate-200 rounded animate-pulse h-10 lg:h-12 w-full'></p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-2xl lg:text-4xl font-medium'>{data?.name}</h2>

                            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
                                <p className='text-red-600'>{displayCOPCurrency(data.price)}</p>
                            </div>

                            <div className='flex items-center gap-3 my-2'>
                                <button
                                    className='min-w-[120px] px-3 py-1 font-medium rounded border-2 border-[#593d2b] text-[#593d2b] hover:bg-[#593d2b] hover:text-white'
                                    onClick={(e) => handleBtnBuy(e, data?._id)}
                                >
                                    Comprar
                                </button>
                                <button
                                    className='min-w-[120px] px-3 py-1 rounded border-2 border-[#593d2b] flex justify-center text-2xl text-white bg-[#593d2b] hover:text-[#593d2b] hover:bg-white'
                                    onClick={(e) => handleBtnAddToCart(e, data?._id)}
                                >
                                    <IoMdCart />
                                </button>
                            </div>

                            <div>
                                <p className='text-slate-600 font-medium my-1'>Descripción : </p>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default ProductDetails;
