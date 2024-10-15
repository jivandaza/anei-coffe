import React, { useState } from 'react';

const NewsLetter = () => {

    const [message, setMessage] = useState('');

    const handleRegister = () => {
        setMessage('Gracias por tu mensaje. Ha sido enviado.');
    };

    return (
        <section className='py-8'>
            <div className='flex justify-center gap-6 pb-3'>
                <input
                    type="text"
                    placeholder='NEWSLETTER'
                    className='outline-none border-b-2 border-[#593d2b] px-2 py-3 font-semibold w-1/3 focus:text-[#ceb011] focus:border-hidden focus:shadow-md'
                />
                <button
                    className='px-4 py-2 bg-[#ceb011] text-white font-semibold tracking-wider'
                    onClick={handleRegister}
                >
                    REGISTRAR
                </button>
            </div>
            <div className='flex justify-center'>
                <p id='msg-newsletter' className='text-[#593d2b] font-semibold'>
                    {message}
                </p>
            </div>
        </section>
    );
};

export default NewsLetter;
