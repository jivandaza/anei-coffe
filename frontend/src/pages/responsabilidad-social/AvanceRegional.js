import React                        from 'react';
import avance_regional_portada      from '../../assets/responsabilidad-social/avance-regional-portada.jpg';

const AvanceRegional = () => {
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
                    Avance
                    Regional
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            Contribuir al desarrollo sostenible a través del apoyo y el fomento de proyectos que busquen mejorar las condiciones de vida de los productores, sus familias y la comunidad en general.
                        </p>
                        <p className='mt-4'>
                            En ANEI, apoyamos la creación de infraestructura para mejorar los ingresos de nuestros miembros:
                        </p>
                        <p className='mt-4'>
                            * Placas de huellas en las pistas para facilitar el acceso y las condiciones de movilidad.
                        </p>
                        <p>
                            * Cofinanciación del programa de beneficiarios ecológicos.
                        </p>
                        <p>
                            * Cofinanciación del programa de infraestructura para el secado.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className='flex justify-center'
                style={{
                    width: '60%'
                }}
            >
                <img src={avance_regional_portada} alt="Avance Regional" width={600}/>
            </div>
        </>
    );
};

export default AvanceRegional;
