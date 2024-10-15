import React                            from 'react';
import comercio_justo_portada           from '../../assets/responsabilidad-social/comercio-justo-portada.jpg';

const ComercioJusto = () => {
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
                    Comercio
                    Justo
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            El objetivo principal del comercio justo es ayudar a los pequeños agricultores a mejorar su calidad de vida y garantizar su bienestar en el futuro.
                        </p>
                        <p className='mt-4'>
                            Por medio de esta certificación, se recibe una bonificación adicional del precio del café Anei. Este bono se utiliza para cofinanciar proyectos de inversión social que se aprueban en una asamblea general, donde los miembros priorizan las necesidades de las comunidades.
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
                <img src={comercio_justo_portada} alt="Comercio Justo" width={600}/>
            </div>
        </>
    );
};

export default ComercioJusto;
