import React, { useState }          from 'react';
import { MdModeEditOutline }        from 'react-icons/md';
import { MdDelete }                 from 'react-icons/md';
import AdminEditProduct             from './AdminEditProduct';
import AdminDeleteProduct           from './AdminDeleteProduct';
import displayCOPCurrency           from '../helpers/displayCurrency';

const AdminProductCard = ({
    data,
    allProducts
}) => {

    const [showDeleteProduct, setShowDeleteProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false);

    return (
        <div className='bg-white p-4 rounded-md shadow-md '>
            <div className='w-40'>
                <div className='flex justify-center items-center'>
                    <div className='w-32 h-32'>
                        <img
                            src={data?.image[0]}
                            alt={data?.name}
                            width={120}
                            height={120}
                            className='mx-auto object-fill h-full'
                        />
                    </div>
                </div>
                <h1 className='my-2 text-ellipsis line-clamp-2'>{data.name}</h1>

                <div>
                    <p className='font-semibold'>
                        {
                            displayCOPCurrency(data.price)
                        }
                    </p>

                    <div className='flex justify-end gap-1.5 py-1'>
                        <div
                            className='w-fit bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-400 hover:text-white cursor-pointer'
                            onClick={() => setShowEditProduct(true)}
                        >
                            <MdModeEditOutline />
                        </div>
                        <div
                            className='w-fit bg-red-500 text-white p-2 rounded-full hover:bg-red-400 hover:text-white cursor-pointer'
                            onClick={() => setShowDeleteProduct(true)}
                        >
                            <MdDelete />
                        </div>
                    </div>
                </div>
            </div>

            {
                showEditProduct && (
                    <AdminEditProduct
                        onClose={() => setShowEditProduct(false)}
                        dataProduct={data}
                        allProducts={allProducts}
                    />
                )
            }
            {
                showDeleteProduct && (
                    <AdminDeleteProduct
                        onClose={() => setShowDeleteProduct(false)}
                        idProduct={data?._id}
                        allProducts={allProducts}
                    />
                )
            }
        </div>
    )
};

export default AdminProductCard;