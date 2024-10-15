import React            from 'react';
import contact_img      from '../assets/contacto.jpg';

const Contact = () => {
    return (
        <section className='py-8 flex flex-row'>
            <div className='w-6/12'>
                <img src={contact_img} alt="contact" className=''/>
            </div>
            <div className='w-6/12 px-10 py-16 bg-[#593c2a]'>
                <form action="" className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder='Nombre'
                        className='p-2.5 outline-none focus:text-[#ceb011]'
                        required
                    />
                    <input
                        type="email"
                        placeholder='E-mail'
                        className='p-2.5 outline-none focus:text-[#ceb011]'
                        required
                    />
                    <input
                        type="number"
                        placeholder='Teléfono'
                        className='p-2.5 outline-none focus:text-[#ceb011]'
                        required
                    />
                    <textarea
                        name="" id="" cols="20" rows="7"
                        className='p-2.5 outline-none focus:text-[#ceb011]'
                        placeholder=''
                    >

                    </textarea>
                    <button
                        className='self-start flex-row px-4 py-2 bg-[#ceb011] text-white font-semibold tracking-wider'
                    >
                        ENVIAR
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
