import React        from 'react';
import portada      from '../../assets/responsabilidad-ambiental/fuego-portada.jpg';

const Fuego = () => {
    return (
        <>
            <div
                className='flex justify-center h-[450px]'
                style={{
                    width: '60%'
                }}
            >
                <img src={portada} alt="Fuego" width={600}/>
            </div>
            <div className='mr-8 ml-12 h-[85vh]' style={{
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
                    Earth
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            Tenemos que estar agradecidos con el sol por la luz que emite a nuestro medio ambiente. El sol, las estrellas y la luna son seres del universo que juegan un papel muy importante en la determinación del ciclo de reproducción de la tierra.
                        </p>
                        <p className='mt-4'>
                            El cuidado del fuego, de la luz, es a través del pensamiento, la meditación y la fuerza espiritual, lo que permite que se cumplan todos los mandatos de Serankua. ANEI, como parte de la filosofía del equilibrio, busca preservar el origen, el pensamiento y las costumbres para cumplir la misión. Por esta razón, en ciertas épocas del año, durante cada ciclo lunar, los Mamos en la comunidad honran al universo con tributos, pagos, rituales, ceremonias y bailes.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fuego;
