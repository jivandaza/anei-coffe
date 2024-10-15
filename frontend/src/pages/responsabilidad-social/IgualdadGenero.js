import React                        from 'react';
import igualdad_genero_portada      from '../../assets/responsabilidad-social/igualdad-de-genero-portada.jpg';

const IgualdadGenero = () => {
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
                    Igualdad de
                    Genero
                </h2>
                <div className='h-[90vh]'>
                    <div className='flex h-[82px] mt-8 relative' style={{
                        backgroundImage: "url('/img/backline.jpg'",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                            <p>
                                <b>CUANDO SE EMPODERA UNA MUJER SE EMPODERA UNA COMUNIDAD.</b>
                            </p>
                            <p className='mt-4'>
                                Considerando la importancia del trabajo de la mujer, en el área de la caficultura orgánica en Colombia, la asociación desarrolló un “Programa de Mujeres” en alianza con entes gubernamentales e internacionales, que busca garantizar la participación y el bienestar de la madre cafetera, cabeza de familia, indígena y campesina en esta zona del país, así mismo busca mejorar la calidad del producto a lo largo de su cadena de valor, y en este sentido procura generar una estrecha relación con la productora integrándose como uno de los pilares estratégicos de la organización. En la actualidad se cuenta con 201 mujeres asociadas de familias indígenas y campesinas, los cuales están enmarcados en la asociatividad, el comercio justo, la agricultura orgánica y sostenible.
                            </p>
                            <p className='mt-4'>
                                La mujer tiene una inmensa importancia en la cultura cafetera, por lo que ANEI ha llevado a cabo los siguientes asuntos:
                            </p>
                            <p className='mt-4'>
                                * Fomento de la reunión anual de género.
                            </p>
                            <p>
                                * Integración del grupo femenino para comercializar sus cafés de manera independiente y diferenciada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='flex justify-center'
                style={{
                    width: '60%'
                }}
            >
                <div>
                    <img src={igualdad_genero_portada} alt="Igualdad de Genero" width={600} height={400} />
                </div>
            </div>
        </>
    );
};

export default IgualdadGenero;
