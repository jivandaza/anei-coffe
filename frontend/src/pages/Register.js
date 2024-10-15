import React, { useState, useEffect }       from 'react';
import { Link, useNavigate }                from 'react-router-dom';
import { useSelector }                      from 'react-redux';
import { FaEye, FaEyeSlash }                from 'react-icons/fa';
import { authApi }                          from '../common';
import toastr                               from 'toastr';
import ROLE from "../constants/role";

const Register = () => {

    const user = useSelector(state => state?.user?.user);
    const navigation = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });

    const handleOneChange = (e) => {
        const { name, value } = e.target;

        setData((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ( data.password === data.confirmPassword )
            await fetchRegister();
        else
            toastr.error('Las contraseñas no coinciden');
    }

    const fetchRegister = async () => {
        const response = await fetch(authApi.register.url, {
            method: authApi.register.method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const { message, error } = await response.json();

        if (response.ok) {
            toastr.success(message);
            navigation('/login');
        }
        else
            toastr.error(error);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (user) {
            if (user?.role === ROLE.ADMIN)
                navigation('/admin/products');
            if (user?.role === ROLE.GENERAL)
                navigation('/');
        }
    }, [user]);

    return (
        <section className='container mx-auto h-auto py-10 w-full flex justify-center items-center'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 w-1/3 px-4 py-10'
                style={{
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
                }}
            >
                <label htmlFor='name'>Nombre:</label>
                <div className='bg-slate-100 p-2'>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='w-full h-full outline-none bg-transparent'
                        onChange={handleOneChange}
                        value={data.name}
                    />
                </div>
                <label htmlFor='email'>Correo Electrónico:</label>
                <div className='bg-slate-100 p-2'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='example@email.com'
                        className='w-full h-full outline-none bg-transparent'
                        onChange={handleOneChange}
                        value={data.email}
                    />
                </div>
                <label htmlFor='phone'>Número de celular:</label>
                <div className='bg-slate-100 p-2'>
                    <input
                        type='number'
                        id='phone'
                        name='phone'
                        className='w-full h-full outline-none bg-transparent'
                        onChange={handleOneChange}
                        value={data.phone}
                    />
                </div>
                <label htmlFor='password' className='mb-1'>Contraseña:</label>
                <div className='bg-slate-100 p-2 flex items-center'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        name='password'
                        className='w-full h-full outline-none bg-transparent'
                        onChange={handleOneChange}
                        value={data.password}
                    />
                    <div className='cursor-pointer text-xl' onClick={
                        () => setShowPassword((value) => !value)
                    }>
                        <span>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <label htmlFor='confirmPassword' className='mb-1'>Confirmar Contraseña:</label>
                <div className='bg-slate-100 p-2 flex items-center'>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id='confirmPassword'
                        name='confirmPassword'
                        className='w-full h-full outline-none bg-transparent'
                        onChange={handleOneChange}
                        value={data.confirmPassword}
                    />
                    <div className='cursor-pointer text-xl' onClick={
                        () => setShowConfirmPassword((value) => !value)
                    }>
                        <span>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <button className='bg-[#593d2b] text-white tracking-wider p-2 mt-4 max-w-[150px] mx-auto hover:scale-110 transition-all'>
                    REGISTRAR
                </button>
                <p className='mt-4'>
                    ¿Ya tienes una cuenta?
                    &nbsp;
                    <Link
                        to='/login'
                        className='text-black font-semibold hover:underline'
                    >Login</Link>
                </p>
            </form>
        </section>
    );
};

export default Register;
