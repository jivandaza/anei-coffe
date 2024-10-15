import React        from 'react';
import portada      from '../../assets/responsabilidad-ambiental/tierra-portada.jpg';

const Tierra = () => {
    return (
        <>
            <div
                className='flex justify-center h-[450px]'
                style={{
                    width: '60%'
                }}
            >
                <img src={portada} alt="Tierra" width={600}/>
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
                            It is the first feminine element. For that reason, for <b>ANEI</b> mother earth is the beginning of existence; since the natives are the guardians of balance, energy and everything we do on mother earth (SEYNEKUN), Everything is in harmony, keeping the natural order of the planet. ANEI is there to watch and protect the ecological and the human, where it offers respect and solidarity so that there is well-being and we can live in harmony with nature.
                        </p>
                        <p className='mt-4'>
                            At <b>ANEI</b>, we continue to reinforce the land preservation plan through a system of agroforestry under shade; where many native trees of the region are planted around the coffee crop, which allows all the organic matter of the leaves to protect the soil. Therefore, the space where the crop remains always has a vegetable cover plus it provides nutrients and gives the coffee tree different organoleptic characteristics (which translate into different cup profiles).
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tierra;
