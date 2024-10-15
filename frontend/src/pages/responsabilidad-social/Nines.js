import React from 'react';
import nines_portada from "../../assets/responsabilidad-social/ninos-portada.png";

const Nines = () => {
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
                    Niñes
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            En ANEI tememos la finalidad de brindar apoyos que garantice a los niños y niñas en su pleno crecimiento una mejor condición de vida: Con proyectos que fomente creación de escuelas rurales, entrega de elementos que ayuden a desarrollar sus capacidades cognitivas y creativa.
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
                <img src={nines_portada} alt="Niñes" width={600}/>
            </div>
        </>
    );
};

export default Nines;
