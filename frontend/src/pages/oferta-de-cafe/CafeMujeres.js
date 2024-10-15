import React                    from 'react';
import cafe_mujeres             from '../../assets/oferta-de-cafe/cafe-mujeres.jpg';

const CafeMujeres = () => {
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
                    Mujeres
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8'>
                        <p className='text-[#766d67] font-semibold'>
                            Es el resultado de un proceso de aprendizajes y experiencias de las mujeres líderes que buscan llegar al empoderamiento en cada una de nuestras regiones para generar más oportunidades para sus familias y crecer como personas trabajando en comunidad.
                            ANEI consciente de que las mujeres indígenas y campesinas son pilares del sector cafetero porque forjan “con amor y pasión el trabajo en familia“ se creó un programa de mujeres caficultoras que integra a madres cabeza de Familia de las 67 regiones donde tenemos presencia, cumpliendo con el objeto de garantizar el empoderamiento en la mujer y el relevo generacional en las jóvenes, a la vez fortalecer la relación con nuestras productoras y el aprendizaje continuo integrándolas y resaltándolas dentro de la organización. En la actualidad contamos con 201 mujeres Indígenas y Campesinas.
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
                <img src={cafe_mujeres} alt="Café Mujeres" width={700}/>
            </div>
        </>
    );
};

export default CafeMujeres;
