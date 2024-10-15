import React, { useContext, useEffect, useState }   from 'react';
import { Link, useNavigate }                        from 'react-router-dom';
import { useSelector }                              from 'react-redux';
import { FaEye, FaEyeSlash }                        from 'react-icons/fa';
import { authApi }                                  from '../common';
import Context                                      from '../context';
import ROLE                                         from '../constants/role';
import toastr                                       from 'toastr';

const Login = () => {

    const navigate = useNavigate();
    const user = useSelector(state => state?.user?.user);
    const { fetchUserData, fetchCountProductsToCart } = useContext(Context);

    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
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

        const response = await fetch(authApi.login.url, {
            method: authApi.login.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const { message, error } = await response.json();

        if (response.ok) {
            toastr.info(message);
            await fetchUserData();
            await fetchCountProductsToCart();
        } else
            toastr.error(error);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (user) {
            if (user?.role === ROLE.ADMIN)
                navigate('/admin/products');
            if (user?.role === ROLE.GENERAL)
                navigate('/');
        }
    }, [user]);

    return (
        <section className='container mx-auto min-h-[80vh] w-full flex justify-center items-center'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 w-1/3 px-4 py-10'
                style={{
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
                }}
            >
                <label htmlFor='email'>Correo Electrónico:</label>
                <div className='bg-slate-100 p-2 mb-2'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='example@email.com'
                        className='w-full h-full outline-none bg-transparent'
                        value={data.email}
                        onChange={handleOneChange}
                    />
                </div>
                <label htmlFor='password'>Contraseña:</label>
                <div className='bg-slate-100 p-2 flex items-center'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        name='password'
                        className='w-full h-full outline-none bg-transparent'
                        value={data.password}
                        onChange={handleOneChange}
                    />
                    <div className='cursor-pointer text-xl' onClick={
                        () => setShowPassword((value) => !value)
                    }>
                        <span>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <Link
                    to='/recuperar-contraseña'
                    className='mt-1 block w-fit ml-auto font-semibold hover:underline'
                >
                    Recuperar contraseña
                </Link>
                <button className='bg-[#593d2b] text-white tracking-wider p-2 mt-4 max-w-[150px] mx-auto hover:scale-110 transition-all'>
                    ACEPTAR
                </button>
                <p className='mt-4'>
                    ¿No tienes una cuenta?
                    &nbsp;
                    <Link
                        to='/register'
                        className='text-black font-semibold hover:underline'
                    >Registrar</Link>
                </p>
            </form>
        </section>
    );
};

export default Login;
