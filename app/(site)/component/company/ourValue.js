import React from 'react';
import CompanyHeading from './heading';
import Image from 'next/image';

const OurValue = () => {
    return (
        <div className=' relative font-jost mt-[130px]'>
            <Image src={'/Ellipse4.png'} width={800} height={700} alt='shadow image' className='absolute h-[800px] w-1000px] -bottom-[200px] right-0 -z-10' />
            <div className='container mx-auto px-4 xl:px-0 '>
                <CompanyHeading
                    subtitle={"Our Values"}
                    title={"The Pillars of our success "}
                />
                <div className='xl:mt-[88px] lg:w-[1070px] mx-auto md:mt-10 mt-8 grid grid-cols-1 lg:grid-cols-2 2xl:gap-[64px] x:gap-10 gap-8'>
                    <div className='relative'>
                        <div className='flex items-center sm:gap-[30px] gap-5'>
                            <div className='sm:min-w-[124px] min-w-[100px] h-[140px]'>
                                <Image src={'/1.png'} width={600} height={500} alt='line ' className='w-full h-full' />
                            </div>
                            <div>
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Exceptionally Responsive
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>We demand the best, infusing quality into every endeavor we pursue.</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='flex items-center sm:gap-[30px] gap-5'>
                            <div className='sm:min-w-[124px] min-w-[100px] h-[140px]'>
                                <Image src={'/2.png'} width={600} height={500} alt='line ' className='w-full h-full' />
                            </div>
                            <div>
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Customer-Centric Focus
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>Our client's needs are paramount, guiding every decision and action we take.</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='flex items-center sm:gap-[30px] gap-5'>
                            <div className='sm:min-w-[124px] min-w-[100px] h-[140px]'>
                                <Image src={'/3.png'} width={600} height={500} alt='line ' className='w-full h-full' />
                            </div>
                            <div>
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Adaptability and Growth
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>We thrive on change, seeing it as the gateway to continuous personal and organizational growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='flex items-center sm:gap-[30px] gap-5'>
                            <div className='sm:min-w-[124px] min-w-[100px] h-[140px]'>
                                <Image src={'/4.png'} width={600} height={500} alt='line ' className='w-full h-full' />
                            </div>
                            <div>
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Endurance and Success
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>We remain firm in the face of difficulty, coming out stronger and victorious.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValue;