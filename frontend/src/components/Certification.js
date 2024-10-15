import React, { useState, useEffect }           from 'react';
import certification_1_img                      from '../assets/certificaciones_1.png';
import certification_2_img                      from '../assets/certificaciones_2.jpg';

const Certification = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const imgElement = document.getElementById('certification-image');
            const rect = imgElement.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section>
            <img
                id="certification-image"
                src={certification_1_img}
                alt="Certificaciones"
                className={`py-16 transform transition-transform duration-500 ease-in-out ${
                    isVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
            />
            <div className='flex justify-center'>
                <img
                    src={certification_2_img}
                    alt="Certificaciones"
                    className=''
                />
            </div>
        </section>
    );
};

export default Certification;
