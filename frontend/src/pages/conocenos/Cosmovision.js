import React            from 'react';
import portada          from '../../assets/conocenos/cosmovision-portada.jpg';

const Cosmovision = () => {
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
                    Cosmovisión
                </h2>
                <div className='flex h-[72px] mt-8 relative' style={{
                    backgroundImage: "url('/img/backline.jpg'",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className='absolute top-0 left-8 text-[#625a54] font-semibold'>
                        <p>
                            Desde el principio del universo todos los seres que habitamos en este planeta tenemos la misión en que las culturas tenemos que vivir en armonía, paz y equilibrio con la naturaleza con el fin de lograr un bienestar general. <b>Cosmovisión Arhuaca ANEI</b> guarda nuestros principios culturales, dejados a nosotros los hermanos mayores por nuestros padres <b>Kaku Serankwa</b> y <b>Arwawiku</b> desde el inicio cuando todo era pensamiento, hoy todos estos principios son nuestra <b>Ley de Origen</b>. Que significa armonizar nuestras energías con todos los elementos de nuestra madre tierra <b>Seynekun</b>, quien representa lo femenino, la fertilidad de la cual tomamos los fluidos para equilibrarnos haciendo nuestros rituales que conectan con lo material y lo espiritual el mundo visible e invisible y ese camino es el que representa la unión de todos los seres vivos hacia el camino de la verdad Tanuriwun para trascender cumpliendo con nuestro Kunsamu hasta después de la muerte.
                        </p>
                        <p className='mt-4'>
                            Nuestra cosmovisión como comunidades indígenas es ser guardianes del universo y velar por su protección.
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
                <img src={portada} alt="Cosmovisión" width={700}/>
            </div>
        </>
    );
};

export default Cosmovision;
