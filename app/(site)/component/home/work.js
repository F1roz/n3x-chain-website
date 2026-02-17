'use client'
import Image from 'next/image';
import React from 'react';
import { works } from '../../utils/menu';

const Work = () => {

    return (
        <div className='2xl:pb-[200px] md:pb-[100px] pb-[60px]'>
            <Image src={'/Vector.png'} width={1000} height={500} alt='vc' className='absolute top-[1%] -z-10 h-[20%] md:top-[10%]  w-full md:w-[60%] ' />
            <div className='relative z-10 '>
                <h1
                    className="jost_header"
                    style={{
                        backgroundImage: 'linear-gradient(160deg, rgba(31, 235, 176, 0.7), rgba(48, 211, 206, 0.7), rgba(6, 156, 253, 0.7))',
                    }}
                >
                    HOW WE WORK ?
                </h1>
                <div className='containers z-20  pb-10'>
                    <h2 className='heading2 z-20  pt-[50px] '>Our Working Process</h2>
                    <div className='w-full grid xl:gap-10 gap-5 z-20 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 '>
                        {
                            works?.map((item, index) => (
                                <div key={index} className='xl:mt-[71px] md:[50px] mt-8 z-20  flex flex-col items-center sm:items-start  w-[80%] mx-auto'>
                                    <h1 className='text-[#0C9FF3] z-20  lg:text-[105px] sm:text-[80px] text-[60px]  lg:leading-[157px]'>{item?.num}</h1>
                                    <button className='px-8 py-[2px] z-20  bg-[#2DC7CD] text-black font-jost'>{item?.btn}</button>
                                    <p className='text-sm font-jost  mt-6 tracking-[.5px] leading-[21px] text-center sm:text-start text-[#FFFFFF]/80'>{item?.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Work;
