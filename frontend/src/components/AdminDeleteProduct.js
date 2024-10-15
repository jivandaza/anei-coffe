import React                        from 'react';
import { IoMdClose }                from 'react-icons/io';
import { useAuthService }           from '../services/authService';
import { productApi }               from '../common';
import toastr                       from 'toastr';

const AdminDeleteProduct = ({
    onClose,
    idProduct,
    allProducts
}) => {

    const { handleSessionClosed } = useAuthService();

    const fetchDeleteProduct = async () => {
        const response = await fetch(`${productApi.deleteProduct.url}/${idProduct}`, {
            method: productApi.deleteProduct.method,
            credentials: 'include'
        });

        const {message, error} = await response.json();

        if (response.ok) {
            toastr.info(message);
            await allProducts();
            onClose();
        } else if (response.status === 400) {
            toastr.error(error);
        } else if (response.status === 404) {
            toastr.error(error);
            await allProducts();
            onClose();
        } else {
            handleSessionClosed(error);
        }
    };

    const handleBtnDelete = async (e) => {
        e.preventDefault();

        await fetchDeleteProduct();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                <div className="flex items-center justify-between border-b pb-3 mb-4">
                    <h3 className="text-lg font-semibold">Confirmar Eliminación</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <span className="sr-only">Cerrar</span>
                        <IoMdClose />
                    </button>
                </div>
                <p className="mb-6 text-gray-700">¿Estás seguro de que deseas eliminar este producto?</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-800 hover:bg-gray-400 py-2 px-4 rounded-lg"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleBtnDelete}
                        className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteProduct;
