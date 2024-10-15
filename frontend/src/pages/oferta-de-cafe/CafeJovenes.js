import React                from 'react';
import cafe_jovenes         from '../../assets/oferta-de-cafe/cafe-mujeres.jpg';

const CafeJovenes = () => {
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
                    Jóvenes
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8'>
                        <p className='text-[#766d67] font-semibold'>
                            El programa de “<b>Caficultores jóvenes</b>” busca crear un ambiente propicio para el desarrollo sostenible y garantizar el relevo generacional en el campo, ofreciendo productos orgánicos, en especial café de excelente calidad. Jóvenes entres los 21 a los 35 años, son pequeños productores de café orgánico.
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
                <img src={cafe_jovenes} alt="Café Orígenes" width={700}/>
            </div>
        </>
    );
};

export default CafeJovenes;
