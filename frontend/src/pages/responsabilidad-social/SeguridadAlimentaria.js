import React                            from 'react';
import seguridad_alimentaria_portada    from  '../../assets/responsabilidad-social/seguridad-alimentaria-portada.jpg';

const SeguridadAlimentaria = () => {
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
                    Seguridad
                    Alimentaria
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            Se fortalece la producción agrícola local mediante la creación de huertas en donde puedan acceder a los alimentos suficientes, para cubrir las necesidades alimentarias de cada una de las familias en las comunidades.
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
                <img src={seguridad_alimentaria_portada} alt="Seguridad Alimentaria" width={600}/>
            </div>
        </>
    );
};

export default SeguridadAlimentaria;
