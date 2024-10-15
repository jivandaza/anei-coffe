import React                        from 'react';
import { IoThumbsUpOutline }        from 'react-icons/io5';
import { TiDocumentText }           from 'react-icons/ti';
import { TfiMoney }                 from 'react-icons/tfi';
import { FaCheck }                  from 'react-icons/fa';
import { CiUser }                   from 'react-icons/ci';
import { IoDocumentTextOutline }    from 'react-icons/io5';
import { IoStatsChart }             from 'react-icons/io5';
import { MdSsidChart }              from 'react-icons/md';
import { TiFlowMerge }              from 'react-icons/ti';
import { CiCoffeeCup }              from 'react-icons/ci';
import toastr                       from 'toastr';

const Documentos = () => {

    const documentos = [
        {
            icon: <IoThumbsUpOutline />,
            label: 'CERTIFICADO DE ANTECEDENTES'
        },
        {
            icon: <TiDocumentText />,
            label: 'CERTIFICADO CUMPLIMIENTO DE REQUISITOS'
        },
        {
            icon: <TfiMoney />,
            label: 'CERTIFICADO CUERPO DIRECTIVO E INGRESO'
        },
        {
            icon: <FaCheck />,
            label: 'ACTA DE AUTORIZACIÓN SOLICITUD DE CALIFICACIÓN'
        },
        {
            icon: <CiUser />,
            label: 'CERTIFICADO DE EXISTENCIA Y REPRESENTACIÓN LEGAL'
        },
        {
            icon: <IoDocumentTextOutline />,
            label: 'ACTA DE CONSTITUCIÓN'
        },
        {
            icon: <IoStatsChart />,
            label: 'ESTADO DE SITUACIÓN FINANCIERA 2023'
        },
        {
            icon: <MdSsidChart />,
            label: 'ESTADO DE RESULTADO 2023'
        },
        {
            icon: <TiFlowMerge />,
            label: 'CERTIFICADO JUNTA DIRECTIVA 2024'
        },
        {
            icon: <CiCoffeeCup />,
            label: 'ESTATUTOS ASOANEI'
        }
    ];

    const handleClickBtn = () => {
        toastr.warning('El documento no esta disponible');
    }

    const handleMouseEnterBtn = (e) => {
        const span = e.target.querySelector('span');
        if (span) {
            span.style.transition = 'transform 0.3s ease';
            span.style.transform = 'translateY(-5px)';
        }
    }

    const handleMouseLeaveBtn = (e) => {
        const span = e.target.querySelector('span');
        if (span) {
            span.style.transform = 'translateY(0)'; // Vuelve a su posición original
        }
    };

    return (
        <div className='flex flex-col w-full'>
            <div className='flex justify-center py-14 mb-8'>
                <h2 className='text-[#4497D3]'
                    style={{
                        fontSize: '70px',
                        lineHeight: '60px',
                        fontWeight: 800,
                        textAlign: 'center',
                        fontFamily: 'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                    }}>
                    Documentos ESAL
                </h2>
            </div>
            <div className='grid grid-cols-4 gap-1 w-full justify-items-center'>
                {
                    documentos.map((doc, index) => {
                        return (
                            <div className={`w-full max-w-xs pb-8 px-2 flex justify-center ${documentos.length % 4 !== 0 && index >= documentos.length - (documentos.length % 4) ? 'col-span-2' : ''}`} key={doc.label+index}>
                                <button
                                    className='flex flex-col justify-center items-center'
                                    onMouseEnter={(e) => handleMouseEnterBtn(e)}
                                    onMouseLeave={(e) => handleMouseLeaveBtn(e)}
                                    onClick={handleClickBtn}
                                >
                                    <div className='p-4 flex justify-center'>
                                        <span className='text-8xl text-[#e0c432]'>
                                            {doc.icon}
                                        </span>
                                    </div>
                                    <div className='h-12'>
                                        <p className='text-[#766d67] text-center font-semibold mt-4'>
                                            {doc.label}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Documentos;
