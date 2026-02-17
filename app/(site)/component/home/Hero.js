'use client';
import Button from '../common/button';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative">
            <Image src={'/Ellipse.png'} width={1000} height={500} alt='img' className='absolute -z-10 top-0 left-0' />
            <Image src={'/Ellipse2.png'} width={1000} height={500} alt='img' className='absolute right-0 top-[300px] 2xl:top-20 -z-10' />
            <div className='relative containers xl:pt-[255px] xl:pb-[224px] md:pt-[200px] md:pb-[224px] pt-[120px] pb-[100px] font-jost'>
                <h1 className='long_header text-white'>
                    N3X Chain
                </h1>
                <h1 className='long_header text-[#1FEBB0] '>
                    Learn, Build, Innovate
                </h1>
                <p className='paragraph1 md:mb-[50px] md:mt-[28px] mt-5 mb-7 lg:w-[60%] z-10'>
                    Revolutionizing the Future: Unleashing the Power of Blockchain and AI with N3X Chain                </p>
                <Button name={'Get a Quote'} className="z-10" />
            </div>
        </div>
    );
};

export default Hero;
