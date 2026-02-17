'use client'
import { services } from '../../utils/menu';
import Button from '../common/button';
import Image from 'next/image';

const Offer = () => {

    return (
        <div className=''>
            <Image src={'/Vector.png'} width={1000} height={500} alt='vc' className='absolute -z-10  md:bottom-[45%] w-full  md:w-[45%]  left-0 md:h-[25%] top-[10%] md:top-[30%] h-[30%] ' />
            <div className='relative flex w-full flex-col lg:flex-row  z-10  '>
                <div className=' w-full 2xl:h-[100vh] xl:h-[95vh] z-20  '>
                    <h1
                        className="jost_header"
                        style={{
                            backgroundImage: 'linear-gradient(160deg, rgba(31, 235, 176, 0.7), rgba(48, 211, 206, 0.7), rgba(6, 156, 253, 0.7))',
                        }}
                    >
                        WHAT WE <br className="lg:flex hidden" /> OFFER
                    </h1>
                    <div className='2xl:ps-[246px] lg:ps-10 md:ps-5 ps-3 z-20'>
                        <h2 className='heading2 2xl:pt-[110px] pt-[75px] sm:mt-[50px] lg:pt-[120px] xl:pt-[120px]'>Our Best Services</h2>
                        <div className='lg:mt-[100px] mt-10 lg:w-[45%] w-[95%] z-20 md:w-[70%]'>
                            <p className='paragraph1 !font-poppins z-20 md:mb-[50px] md:mt-[28px] mt-5 mb-7'>Lorem ipsum dolor sit amet consectetur. Viverra duis dolor viverra et adipiscing massa. Sed dui sed justo aliquet purus tempus. Senectus tempor cursus sodales porttitor vitae ullamcorper aliquet. Nunc nisl sed enim laoreet duis.
                            </p>
                            <Button name={'Get a Quote'} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  z-40  gap-3 font-jost p-8 xl:w-[650px] lg:w-[550px] text-white  lg:absolute right-0 mt-4 lg:mt-0 ">
                    {services.map((service, index) => (
                        <div key={index} className="flex z-20  flex-col items-center justify-center gap-2 p-4 bg-[#6A6BA8]/30 xl:h-[235px] h-[160px]  hover:shadow-lg transition-shadow duration-300">
                            <Image src={service?.icon} width={500} height={400} alt='icons' className='xl:w-[50px] xl:h-[50px] w-[35px] h-[35px] z-20 ' />
                            <h3 className="xl:text-base z-20  text-xs font-bold text-center">{service?.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <Image src={'/Ellipse2.png'} width={1000} height={500} alt='el' className='absolute h-[40%] w-full  md:w-[50%] md:h-[30%] md:right-0 md:bottom-[50%] -z-10 ' />
        </div>
    );
};

export default Offer;