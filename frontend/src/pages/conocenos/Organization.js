import React            from 'react';
import portada          from '../../assets/conocenos/organizacion-portada.jpg';

const Organization = () => {
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
                    Organización
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#625a54] font-semibold'>
                        <p>
                            <b>ANEI</b>, es una familia de pequeños productores de café orgánico, de la Sierra Nevada y Serranía del Perijá, que comparte una visión del mundo desde lo social y ambiental, donde las pequeñas acciones suman soluciones a las necesidades de las comunidades.
                        </p>
                        <p className='mt-4'>
                            Es fundada con el fin de mejorar las condiciones de vida de las comunidades indígenas y familias campesinas de la región, encaminándolas a una nueva visión del mundo, más amplia y llena de oportunidades que los vincule con los consumidores de sus productos en diferentes partes del mundo, cuyo fin sea el mejoramiento de su calidad de vida y la búsqueda de su sostenibilidad.
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
                <img src={portada} alt="Organización" width={700}/>
            </div>
        </>
    );
};

export default Organization;
