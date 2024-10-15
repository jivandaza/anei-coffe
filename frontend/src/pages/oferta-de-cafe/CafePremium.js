import React                    from 'react';
import cafe_premium             from '../../assets/oferta-de-cafe/cafe-premium.jpg';

const CafePremium = () => {
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
                    Premium
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8'>
                        <p className='text-[#766d67] font-semibold'>
                            Gracias a la labor logística y de calidad del personal especializado de los centros de acopio separamos los más selecto de los cafés de algunos de nuestros productores que por sus dedicación y esmero han avanzado en buenas prácticas agrícolas que logran una alta calidad en el grano que se traduce en excelencia en sus tazas.
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
                <img src={cafe_premium} alt="Café Orígenes" width={700}/>
            </div>
        </>
    );
};

export default CafePremium;
