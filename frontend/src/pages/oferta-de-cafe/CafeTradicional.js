import React                        from 'react';
import cafe_tradicional             from '../../assets/oferta-de-cafe/cafe-tradicional.jpg';

const CafeTradicional = () => {
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
                    Tradicional
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <p className='text-[#766d67] font-semibold absolute top-0 left-8'>
                        Nuestra cosecha es 100% Orgánica, con sello de Comercio Justo, café producido por más de 700 productores del norte de Colombia, con una amplia gama de perfiles de taza, debido al tipo de relieve, acompañada de las buenas prácticas en finca y diferenciación de los suelos.
                    </p>
                    <p className='text-[#766d67] font-semibold absolute top-32 left-8 mt-2'>
                        En ANEI ofrecemos una amplia variedad, diferentes opciones de acuerdo a su perfil y necesidades de mezcla.
                    </p>
                    <p className='text-[#766d67] font-semibold absolute top-48 left-8 mt-2'>
                        Café FTO tradicional Es la mezcla tradicional de nuestro café Anei, con el café de distintos productores, esto nos facilita entregar un café con atributos de gran finura, encanto, seducción y dulzura; el aroma y sabor de este café va de; chocolate amargo, Panela, Cítricos, almendra molida, frutos rojos, entre otras características propias de la Sierra, esto gracias a las buenas prácticas que realiza cada productor.
                    </p>
                </div>
            </div>
            <div
                className='flex flex-col'
                style={{
                    width: '60%'
                }}
            >
                <img src={cafe_tradicional} alt="Café Tradiconal" width={700}/>
            </div>
        </>
    );
};

export default CafeTradicional;
