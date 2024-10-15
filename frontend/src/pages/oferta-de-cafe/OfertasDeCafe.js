import React                            from 'react';
import { Link }                         from 'react-router-dom';
import cafe_tradicional                 from '../../assets/oferta-de-cafe/cafe-tradicional.jpg';
import cafe_tradicional_hover           from '../../assets/oferta-de-cafe/cafe-tradicional-hover.png';
import cafe_mujeres                     from '../../assets/oferta-de-cafe/cafe-mujeres.jpg';
import cafe_mujeres_hover               from '../../assets/oferta-de-cafe/cafe-mujeres-hover.png';
import cafe_repit                       from '../../assets/oferta-de-cafe/cafe.jpg';
import cafe_origenes_hover              from '../../assets/oferta-de-cafe/cafe-origenes-hover.png';
import cafe_jovenes_hover               from '../../assets/oferta-de-cafe/cafe-jovenes-hover.png';
import cafe_piraja_hover                from '../../assets/oferta-de-cafe/cafe-dorado-de-perija-hover.png';
import cafe_premium                     from '../../assets/oferta-de-cafe/cafe-premium.jpg';
import cafe_premium_hover               from '../../assets/oferta-de-cafe/cafe-premium-hover.png';

const OfertasDeCafe = () => {
    return (
        <>
            <div className='mr-8 ml-12 h-full' style={{
                width: '40%'
            }}>
                <h2 className='text-[#4497D3]'
                    style={{
                        fontSize: '70px',
                        lineHeight: '60px',
                        fontWeight: 800,
                        textAlign: 'left',
                        fontFamily: 'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                    }}>
                    Productos
                    Anei
                </h2>
                <div className='flex h-[72px] mt-3 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <p className='text-[#766d67] font-semibold absolute top-0 left-8'>
                        La diversidad de la Sierra Nevada de Santa Marta y la Serranía del Perijá nos permite ofrecer diferentes perfiles de taza a nuestros clientes.
                    </p>
                </div>
            </div>
            <div
                className='flex flex-col'
                style={{
                    width: '60%'
                }}
            >
                <div className='flex'>
                    <Link to='cafe-tradicional-fto' className='relative'>
                        <img
                            src={cafe_tradicional}
                            alt=""
                            width={280}
                            className="h-[170px] object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                            style={{
                                objectPosition: 'center 83%'
                            }}
                        />
                        <img
                            src={cafe_tradicional_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='cafe-mujeres-fto' className='relative'>
                        <img
                            src={cafe_mujeres}
                            alt=""
                            width={280}
                            className="h-[170px] object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                            style={{ objectPosition: 'center' }}
                        />
                        <img
                            src={cafe_mujeres_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='cafe-origenes-fto' className='relative'>
                        <img
                            src={cafe_repit}
                            alt=""
                            width={280}
                            className="h-[170px] object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                            style={{
                                objectPosition: 'center 75%'
                            }}
                        />
                        <img
                            src={cafe_origenes_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                </div>
                <div className='flex'>
                    <Link to='cafe-jovenes-fto' className='relative'>
                        <img
                            src={cafe_repit}
                            alt=""
                            width={280}
                            className="h-[170px] object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                            style={{
                                objectPosition: 'center 75%'
                            }}
                        />
                        <img
                            src={cafe_jovenes_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='cafe-dorado-del-perija-fto' className='relative'>
                        <img
                            src={cafe_repit}
                            alt=""
                            width={280}
                            className="h-[170px] object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                            style={{
                                objectPosition: 'center 75%'
                            }}
                        />
                        <img
                            src={cafe_piraja_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='cafe-premium-fto' className='relative'>
                        <img
                            src={cafe_premium}
                            alt=""
                            width={280}
                            className="h-[170px] object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                            style={{
                                objectPosition: 'center 30%'
                            }}
                        />
                        <img
                            src={cafe_premium_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OfertasDeCafe;
