import React from 'react';
import CompanyHeading from './heading';
import Image from 'next/image';

const Featurte = () => {
    return (
        <div className=' relative font-jost'>
            <Image src={'/Ellipse6.png'} width={900} height={800} alt='shadow image' className='absolute top-0 left-0 -z-10' />
            <div className='container mx-auto px-4 xl:px-0 '>
                <CompanyHeading
                    subtitle={"Our Features"}
                    title={"N3X Chain Exclusive"}
                />
                <div className='xl:mt-[88px] md:mt-10 mt-8 flex lg:flex-row flex-col  2xl:gap-[64px] x:gap-10 gap-8'>
                    <div className='lg:w-3/12 w-full  '>
                        <div className='flex flex-col gap-5'>
                            <div className='w-full relative'>
                                <Image src={'/line.png'} width={600} height={500} alt='line ' className='w-full' />
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Exceptionally Responsive
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>Through meticulous optimization we ensure flawless responsiveness.</p>
                            </div>
                            <div className='w-full relative'>
                                <Image src={'/line.png'} width={600} height={500} alt='line ' className='w-full' />
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    SEO Optimized
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>Our tactics are precisely constructed to ensure that your business occupies a prominent position at the peak of internet visibility.</p>
                            </div>
                            <div className='w-full relative'>
                                <Image src={'/line.png'} width={600} height={500} alt='line ' className='w-full' />
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Well Documented
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>We maintain clear documentation for effective collaboration and project clarity.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-6/12 w-full overflow-hidden rounded-[10px] '>
                        <div className='gradient-border h-full'>
                            <Image src={'/feature.png'} width={600} height={500} alt='line ' className='w-full h-full' />
                        </div>
                    </div>
                    <div className='lg:w-3/12 w-full '>
                        <div className='flex flex-col gap-5'>
                            <div className='w-full relative'>
                                <Image src={'/line.png'} width={600} height={500} alt='line ' className='w-full rotate-180' />
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    High-Quality Code
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>Our developers diligently adhere to industry best practices, delivering high-quality code.</p>
                            </div>
                            <div className='w-full relative'>
                                <Image src={'/line.png'} width={600} height={500} alt='line ' className='w-full rotate-180' />
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Quality Assurance
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>Our quality assurance is a relentless pursuit of flawlessness in every project.</p>
                            </div>
                            <div className='w-full relative'>
                                <Image src={'/line.png'} width={600} height={500} alt='line ' className='w-full rotate-180' />
                                <h3 class="xl:text-2xl text-[18px] font-semibold text-gradient xl:mt-4 mt-2">
                                    Maintenance
                                </h3>
                                <p className='text-base leading-[24px] font-poppins mt-2'>We go the extra mile to keep your digital ecosystem running smoothly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featurte;