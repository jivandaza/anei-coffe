import React, { useState, useEffect }           from 'react';
import AdminProductCard                         from '../components/AdminProductCard';
import UploadProduct                            from '../components/UploadProduct';
import { productApi }                           from '../common';
import toastr                                   from 'toastr';

const AllProducts = () => {

    const [showUploadProduct, setShowUploadProduct] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllProducts = async () => {
        setIsLoading(true);

        const response = await fetch(productApi.getAllProduct.url, {
            method: productApi.getAllProduct.method,
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok)
            setAllProducts(data.products);
        else
            toastr.info(data.error);

        setIsLoading(false);
    };

    useEffect( ()  => {
        fetchAllProducts();
    }, []);

    return (
        <section className='flex flex-col h-full'>
            <div className='bg-white py-2 px-4 flex justify-between items-center'>
                <h2 className='font-bold'>Productos</h2>
                <button
                    className='font-semibold tracking-wider border-2 border-[#593d2b] text-[#593d2b] hover:bg-[#593d2b] hover:text-white transition-all py-1 px-3 rounded-full'
                    onClick={() => setShowUploadProduct(true)}
                >Agregar</button>
            </div>

            {
                isLoading ? (
                    <div className='flex justify-center items-center h-full'>
                        <span className='loader'></span>
                    </div>
                ) : (
                    allProducts.length === 0 ? (
                        <div className='flex justify-center items-center h-full'>No se encontraron productos...</div>
                    ) : (
                        <div className='flex items-center flex-wrap gap-5 py-4 h-full overflow-y-scroll'>
                            {
                                allProducts.map((item, index) => {
                                    return (
                                        <AdminProductCard
                                            data={item}
                                            key={'product'+index}
                                            allProducts={fetchAllProducts}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                )
            }

            {
                showUploadProduct && (
                    <UploadProduct
                        onClose={() => setShowUploadProduct(false)}
                        allProducts={fetchAllProducts}
                    />
                )
            }
        </section>
    );
};

export default AllProducts;