import React, { useEffect, useState }       from 'react';
import { Link, Outlet }                     from 'react-router-dom';
import Certification                        from '../../components/Certification';
import Contact                              from '../../components/Contact';
import NewsLetter                           from '../../components/NewsLetter';
import resp_social_portada                  from '../../assets/responsabilidad-social/responsabilidad-social-portada.jpg';
import fondo_amarillo                       from '../../assets/oferta-de-cafe/fondo-amarillo.jpg';
import resp_social_frase                    from '../../assets/responsabilidad-social/responsabilidad-social-frase.png';
import anei_frase                           from '../../assets/oferta-de-cafe/anei-frase.png';
import btn_oferta                           from '../../assets/oferta-de-cafe/oferta-de-cafe-btn.png';

const ResponsabilidadSocial = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 5000);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {isLoaded && (
                <div className='flex h-[65vh]'>
                    <div style={{
                        width: '70%'
                    }}>
                        <img src={resp_social_portada}
                             className='h-[65vh] w-full object-cover'
                             alt=""
                             style={{ objectPosition: '-240px center' }}
                        />
                    </div>
                    <div className='relative' style={{
                        width: '30%'
                    }}>
                        <img src={fondo_amarillo} className='h-[65vh]' alt=""/>
                        <img src={resp_social_frase} alt="" className='absolute top-4 -left-16 object-scale-down' />
                        <img src={anei_frase} alt="" className='absolute top-36 right-16 object-scale-down' />
                        <Link to='/oferta-de-cafe' className='absolute top-64 right-16'>
                            <img src={btn_oferta} alt=""/>
                        </Link>
                    </div>
                </div>
            )}
            {!isLoaded && (
                <section className='flex justify-center items-center h-[70vh] bg-white'>
                    <span className='loader' style={{
                        background: 'radial-gradient(circle closest-side, #ceb011 90%,#0000) 0/calc(100%/3) 100% space'
                    }}></span>
                </section>
            )}

            <div className='flex h-[15vh]' style={{
                backgroundImage: "url('/img/back-formas.gif'"
            }}></div>

            <section className='flex mt-16'>
                <Outlet />
            </section>

            <div className='flex h-[15vh]' style={{
                backgroundImage: "url('/img/back-formas.gif'"
            }}></div>

            <Certification />
            <Contact />
            <NewsLetter />
        </>
    );
};

export default ResponsabilidadSocial;
