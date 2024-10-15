import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FaAngleLeft, FaAngleRight }                            from 'react-icons/fa';
import NewsLetter from '../components/NewsLetter';
import Contact from '../components/Contact';
import Certification from '../components/Certification';
import VerticalCardProduct from "../components/VerticalCardProduct";
import ROLE from "../constants/role";
import {useSelector} from "react-redux";

/*      images      */
import home_img from '../assets/home.png';
import about_me from '../assets/home/acerca-de.png';
import about_me_hover from '../assets/home/acerca-de-hover.png';
import ambiental from '../assets/home/ambiental.png';
import ambiental_hover from '../assets/home/ambiental-hover.png';
import social from '../assets/home/social.png';
import social_hover from '../assets/home/social-hover.png';
import caffe_banner from '../assets/home/cafe-banner.jpg';
import oferta_caffe from '../assets/home/oferta-de-cafe.png';
import conocer_btn from '../assets/home/conocer.png';
import fondo_amarillo from '../assets/home/fondo-amarillo.jpg';
import rayas from '../assets/home/rayitas.png';
import armonia_img from '../assets/home/armonia.jpg';
import bienestar_img from '../assets/home/bienestar.jpg';
import cultura_img from '../assets/home/cultura.jpg';
import equidad_img from '../assets/home/equidad.jpg';
import anei_mundo from '../assets/home/anei-mundo.jpg';
import MapComponent from "../components/MapComponent";

const Home = () => {

    const user = useSelector(state => state?.user?.user);
    const navigation = useNavigate();

    const [isLoaded, setIsLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        {
            img: armonia_img,
            title: 'Armonía'
        },
        {
            img: bienestar_img,
            title: 'Bienestar'
        },
        {
            img: cultura_img,
            title: 'Cultura'
        },
        {
            img: equidad_img,
            title: 'Equidad'
        }
    ];

    const nextImage = () => {
        if ( images.length - 1 > currentImage ) {
            setCurrentImage(prevState => prevState + 1);
        }
    }

    const backImage = () => {
        if ( currentImage !== 0 ) {
            setCurrentImage(prevState => prevState - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(()=>{

            if( images.length - 1 > currentImage ){
                nextImage();
            }else{
                setCurrentImage(0);
            }

        },5000);

        return ()=> clearInterval(interval);
    }, [currentImage]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 5000);
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
        <>
            {isLoaded && (
                <Link to='/'>
                    <img src={home_img} alt="Oferta de Cafe"/>
                </Link>
            )}
            {!isLoaded && (
                <section className='flex justify-center items-center h-screen bg-[#ceb011]'>
                    <span className='loader'></span>
                </section>
            )}

            <VerticalCardProduct />

            <section className='flex'>
                <Link className="relative" to='/conocenos'>
                    <img
                        src={about_me}
                        alt={'Acerca De'}
                        width={450}
                        className="transition-all duration-400 ease-in-out hover:opacity-0"
                    />
                    <img
                        src={about_me_hover}
                        alt={'Acerca De'}
                        width={450}
                        className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                    />
                </Link>
                <Link className="relative" to='/'>
                    <img
                        src={ambiental}
                        alt={'Responsabilidad Ambiental'}
                        width={450}
                        className="transition-all duration-400 ease-in-out hover:opacity-0"
                    />
                    <img
                        src={ambiental_hover}
                        alt={'Responsabilidad Ambiental'}
                        width={450}
                        className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                    />
                </Link>
                <Link className="relative" to='/'>
                    <img
                        src={social}
                        alt={'Responsabilidad Social'}
                        width={450}
                        className="transition-all duration-400 ease-in-out hover:opacity-0"
                    />
                    <img
                        src={social_hover}
                        alt={'Responsabilidad Social'}
                        width={450}
                        className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                    />
                </Link>
            </section>

            <Certification />

            <section className='flex bg-[#efefef]'>
                <img src={caffe_banner} alt="Cafe" width={900} />
                <div className='flex flex-col w-full'>
                    <div className='h-3/5 flex justify-center items-center'>
                        <img src={oferta_caffe} alt="Oferta de Cafe" />
                    </div>
                    <div className='h-1/5 flex items-center'>
                        <Link to='/oferta-de-cafe'>
                            <img src={conocer_btn} alt="Oferta de Cafe" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className='flex my-12 h-[70vh]'>
                <div className='relative flex flex-col justify-center items-end w-2/5 h-full'>
                    <img src={fondo_amarillo} alt="" className='w-full h-full' />

                    <h2
                        className='absolute text-[#543f2f] right-10'
                        style={{
                            fontSize: '70px',
                            lineHeight: '60px',
                            fontWeight: 800,
                            textAlign: 'right',
                            fontFamily: 'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                            textTransform: 'Uppercase'
                        }}
                    >
                        Nuestra
                        esencia
                    </h2>

                    <img src={rayas} alt="" className='absolute bottom-1/4 right-10' />
                </div>
                <div className='flex justify-center items-center w-3/5 relative'>
                    {/** Desktop and Table View */}
                    <div className='absolute hidden md:flex w-1/2 h-3/4 overflow-hidden'>
                        {
                            images.map((item, index) => {
                                return (
                                    <div
                                        className='w-full h-full min-w-full min-h-full flex flex-col items-center transition-all duration-300'
                                        key={item.img+index}
                                        style={{ transform: `translateX(-${currentImage * 100}%)` }}
                                    >
                                        <img src={item.img} alt={item.title} className='w-full h-4/5 object-cover' />
                                        <div className='h-full w-full flex justify-center items-center'>
                                            <p style={{
                                                color: '#6B6765',
                                                fontSize: '20px',
                                                fontWeight: 800,
                                                fontFamily: 'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                                                textTransform: 'uppercase',
                                            }}>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button
                        className='bg-gray-400 text-white opacity-50 rounded-full p-2.5 font-bold text-2xl hover:opacity-100 absolute left-10 hidden md:block'
                        onClick={backImage}
                    >
                        <FaAngleLeft />
                    </button>
                    <button
                        className='bg-gray-400 text-white opacity-50 rounded-full p-2.5 font-bold text-2xl hover:opacity-100 absolute right-10 hidden md:block'
                        onClick={nextImage}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </section>

            <section className='flex mb-12 h-[70vh]'>
                <Link to='conocenos/anei-por-el-mundo' className='h-full' style={{
                    width: '70%'
                }}>
                    <img src={anei_mundo} alt="" className='h-full w-full' />
                </Link>
                <div className="h-full flex-grow">
                    <MapComponent />
                </div>
            </section>

            <Contact />
            <NewsLetter />
        </>
    );
};

export default Home;
