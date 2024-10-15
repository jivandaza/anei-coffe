import React        from 'react';
import logo         from '../assets/logo.png';

const Loader = () => {
    return (
        <section className='h-screen flex flex-col justify-center items-center'>
            <img src={logo} className='block mb-4' alt='Anei Coffe | Organic Coffe' width={100}/>
            <span className='loaderPage'></span>
        </section>
    );
};

export default Loader;
