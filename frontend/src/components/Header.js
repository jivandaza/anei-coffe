import logo                                     from './../assets/logo.png';
import React, { useState, useEffect }           from 'react';
import Dropdown                                 from './Dropdown';
import { useSelector }                          from 'react-redux';
import { Link }                                 from 'react-router-dom';
import { MdOutlineEmail }                       from 'react-icons/md';
import { FaFacebookF }                          from 'react-icons/fa';
import { FiYoutube }                            from 'react-icons/fi';
import { FaLinkedinIn }                         from 'react-icons/fa';
import { FaInstagram }                          from 'react-icons/fa';
import { FaRss }                                from 'react-icons/fa6';
import { useAuthService }                       from '../services/authService';

const Header = () => {

    const { handleLogout } = useAuthService();

    const user = useSelector(state => state?.user?.user);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 52) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const LINK_1 = {
        label : 'CONÓCENOS',
        href : '/conocenos'
    };

    const LINK_2 = {
        label : 'RESPONSABILIDAD AMBIENTAL',
        href : '/responsabilidad-ambiental'
    };

    const LINK_3 = {
        label : 'IMPACTO SOCIAL',
        href : '/responsabilidad-social'
    };

    const LINK_4 = {
        label : 'OFERTA DE CAFÉ',
        href : '/oferta-de-cafe'
    };

    const LINK_5 = {
        label : 'NOTICIAS',
        href : '/noticias'
    };

    const LINK_6 = {
        label : 'CONTACTO',
        href : '/contacto'
    };

    const LINK_7 = {
        label : 'COMPRAS',
        href : '/order'
    }

    const CONOCENOS_SUB_LINKS = [
        {
            label : 'Organización',
            href : 'conocenos/organizacion'
        },
        {
            label : 'Hacia donde vamos',
            href : 'conocenos/hacia-donde-vamos'
        },
        {
            label : 'Historia',
            href : 'conocenos/historia'
        },
        {
            label : 'Asociados',
            href : 'conocenos/asociados'
        },
        {
            label : 'Documentos ESAL',
            href : 'conocenos/documentos-esal'
        },
        {
            label : 'Cosmovisión',
            href : 'conocenos/cosmovision'
        },
        {
            label : 'Anei por el mundo',
            href : 'conocenos/anei-por-el-mundo'
        }
    ];
    const RESPONSABILIDAD_SUB_LINKS = [
        {
            label : 'Certificaciones internacionales',
            href : 'responsabilidad-ambiental/certificaciones-internacionales'
        },
        {
            label : 'Aire',
            href : 'responsabilidad-ambiental/aire'
        },
        {
            label : 'Agua',
            href : 'responsabilidad-ambiental/agua'
        },
        {
            label : 'Tierra',
            href : 'responsabilidad-ambiental/tierra'
        },
        {
            label : 'Fuego',
            href : 'responsabilidad-ambiental/fuego'
        }
    ];
    const IMPACTO_SUB_LINKS = [
        {
            label : 'Educación',
            href : 'responsabilidad-social/educacion'
        },
        {
            label : 'Seguridad alimentaria',
            href : 'responsabilidad-social/seguridad-alimentaria'
        },
        {
            label : 'Igualdad de Género',
            href : 'responsabilidad-social/igualdad-de-genero'
        },
        {
            label : 'Comercio Justo',
            href : 'responsabilidad-social/comercio-justo'
        },
        {
            label : 'Avance Regional',
            href : 'responsabilidad-social/avance-regional'
        },
        {
            label : 'Niñes',
            href : 'responsabilidad-social/nines'
        }
    ];
    const OFERTA_SUB_LINKS = [
        {
            label : 'Café Tradicional',
            href : 'oferta-de-cafe/cafe-tradicional-fto'
        },
        {
            label : 'Café Mujeres',
            href : 'oferta-de-cafe/cafe-mujeres-fto'
        },
        {
            label : 'Café Orígenes',
            href : 'oferta-de-cafe/cafe-origenes-fto'
        },
        {
            label : 'Café Jóvenes',
            href : 'oferta-de-cafe/cafe-jovenes-fto'
        },
        {
            label : 'Café Dorado',
            href : 'oferta-de-cafe/cafe-dorado-del-perija-fto'
        },
        {
            label : 'Café Premium',
            href : 'oferta-de-cafe/cafe-premium-fto'
        }
    ];

    return (
        <header className={`bg-white`}>
            <div className={`flex justify-between container mx-auto py-4 bg-white`}>
                <div className='flex items-center'>
                    <p className='text-lime-600 text-sm mr-3 inline-block font-semibold'>Cra 5 N-16a 53 Valledupar - Colombia</p>
                    <span className='text-sky-600 text-sm inline-block'><MdOutlineEmail /></span>
                    <a className='text-sky-600 text-sm font-semibold hover:underline' target='_blank' href='mailto:gerencia@anei.co - info@anei.org.co'>gerencia@anei.co - info@anei.org.co</a>
                </div>
                <div className='flex items-center justify-between w-32'>
                    <a className='text-lime-600 text-sm hover:text-white'  href='https://www.facebook.com/AneiCoffee' target='_blank' title='Facebook'><FaFacebookF /></a>
                    <a className='text-lime-600 text-sm hover:text-white' href='https://www.youtube.com/@aneicoffee3969' target='_blank' title='Youtube'><FiYoutube /></a>
                    <a className='text-lime-600 text-sm hover:text-white' href='https://www.linkedin.com/company/anei-coffee/' target='_blank' title='Likedin'><FaLinkedinIn /></a>
                    <a className='text-lime-600 text-sm hover:text-white' href='https://www.instagram.com/aneicoffee/' target='_blank' title='Instagram'><FaInstagram /></a>
                    <a className='text-lime-600 text-sm hover:text-white' href='https://anei.org.co/feed/' target='_blank' title='RSS'><FaRss /></a>
                </div>
            </div>

            <div
                className={`flex justify-between items-center h-16 px-8 mx-auto bg-white ${
                    isScrolled ? 'fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-opacity-80' : ''
                }`}
            >
                <Link
                    to={'/'}
                    title='Anei Coffe | Organic Coffe'
                >
                    <img src={logo} className='block' alt="Anei Coffe | Organic Coffe" width={70}/>
                </Link>
                <nav className='flex flex-row h-full py-1'>
                    <Dropdown link={LINK_1} sub_links={CONOCENOS_SUB_LINKS} />
                    <Dropdown link={LINK_2} sub_links={RESPONSABILIDAD_SUB_LINKS} />
                    <Dropdown link={LINK_3} sub_links={IMPACTO_SUB_LINKS} />
                    <Dropdown link={LINK_4} sub_links={OFERTA_SUB_LINKS} />
                    <Dropdown link={LINK_5} sub_links={null} />
                    <Dropdown link={LINK_6} sub_links={null} />
                    {
                        user ? (
                            <>
                                <Dropdown link={LINK_7} sub_links={null} />
                                <button onClick={handleLogout} className='flex flex-row items-center bg-red-500 m-2 p-2 text-sm font-semibold text-white tracking-wider hover:opacity-80'>
                                    SALIR
                                </button>
                            </>
                        ) : (
                            <Link to='/login' className='flex flex-row items-center bg-[#593d2b] m-2 p-2 text-sm font-semibold text-white tracking-wider hover:opacity-80'>
                                LOGIN
                            </Link>
                        )
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;
