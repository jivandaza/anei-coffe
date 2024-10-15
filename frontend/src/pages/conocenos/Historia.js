import React from 'react';
import history from '../../assets/conocenos/historia-portada.jpg';

const Historia = () => {

    const items = [
        { year: '1972', text: 'Sale a estudiar la primera mujer Indígena Arhuaca, Aurora María.' },
        { year: '1979', text: 'La Sierra Nevada fue declarada por la Unesco Reserva de la Biosfera, del hombre y de la humanidad.' },
        { year: '1982', text: 'Sale la misión capuchina de la Sierra Nevada.' },
        { year: '1991', text: 'Primer colegio en la comunidad de Yewrúa.'},
        { year: '1991', text: 'La constitución colombiana reconoce a los Indígenas como seres humanos.'},
        { year: '1995', text: 'Concertación con los líderes espirituales y autoridades indígenas para la creación de ANEI.'},
        { year: '1996', text: 'Primer año de cosecha. / Se inicia proyecto diversiﬁcado de Café.'},
        { year: '2007', text: 'Apertura dela sede administrativa y primer centro de acopio en Valledupar.'},
        { year: '2008', text: 'Primer acopio en Pueblo Bello.'},
        { year: '2010', text: 'Se obtiene Certificación FLO.'},
        { year: '2012', text: 'Construcción segundo Centro de Acopio en el municipio de Pueblo Bello.'},
        { year: '2012', text: 'Reconocimiento del Estado Colombiano, por el aporte a la comunidad.'},
        { year: '2016', text: 'Primera exportación directa hacia Canadá.'},
        { year: '2016', text: 'Certificación al primer Catador Q-Grader de la comunidad indígena.'},
        { year: '2017', text: 'El conocimiento de las cuatro comunidades indígenas de la Sierra Nevada es declarado Patrimonio Inmaterial de Nación Colombiana.'},
        { year: '2018', text: 'Presidente de Colombia ﬁrma Decreto de la Línea Negra, delimitación del territorio ancestral, límites donde está la gran ciudad espiritual, de las cuatro comunidades indígenas de la Sierra Nevada.'},
        { year: '2018', text: 'Adecuación de primeras secadoras en la organización.'},
        { year: '2018', text: 'Construcción tercer Centro de Acopio en el municipio de Codazzi.'},
        { year: '2018', text: 'Construcción Primera Biofábrica de abonos orgánicos “Zarinzuwa”.'},
    ];

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center'>
                <div className='w-2/3 text-[#4b3e36] font-semibold'>
                    <p>Hemos venido creciendo con el ánimo de mejorar nuestros procesos asegurando la calidad y trazabilidad del café, en los centros de Acopio tanto para el proceso como la casa de nuestros cafeteros donde se van a sentir seguros, un equipo que se prepara cada vez más para tener</p>
                    <p className='my-6 text-center text-2xl'>MEMORIAS DE NUESTRO TIEMPO:</p>
                </div>

                <div className='flex w-full relative group'>
                    <div className='w-2/4 p-6 flex flex-col items-end'>
                        <p className='italic text-[#1494d5]'>1917</p>
                    </div>
                    <div className='absolute top-0 right-1/2 border-l border-gray-400 h-full group-hover:border-yellow-500'>
                    </div>
                    <div className='w-2/4 p-6'>
                        <p className='text-lg text-[#766d67] font-semibold mb-4'>La misión capuchina llega a la Sierra Nevada.</p>
                        <img src={history} alt="" />
                    </div>
                </div>
                {
                    items.map((item, index) => {
                        if ((index+1) % 2 === 0 && (index+1) !== 1) {
                            return (
                                <div className='flex w-full relative group'>
                                    <div className='w-2/4 p-6 flex flex-col items-end'>
                                        <p className='italic text-[#1494d5]'>{item.year}</p>
                                    </div>
                                    <div className='absolute top-0 right-1/2 border-l border-gray-400 h-full group-hover:border-yellow-500'>
                                    </div>
                                    <div className='w-2/4 p-6'>
                                        <p className='text-lg text-[#766d67] font-semibold mb-4'>{item.text}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='flex w-full relative group'>
                                    <div className='w-2/4 p-6 flex flex-col items-end'>
                                        <p className='text-lg text-[#766d67] font-semibold mb-4'>{item.text}</p>
                                    </div>
                                    <div className='absolute top-0 right-1/2 border-l border-gray-400 h-full group-hover:border-yellow-500'>
                                    </div>
                                    <div className='w-2/4 p-6'>
                                        <p className='italic text-[#1494d5]'>{item.year}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Historia;
