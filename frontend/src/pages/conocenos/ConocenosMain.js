import React                            from 'react';
import { Link }                         from 'react-router-dom';
import organization                     from '../../assets/conocenos/organizacion.jpg';
import organization_hover               from '../../assets/conocenos/organizacion-hover.jpg';
import hacia_donde_vamos                from '../../assets/conocenos/hacia-donde-vamos.jpg';
import hacia_donde_vamos_hover          from '../../assets/conocenos/hacia-donde-vamos-hover.jpg';
import historia                         from '../../assets/conocenos/historia.jpg';
import historia_hover                   from '../../assets/conocenos/historia-hover.png';
import asociados                        from '../../assets/conocenos/asociados.jpg';
import asociados_hover                  from '../../assets/conocenos/asociados-hover.jpg';
import documentos_esal                  from '../../assets/conocenos/documentos-esal.jpg';
import documentos_esal_hover            from '../../assets/conocenos/documentos-esal-hover.jpg';
import cosmovision                      from '../../assets/conocenos/cosmovision.png';
import cosmovision_hover                from '../../assets/conocenos/cosmovision-hover.png';

const ConocenosMain = () => {
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
                    Conócenos
                </h2>
                <div className='flex h-[72px] mt-3 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8'>
                        <p className='text-[#766d67] font-semibold'>
                            <b>ANEI</b>, somos una organización conformada por 700 productores de familias pertenecientes a 4 comunidades indígenas (Arhuacos, Koguis, Kankuamos y Wiwas) y campesinos de la Sierra Nevada de Santa Marta y Serranía del Perijá, al norte de Colombia, ofrecemos cafés especiales de origen, sostenibles con certificación orgánica y de comercio justo, calidad excelso tipo exportación.
                        </p>
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
                    <Link to='organizacion' className='relative'>
                        <img
                            src={organization}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"

                        />
                        <img
                            src={organization_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='hacia-donde-vamos' className='relative'>
                        <img
                            src={hacia_donde_vamos}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={hacia_donde_vamos_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='historia' className='relative'>
                        <img
                            src={historia}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={historia_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                </div>
                <div className='flex'>
                    <Link to='asociados' className='relative'>
                        <img
                            src={asociados}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={asociados_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='documentos-esal' className='relative'>
                        <img
                            src={documentos_esal}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={documentos_esal_hover}
                            alt=""
                            width={280}
                            className="absolute top-0 left-0 transition-all duration-400 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </Link>
                    <Link to='cosmovision' className='relative'>
                        <img
                            src={cosmovision}
                            alt=""
                            width={280}
                            className="object-cover transition-all duration-400 ease-in-out hover:opacity-0"
                        />
                        <img
                            src={cosmovision_hover}
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

export default ConocenosMain;
