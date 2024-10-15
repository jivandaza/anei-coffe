import React        from 'react';
import toastr       from 'toastr';

const Asociados = () => {

    const handleBtn = () => {
        toastr.warning('El documento no esta disponible');
    }

    return (
        <div className='flex justify-center items-center h-[70vh] w-full'>
            <div>
                <h2 className='text-[#4497D3]'
                    style={{
                        fontSize: '70px',
                        lineHeight: '60px',
                        fontWeight: 800,
                        textAlign: 'center',
                        fontFamily: 'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                    }}>
                    Asociados
                </h2>
                <p className='mt-16 text-[#766d67] font-semibold'>
                    Aquí puedes ingresar y conocer el grupo de ASOCIADOS ANEI.
                </p>
                <div className='mt-4 flex justify-center'>
                    <button
                        className='w-56 py-2 px-4 bg-[#e0c432] text-white font-semibold'
                        onClick={handleBtn}
                    >
                        LISTADO DE ASOCIADOS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Asociados;
