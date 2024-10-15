import React                            from 'react';
import { Link }                         from 'react-router-dom';
import education                        from '../../assets/responsabilidad-social/educacion.png';
import education_hover                  from '../../assets/responsabilidad-social/educacion-hover.png';
import seguridad_alimentaria            from '../../assets/responsabilidad-social/seguridad-alimentaria.jpg';
import seguridad_alimentaria_hover      from '../../assets/responsabilidad-social/seguridad-alimentaria-hover.jpg';
import igualdad_de_genero               from '../../assets/responsabilidad-social/igualdad-de-genero.jpg';
import igualdad_de_genero_hover         from '../../assets/responsabilidad-social/igualdad-de-genero-hover.jpg';
import comercio_justo                   from '../../assets/responsabilidad-social/comercio-justo.jpg';
import comercio_justo_hover             from '../../assets/responsabilidad-social/comercio-justo-hover.jpg';
import avance_regional                  from '../../assets/responsabilidad-social/avance-regional.jpg';
import avance_regional_hover            from '../../assets/responsabilidad-social/avance-regional-hover.jpg';
import kids                             from '../../assets/responsabilidad-social/niñes.jpg';
import kids_hover                       from '../../assets/responsabilidad-social/niñes-hover.jpg';

const ResponsabilidadesSociales = () => {
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
                    Impacto
                    Social
                </h2>
                <div className='flex h-[72px] mt-3 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8'>
                        <p className='text-[#766d67] font-semibold'>
                            Anei es parte de las organizaciones pioneras en Sierra Nevada y Serranía del Perijá que apuestan por impulsar la economía en el norte del país, lo que conlleva una gran responsabilidad social. Además, Anei tiene una parte importante de su presupuesto en trabajo social como:
                        </p>
                        <div className='flex justify-around mt-6 text-[#766d67] font-semibold'>
                            <div>
                                <p>* Seguridad alimentaria</p>
                                <p>* Educación</p>
                                <p>* Igualdad de género</p>
                            </div>
                            <div>
                                <p>* Seguridad alimentaria</p>
                                <p>* Educación</p>
                                <p>* Igualdad de género</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='flex flex-col'
                style={{
                    width: '60%'
                }}
            >
                <div className='flex'>
                    <Link to='educacion' className='relative'>
                        <img
                            src={education}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"

                        />
                        <img
                            src={education_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='seguridad-alimentaria' className='relative'>
                        <img
                            src={seguridad_alimentaria}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={seguridad_alimentaria_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='igualdad-de-genero' className='relative'>
                        <img
                            src={igualdad_de_genero}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={igualdad_de_genero_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                </div>
                <div className='flex'>
                    <Link to='comercio-justo' className='relative'>
                        <img
                            src={comercio_justo}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={comercio_justo_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='avance-regional' className='relative'>
                        <img
                            src={avance_regional}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={avance_regional_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='nines' className='relative'>
                        <img
                            src={kids}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={kids_hover}
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

export default ResponsabilidadesSociales;