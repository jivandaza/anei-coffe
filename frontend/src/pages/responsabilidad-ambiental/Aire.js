import React            from 'react';
import portada         from "../../assets/responsabilidad-ambiental/aire-portada.jpg";

const Aire = () => {
    return (
        <>
            <div
                className='flex justify-center h-[450px]'
                style={{
                    width: '60%'
                }}
            >
                <img src={portada} alt="Aire" width={600}/>
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
                    Aire
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                        <p>
                            La Ley serankua es universal, se aplica a todos, independientemente de las fronteras, el color, la raza o la cultura; porque todos respiramos aire, bebemos agua y nos alimentamos, usamos lo que nos dejó la naturaleza. De esta manera, somos responsables de cumplir con los componentes de no contaminar el aire, no fumigar con productos químicos y cualquier actividad que pueda resultar dañina para el aire.

                        </p>
                        <p className='mt-4 text-xl italic'>
                            El aire es lo que nos permite respirar,
                            lo que nos permite vivir esa sensación
                            natural que limpia como el aroma de cada
                            taza de café que disfrutamos.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aire;
