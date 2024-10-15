import React                            from 'react';
import { Link }                         from 'react-router-dom';
import cert_internacional               from '../../assets/responsabilidad-ambiental/certificaciones-internacionales.png';
import cert_internacional_hover         from '../../assets/responsabilidad-ambiental/certificaciones-internacionales-hover.png';
import aire                             from '../../assets/responsabilidad-ambiental/aire.png';
import aire_hover                       from '../../assets/responsabilidad-ambiental/aire-hover.png';
import agua                             from '../../assets/responsabilidad-ambiental/agua.jpg';
import agua_hover                       from '../../assets/responsabilidad-ambiental/agua-hover.jpg';
import tierra                           from '../../assets/responsabilidad-ambiental/tierra.png';
import tierra_hover                     from '../../assets/responsabilidad-ambiental/tierra-hover.png';
import fuego                            from '../../assets/responsabilidad-ambiental/fuego.jpg';
import fuego_hover                      from '../../assets/responsabilidad-ambiental/fuego-hover.jpg';

const ResponsabilidadesAmbientales = () => {
    return (
        <>
            <div className='mr-8 ml-12 h-full' style={{
                width: '40%'
            }}>
                <h2 className='text-[#4497D3]'
                    style={{
                        fontSize: '60px',
                        lineHeight: '60px',
                        fontWeight: 800,
                        textAlign: 'left',
                        fontFamily: 'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                    }}>
                    Responsabilidad
                    Ambiental
                </h2>
                <div className='h-screen'>
                    <div className='flex h-[72px] mt-3 relative' style={{
                        backgroundImage: "url('/img/backline.jpg'",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                            <p>
                                ANEI es un modelo ejemplar de cumplimiento de nuestra ley tradicional en unión con la sabiduría milenaria de nuestros líderes espirituales, los Mamos que sostienen el mundo. Dado este conocimiento, es nuestro compromiso garantizar el bienestar de todos los que sostienen nuestra madre tierra; por esa razón, le pedimos permiso a nuestra madre tierra para realizar cualquier actividad con nuestros rituales (pagos), porque todo lo que existe tiene una razón de ser, está vivo y cambiar algo dentro de ese orden natural implica interrumpir su misión dentro de este ciclo.
                            </p>
                            <p className='mt-4'>
                                Por esa razón, ANEI cree que compartir el mensaje de cuidar todo lo que la vida nos da es de vital importancia, entendiendo lo sagrado que es para nosotros velar por la permanencia de estos conocimientos materializados. Por ejemplo: nuestros estanques, los Chwendwas, de donde surgen los ríos cristalinos y fluyen por todas partes para continuar sustentando el curso de la vida, como la sangre en nuestro cuerpo; nuestros Morundwas, árboles sagrados que emiten energía positiva que el viento sostiene, depositándola en nuestro Kadukwus, un lugar sagrado que conecta el universo para armonizar nuestro ser.
                            </p>
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
                    <Link to='certificaciones-internacionales' className='relative'>
                        <img
                            src={cert_internacional}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"

                        />
                        <img
                            src={cert_internacional_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='aire' className='relative'>
                        <img
                            src={aire}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={aire_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='agua' className='relative'>
                        <img
                            src={agua}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={agua_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                </div>
                <div className='flex'>
                    <Link to='tierra' className='relative'>
                        <img
                            src={tierra}
                            alt=""
                            width={380}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={tierra_hover}
                            alt=""
                            width={380}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='fuego' className='relative'>
                        <img
                            src={fuego}
                            alt=""
                            width={380}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={fuego_hover}
                            alt=""
                            width={380}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                </div>
                <p className='mt-4 text-[#766d67] font-semibold'>
                    De esta manera, hemos logrado dar a conocer nuestro café ANEI en varias partes del mundo. El café ANEI trabaja diariamente para continuar luchando por nuestra permanencia cultural, por nuestros principios de "trabajar con amor" sin afectar a nuestra madre tierra; continuar apoyando el cambio generacional, para que puedan continuar capacitándose a sí mismas, empoderando a las mujeres para garantizar un futuro lleno de bienestar y alegría en los hogares. Por estas razones, somos reconocidos, algo que se refleja en una buena remuneración del café que recolectamos de nuestras cosechas.
                </p>
            </div>
        </>
    );
};

export default ResponsabilidadesAmbientales;
