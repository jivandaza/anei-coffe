import React                    from 'react';
import identidad_cultural       from '../../assets/conocenos/identidad-cultural.jpg';
import desarrollo_comunidad     from '../../assets/conocenos/desarrollo-comunidad.jpg';
import armonia_naturaleza       from '../../assets/conocenos/armonia-naturaleza.jpg';

const HaciaDondeVamos = () => {

    const data = [
        {
            image: identidad_cultural,
            title: 'Identidad Cultural',
            text: 'Ser productor de la Sierra Nevada de Santa Marta, es tener un estilo de vida que protege al medio ambiente, cuidar los recursos naturales, agradecer a la madre tierra por sus frutos y reconocer el valor de compartir en comunidad como pilar fundamental para vivir en armonía.'
        },
        {
            image: desarrollo_comunidad,
            title: 'Desarrollo en Comunidad',
            text: 'El compromiso social que tiene la organización es superar cada reto, brindar la oportunidad de superarse a cada uno de los asociados, mejorar su calidad de vida sin perder la identidad, sus tradiciones y costumbres, Buscando construir cada día una sociedad más justa, respetuosa y equitativa que garantice un mundo mejor para todos.'
        },
        {
            image: armonia_naturaleza,
            title: 'En armonía con la Naturaleza',
            text: 'En ANEI, somos guardianes de la naturaleza, a través de nuestras prácticas ancestrales y culturales protegemos el medio ambiente. Estamos en la constante tarea de generar desarrollo en equilibrio con la naturaleza.'
        }
    ];

    return (
        <div className='container mx-auto flex flex-col items-center'>
            <div className='w-3/4'>
                <p className='text-3xl text-[#766d67] font-semibold'>Hacia donde vamos</p>
                <p className='mt-4 text-[#766d67] font-semibold'>Buscamos a través del café compartir un mensaje al mundo, sobre la importancia de cuidar y respetar el origen de la vida, que es la naturaleza, el fortalecimiento cultural de los pueblos indígenas y el empoderamiento de las comunidades, hombres, mujeres y jóvenes, que han encontrado en el café, un factor dinamizador que contribuye a que familias caficultoras tengan una mejor calidad de vida hoy y sus futuras generaciones.</p>
            </div>
            <div className='flex justify-around gap-2 w-full mt-8'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='flex flex-col w-1/3 text-[#766d67] font-semibold' key={item.title+index}>
                                <img src={item.image} alt={item.title} />
                                <p className='mt-2 text-2xl'>{item.title}</p>
                                <p className='mt-3'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HaciaDondeVamos;
