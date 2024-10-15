import logo                                     from '../assets/logo.png';
import React, { useContext, useEffect }         from 'react';
import { useSelector }                          from 'react-redux';
import { Link, Outlet, useNavigate }            from 'react-router-dom';
import { useAuthService }                       from '../services/authService';
import Context                                  from '../context';
import ROLE                                     from '../constants/role';

const AdminPanel = () => {

    const { setShowUserGeneralComponent } = useContext(Context);
    const { handleLogout } = useAuthService();
    const navigation = useNavigate();

    const user = useSelector(state => state?.user?.user);

    useEffect(() => {
        if ( user?.role === ROLE.GENERAL )
            navigation('/');
    }, [user]);

    return (
        <div className='min-h-screen md:flex hidden'>
            <aside className='bg-white min-h-full w-full max-w-60 flex flex-col justify-between customShadow'>
                <div>
                    <div className='h-36 flex justify-center items-center gap-1 flex-col py-2'>
                        <Link to='/admin/products'>
                            <img src={logo} className='block' alt='Anei Coffe | Organic Coffe' width={70}/>
                        </Link>
                        <p className='capitalize text-lg font-semibold'>{user?.name}</p>
                        <p className='text-sm'>{user?.role}</p>
                    </div>

                    {/**     Navigation     */}
                    <nav className='grid p-4 gap-2'>
                        <Link to='users' className='px-2 py-1 hover:bg-slate-300'>
                            Usuarios
                        </Link>
                        <Link to='products' className='px-2 py-1 hover:bg-slate-300'>
                            Productos
                        </Link>
                        <Link to='orders' className='px-2 py-1 hover:bg-slate-300'>
                            Pedidos
                        </Link>
                    </nav>
                </div>

                <div className='mb-4 mx-auto'>
                    <button
                        onClick={() => {
                            handleLogout();
                            setShowUserGeneralComponent(true);
                        }}
                        className='max-w-[150px] px-4 py-2 bg-red-500 font-semibold text-white tracking-wider hover:opacity-80'
                    >
                        Salir
                    </button>
                </div>
            </aside>
            <main className='min-h-screen w-full p-4'>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminPanel;
