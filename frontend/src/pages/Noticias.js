import React, { useEffect, useState }           from 'react';
import { Link }                                 from 'react-router-dom';
import Certification                            from '../components/Certification';
import Contact                                  from '../components/Contact';
import NewsLetter                               from '../components/NewsLetter';
import noticias_portada                         from '../assets/noticias/portada.png';
import fondo_amarillo                           from '../assets/oferta-de-cafe/fondo-amarillo.jpg';
import noticias_frase                           from "../assets/noticias/frase.png";
import anei_frase                               from '../assets/oferta-de-cafe/anei-frase.png';
import btn_oferta                               from '../assets/oferta-de-cafe/oferta-de-cafe-btn.png';
import noticia1                                 from '../assets/noticias/noticia1.jpeg';
import noticia2                                 from '../assets/noticias/noticia2.jpeg';
import noticia3                                 from '../assets/noticias/noticia3.jpeg';
import noticia4                                 from '../assets/noticias/noticia4.jpg';

const Noticias = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const noticias = [
        {
            image: noticia1,
            title: 'SEYWIAKA: Intercultural Innovation and Memory Center for future generations.',
            description: null,
        },
        {
            image: noticia2,
            title: 'The Harvest Begins in Anei: Growing Coffee with the Heart and in Harmony with Nature.',
            description: null,
        },
        {
            image: noticia3,
            title: 'ANEI reafirma su compromiso con la sostenibilidad en la exportación de café orgánico con la llegada del velero “Anemos” al puerto de Santa Marta.',
            description: null,
        },
        {
            image: noticia4,
            title: 'Enseñando en las nuevas generaciones',
            description: 'ASOANEI brinda espacios de capacitación a estudiantes de Institución Educativa en zona rural de Valledupar Un grupo de estudiantes originarios del corregimiento de Atánquez, territorio ancestral […]',
        }
    ];

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
                        <img src={noticias_portada}
                             className='h-[65vh] w-full object-cover'
                             alt=""
                             style={{ objectPosition: '-240px center' }}
                        />
                    </div>
                    <div className='relative' style={{
                        width: '30%'
                    }}>
                        <img src={fondo_amarillo} className='h-[65vh]' alt=""/>
                        <img src={noticias_frase} alt="" className='absolute top-4 -left-16 object-scale-down' />
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

            <div className='container mx-auto my-20'>
                <h2 className='text-[#4497D3]'
                    style={{
                        fontSize: '70px',
                        lineHeight: '60px',
                        fontWeight: 800,
                        textAlign: 'center',
                        fontFamily: 'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                    }}>
                    Noticias ANEI
                </h2>
            </div>

            <div className='flex flex-wrap justify-around'>
                {
                    noticias.map((item, index) => {
                        return (
                            <div className='flex flex-col gap-4 mx-4 my-8' style={{
                                width: '45%'
                            }}>
                                <Link to='/'>
                                    <img src={item.image} alt="" width={960} height={720} />
                                    <p className='text-[#766d67] mt-4'
                                        style={{
                                            fontSize: '40px',
                                            lineHeight: '30px',
                                            textAlign: 'left',
                                        }}>
                                        {item.title}
                                    </p>
                                </Link>
                                {
                                    item.description && (
                                        <p className='text-[#766d67] font-medium'>
                                            {item.description}
                                        </p>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex h-[15vh]' style={{
                backgroundImage: "url('/img/back-formas.gif'"
            }}></div>

            <Certification />
            <Contact />
            <NewsLetter />
        </>
    );
};

export default Noticias;
