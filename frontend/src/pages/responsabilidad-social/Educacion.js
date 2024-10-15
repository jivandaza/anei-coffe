import React                from 'react';
import education_portada    from '../../assets/responsabilidad-social/educacion-portada.png';

const Educacion = () => {
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
                    Educación
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            <b>TRANSFORMANDO LA CULTURA</b>
                        </p>
                        <p className='mt-4'>
                            Para ANEI es importante promover la formación académica de la juventud cafetera, es por esto, que este programa brinda un subsidio económico, mediante “becas estudiantiles” que se le entrega a los hijos e hijas de productores, que busca apoyar a la generación y aplicación de nuevos conocimientos, incrementando la tasa de inclusión generacional.
                        </p>
                        <p className='mt-4'>
                            * Desde 2011 hasta la fecha, hemos apoyado a más de 200 jóvenes en su matrícula universitaria.
                        </p>
                        <p>
                            * Desde 2014, entregamos más de 40 paneles solares a escuelas rurales.
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
                <img src={education_portada} alt="Educación" width={600}/>
            </div>
        </>
    );
};

export default Educacion;
