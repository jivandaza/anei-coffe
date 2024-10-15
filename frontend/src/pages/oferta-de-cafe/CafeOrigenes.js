import React                    from 'react';
import cafe_origenes            from '../../assets/oferta-de-cafe/cafe.jpg';

const CafeOrigenes = () => {
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
                    Café
                    Orígenes
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8'>
                        <p className='text-[#766d67] font-semibold'>
                            Desde los más secreto de cada una de las regiones de la Sierra Nevaday Serranía del Perijá se buscaron las tazas más características que presentan cualidades únicas y atributos especiales, aprovechando la posición estratégica que cubre la montaña más grande cerca al mar (Sierra Nevada de Santa Marta) y por lo tanto sus distintos microclimas, en los cafés se pueden ver diversas comunidades indígenas con sus características socio-culturales. (Arhuacos/Koguis/Wiwas/Kankuamos).
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
                <img src={cafe_origenes} alt="Café Orígenes" width={700}/>
            </div>
        </>
    );
};

export default CafeOrigenes;
