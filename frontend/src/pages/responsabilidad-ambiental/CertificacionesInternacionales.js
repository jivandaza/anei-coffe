import React from 'react';
import portada1 from "../../assets/responsabilidad-ambiental/certificacion-portada-1.jpg";
import portada2 from "../../assets/responsabilidad-ambiental/certificacion-portada-2.jpg";

const CertificacionesInternacionales = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <div
                    className='flex justify-center h-[450px]'
                    style={{
                        width: '60%'
                    }}
                >
                    <img src={portada1} alt="Certificación Internacional" width={600}/>
                </div>
                <div className='mr-8 ml-12 h-screen' style={{
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
                        International Certifications
                    </h2>
                    <div className='flex h-[72px] mt-8 relative' style={{
                        backgroundImage: "url('/img/backline.jpg'",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className='absolute top-0 left-8 text-[#766d67] font-semibold'>
                            <p>
                                ANEI has a handle on our cultural principles. It has been a great satisfaction to make our work of protecting mother earth known, since it is thanks to her, and the care we give to her, that we collect more than just a good harvest. We share our way of connecting life in harmony with nature, we have become more and more united by intertwining our knowledge in order to continue creating awareness; since it is everyone’s commitment to continue protecting our mother earth.
                            </p>
                            <p className='mt-4'>
                                Taking into account our principles, which have been applied ancestrally, it is very easy for us to comply with the organic and fair trade standards demanded by Kiwa BCS-Oko¬ Garantie GmbH and FAIRTRAIDE, meeting the standards of JAS, UE and USDA. In this way, we have succeeded in breaking the paradigms to achieve a direct relationship with the end consumers from different countries like: Japan, United States, Australia, New Zealand, Canada and some countries from the European Union.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-6'>
                <div className='mr-8 ml-12 h-full' style={{
                    width: '40%'
                }}>
                    <p className='text-[#766d67] font-semibold'>
                        In our view, everything is a tissue connected with the universe. For that reason, we have our four fundamental elements: earth, water, air and fire. Four are the cardinal points that connect the magnetic game of the universe’s energies. Four are the seymukes, children of spirit, who are chosen from birth by the Mamos, fulfilling a mission that keeps their thoughts and feelings of innocence away from evil, in order to sustain the energies that balance the universe. From these children, the strength of our principles germinates each time: four Koguis, Kankuamos, Wiwas and Arhuacos ethnic groups who are guardians of our Mother Earth. Since the beginning, from four women, one was chosen as mother of all there is in: Gunnekun (golden earth), Munnekun (red earth), Bunnekun (white earth) and Seynekun (woman who gestated the seed of life, initiating the universe). Global warming is a natural phenomenon that is affecting all species of earth. For that reason, the Arhuacos, taking into account our Cosmovision or Law of Origin, divide the care of our Mother Earth into the four essential elements that connect with the tangible world. In this way, from our thinking, ANEI unites us to continue preserving our planet.
                    </p>
                </div>
                <div
                    className='flex justify-center'
                    style={{
                        width: '60%'
                    }}
                >
                    <img src={portada2} alt="Certificación Internacional" width={600}/>
                </div>
            </div>
        </div>
    );
};

export default CertificacionesInternacionales;
