'use client'
import { Autonomousfeatures } from '@/app/(site)/utils/menu';
import Image from 'next/image';
import React from 'react';
import { FaSellcast } from 'react-icons/fa';

const Autonomous = () => {
    return (
        <div className='relative my-[100px]'>
            <Image src={'/Vector.png'} width={1000} height={500} alt='' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[30%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:top-[30%]  w-full md:w-[60%] ' />
            <section className="text-center py-12 container mx-auto font-poppins text-white  px-3">
                <div className='flex flex-col items-center relative'>
                    <h2 className="lg:text-xl text-lg font-bold mb-6 text-center text-white">True Experts in DAO development</h2>
                    <div className='w-[200px] h-[2px] absolute top-8   bg-white mx-auto'></div>
                    <h2 className="lg:text-xl text-lg font-bold mb-6 text-center text-white">Pioneering Decentralized Autonomous Organizations (DAOs)</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-8">
                    {Autonomousfeatures.map((feature, index) => (
                        <div className="group bg-white/10 drop-shadow-sm  border-blue-300 rounded-lg p-4 text-center shadow-md transition-transform transform-gpu hover:rotate-6 hover:scale-105 duration-300 w-full">
                            <div className="flex justify-center mb-4">
                                <div className="bg-blue-200 p-3 rounded-full">
                                    <FaSellcast className="text-primary text-3xl" />
                                </div>
                            </div>
                            <h5 className="lg:text-base text-sm font-semibold tracking-tight text-white mb-2">
                                {feature.title}
                            </h5>
                            <p className="font-normal text-white lg:text-base text-sm">
                                Experience direct peer-to-peer payments without intermediaries for
                                swifter, secure transactions.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Autonomous;
