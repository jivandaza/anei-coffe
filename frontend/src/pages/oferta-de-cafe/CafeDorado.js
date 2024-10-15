import React            from 'react';
import cafe_dorado      from '../../assets/oferta-de-cafe/cafe-mujeres.jpg';

const CafeDorado = () => {
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
                    Dorado del Perijá
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8'>
                        <p className='text-[#766d67] font-semibold'>
                            La Serranía del Perijá con sus características y atributos en taza: frutal, caramelo, dulce, chocolate, avellana hierbas frescas, clavo de olor panela, lima, con residual limpio, Acidez media crítica, cuerpo medio (ligero, seco) y balanceado.
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
                <img src={cafe_dorado} alt="Café Orígenes" width={700}/>
            </div>
        </>
    );
};

export default CafeDorado;
