import React        from 'react';
import portada      from '../../assets/responsabilidad-ambiental/agua-portada.jpg';

const Agua = () => {
    return (
        <>
            <div
                className='flex justify-center h-[450px]'
                style={{
                    width: '60%'
                }}
            >
                <img src={portada} alt="Agua" width={600}/>
            </div>
            <div className='mr-8 ml-12 h-[80vh]' style={{
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
                    Watter
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            At <b>ANEI</b> we seek to protect water, because it is a living being, provider of life and animation of the universe. We talk to water, treat it with care, raise it. It is an esencial factor for the harvesting, conservation and reproduction of water resources. In order to continue the practices of ‘not polluting water’, we support our members so that they may have a biological filtration system.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Agua;
