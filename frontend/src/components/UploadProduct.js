import React, { useState }                                  from 'react';
import { IoMdClose }                                        from 'react-icons/io';
import { FaCloudUploadAlt }                                 from 'react-icons/fa';
import { MdDelete }                                         from 'react-icons/md';
import DisplayImage                                         from './DisplayImage';
import { useAuthService }                                   from '../services/authService';
import { productApi }                                       from '../common';
import { uploadImageCloudinary, deleteImageCloudinary }     from '../helpers/fetchImage';
import toastr                                               from 'toastr';

const UploadProduct = ({
    onClose,
    allProducts
}) => {

    const { handleSessionClosed } = useAuthService();

    const [data, setData] = useState({
        name: '',
        image: [],
        description: '',
        price: '',
    });
    const [showFullScreenImage,setShowFullScreenImage] = useState(false);
    const [fullScreenImage,setFullScreenImage] = useState('');

    const handleOneChange = (e) => {
        const { name, value } = e.target;

        setData((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            }
        });
    };

    const handleUploadImage = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const image = await uploadImageCloudinary(file);

            setData((previousValue)=> {
                return {
                    ...previousValue,
                    image : [ ...previousValue.image, image.url]
                };
            });
        }
    };

    const handleDeleteImage = async(index)=> {
        const newImage = [...data.image];
        const imageUrl = newImage[index];
        const deleteImage = await deleteImageCloudinary(imageUrl, handleSessionClosed);

        if (deleteImage) {
            newImage.splice(index,1);

            setData((previousValue)=> {
                return{
                    ...previousValue,
                    image : [...newImage]
                }
            });
        }

        toastr.info(deleteImage);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(productApi.addProduct.url, {
            method: productApi.addProduct.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const {message, error} = await response.json();

        if (response.ok) {
            toastr.success(message);
            onClose();
            await allProducts();
        } else if (response.status === 400 || response.status === 500) {
            toastr.error(error);
        } else {
            handleSessionClosed(error);
        }
    };

    return (
        <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 letf-0 right-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 shadow-md rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden pb-12'>
                <div className='relative flex items-center pt-2 pb-4'>
                    <button className='absolute right-0 p-0.5 text-red-600 text-lg rounded-full hover:bg-red-600 hover:text-white' onClick={onClose}>
                        <IoMdClose />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='grid p-4 overflow-y-scroll h-full pb-8'>
                    <label
                        htmlFor="name"
                        className='mb-2'
                    >Nombre:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Ingresar nombre'
                        value={data.name}
                        onChange={handleOneChange}
                        className='mb-4 p-2 border rounded-md bg-slate-100 outline-slate-400'
                    />

                    <label
                        htmlFor="image"
                        className='mb-2'
                    >Imagen:</label>
                    <label htmlFor="imageInput" className='cursor-pointer mb-2' >
                        <div className='mb-2 p-2 bg-slate-100 border rounded-md h-32 w-full flex justify-center items-center'>
                            <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                                <span className='text-3xl'><FaCloudUploadAlt /></span>
                                <p>Subir imagen</p>
                            </div>
                        </div>
                        <input type="file" id='imageInput' className='hidden' onChange={handleUploadImage} />
                    </label>
                    <div className='mb-4'>
                        {
                            data?.image[0] ? (
                                <div className='flex items-center gap-2'>
                                    {
                                        data.image.map((item,index)=>{
                                            return(
                                                <div className='relative group'>
                                                    <img
                                                        src={item}
                                                        alt={item}
                                                        width={80}
                                                        height={80}
                                                        className='bg-slate-100 border cursor-pointer'
                                                        onClick={()=>{
                                                            setShowFullScreenImage(true);
                                                            setFullScreenImage(item);
                                                        }}
                                                    />
                                                    <div
                                                        className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer hover:bg-red-700'
                                                        onClick={()=> handleDeleteImage(index)}
                                                    >
                                                        <MdDelete/>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <p className='text-red-600 text-xs'>*Por favor, subir una imagen</p>
                            )
                        }
                    </div>

                    <label
                        htmlFor="price"
                        className='mb-2'
                    >Precio:</label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        placeholder='Ingresar precio'
                        value={data.price}
                        onChange={handleOneChange}
                        className='mb-4 p-2 border rounded-md bg-slate-100 outline-slate-400'
                    />

                    <label
                        htmlFor="description"
                        className='mb-2'
                    >Descripción:</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        value={data.description}
                        placeholder='Ingresar descripción'
                        onChange={handleOneChange}
                        className='h-28 mb-10 p-2 border rounded-md bg-slate-100 outline-slate-400'
                    ></textarea>

                    <button
                        className='px-3 py-2 bg-[#593d2b] text-white hover:bg-[#533826]'
                        onClick={handleSubmit}
                    >Agregar</button>
                </form>
            </div>

            {/**    Display Full Image   */}
            {
                showFullScreenImage && (
                    <DisplayImage
                        onClose={() => setShowFullScreenImage(false)}
                        imgUrl={fullScreenImage}
                    />
                )
            }
        </div>
    )
};

export default UploadProduct;