import React                                            from 'react';
import direccion_img                                    from '../assets/DIRECCION.png';
import address_img                                      from '../assets/ADRESS-1.png';
import email_img                                        from '../assets/EMAILS.png';
import sol_img                                          from '../assets/sol2.png';
import siguenos_img                                     from '../assets/SIGUENOS.png';
import follow_img                                       from '../assets/follow-us.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn }       from "react-icons/fa";
import { ImYoutube2 }                                   from "react-icons/im";
import { TiSocialLinkedinCircular }                     from "react-icons/ti";
import { FiYoutube }                                    from "react-icons/fi";
import { FaRss }                                        from "react-icons/fa6";

const Footer = () => {
    return (
        <footer
            className={`min-h-[90vh] w-full bg-cover bg-bottom text-white px-3 py-5`}
            style={{
                backgroundImage: "url('/img/footernew.jpg'"
            }}
        >
            <div className='flex flex-row mb-14'>
                <div className='flex flex-col gap-7 w-6/12 px-4 py-8'>
                    <div className='text-white'>
                        <img src={direccion_img} alt="" className='mb-6'/>
                        <p className='text-sm font-semibold mb-1'>Colombia</p>
                        <p className='text-sm font-semibold mb-1'>Valledupar, Cesar</p>
                        <p className='text-sm font-semibold mb-1'>Cra 5ª #16A – 53 La Garita</p>
                        <p className='text-sm font-semibold mb-1'>Tel: 57 (5) 570 70 50  57 (5) 588 52 22</p>
                    </div>
                    <div className='text-white'>
                        <img src={address_img} alt="" className='mb-6'/>
                        <p className='text-sm font-semibold mb-1'>Colombia</p>
                        <p className='text-sm font-semibold mb-1'>Valledupar, Cesar</p>
                        <p className='text-sm font-semibold mb-1'>Cra 5ª #16A – 53 La Garita</p>
                        <p className='text-sm font-semibold mb-1'>Tel: 57 (5) 570 70 50  57 (5) 588 52 22</p>
                    </div>
                </div>
                <div className='flex flex-col w-3/12 px-4 py-8'>
                    <div className='text-white'>
                        <img src={email_img} alt="" className='mb-6'/>
                        <p className='text-sm font-semibold mb-1'>info@anei.org.co</p>
                        <p className='text-sm font-semibold mb-1'>gerencia@anei.org.co</p>
                        <img src={sol_img} alt="" className='mt-6'/>
                    </div>
                </div>
                <div className='flex flex-col gap-7 w-3/12 px-4 py-8'>
                    <div className='text-white'>
                        <img src={siguenos_img} alt="" className='mb-6'/>
                        <div className='flex flex-row gap-2'>
                            <a
                                href="https://www.facebook.com/AneiCoffee/"
                                target='_blank'
                                className='text-5xl'
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/aneicoffee/"
                                target='_blank'
                                className='text-5xl'
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.youtube.com/@aneicoffee3969"
                                target='_blank'
                                className='text-5xl'
                            >
                                <ImYoutube2 />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/anei-coffee/"
                                target='_blank'
                                className='text-5xl'
                            >
                                <TiSocialLinkedinCircular />
                            </a>
                        </div>
                    </div>
                    <div className='text-white'>
                        <img src={follow_img} alt="" className='mb-6'/>
                        <div className='flex flex-row gap-2'>
                            <a
                                href="https://www.facebook.com/AneiCoffee/"
                                target='_blank'
                                className='text-5xl'
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/aneicoffee/"
                                target='_blank'
                                className='text-5xl'
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.youtube.com/@aneicoffee3969"
                                target='_blank'
                                className='text-5xl'
                            >
                                <ImYoutube2 />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/anei-coffee/"
                                target='_blank'
                                className='text-5xl'
                            >
                                <TiSocialLinkedinCircular />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-2'>
                <a className='text-gray-600 text-sm hover:text-white'  href='https://www.facebook.com/AneiCoffee' target='_blank' title='Facebook'><FaFacebookF /></a>
                <a className='text-gray-600 text-sm hover:text-white' href='https://www.youtube.com/@aneicoffee3969' target='_blank' title='Youtube'><FiYoutube /></a>
                <a className='text-gray-600 text-sm hover:text-white' href='https://www.linkedin.com/company/anei-coffee/' target='_blank' title='Likedin'><FaLinkedinIn /></a>
                <a className='text-gray-600 text-sm hover:text-white' href='https://www.instagram.com/aneicoffee/' target='_blank' title='Instagram'><FaInstagram /></a>
                <a className='text-gray-600 text-sm hover:text-white' href='https://anei.org.co/feed/' target='_blank' title='RSS'><FaRss /></a>
            </div>
        </footer>
    );
};

export default Footer;
