"use client"
import React from 'react';
import DevCard from "@/app/(site)/component/company/devCard";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6 } from "@/app/(site)/component/company/svgs";
import Image from 'next/image';

const DevelopmentProcess = () => {
    return (
        <div
            className="bg-[#252839]"
        >
            <div
                className="relative container mx-auto px-4 md:pt-[100px] md:pb-[120px] lg:pb-[150px] pt-[60px] pb-[60px] font-jost ">
                <h2 className="sub_header_company mb-24 text-center">
                    Our Company's Development Process
                </h2>
                <div className="xl:flex xl:justify-center xl:items-center grid md:grid-cols-2 grid-cols-1 xl:flex-nowrap lg:gap-2 gap-5">
                    <div className={"md:-mt-[80px] -mt-10"}>
                        <div className="flex items-center gap-2 ">
                            <DevCard className={'hover:scale-105 duration-500'} customIcon={<Svg1 />} />
                            <Image src="/company/down.svg" height={50} width={110} alt="down" className='w-[40%]' />
                        </div>
                        <h3 className="company_process_card_title">Brainstorming</h3>
                        <p className='text-center'>Generating ideas, defining requirements, planning</p>
                    </div>
                    <div className={"md:mt-[80px] mt-4"}>
                        <div className="flex items-center gap-2 ">
                            <DevCard className={'hover:scale-105 duration-500'} customIcon={<Svg2 />} />
                            <Image src="/company/up.svg" height={50} width={110} alt="down" className='hidden xl:block w-[40%] ' />
                            <Image src="/company/down.svg" height={50} width={110} alt="down" className=' xl:hidden' />
                        </div>
                        <h3 className="company_process_card_title">Developing</h3>
                        <p className='text-center'>Generating ideas, defining requirements, planning</p>
                    </div>
                    <div className={"md:-mt-[80px] mt-4"}>
                        <div className="flex items-center gap-2 ">
                            <DevCard className={'hover:scale-105 duration-500'} customIcon={<Svg3 />} />
                            <Image src="/company/down.svg" height={50} width={110} alt="down" className='w-[40%]' />
                        </div>
                        <h3 className="company_process_card_title">Designing</h3>
                        <p className='text-center'>Creating visual concepts, PRD, wireframing, UI/UX</p>
                    </div>

                    <div className={"md:mt-[80px] mt-4"}>
                        <div className="flex items-center gap-2 ">
                            <DevCard className={'hover:scale-105 duration-500'} customIcon={<Svg4 />} />
                            <Image src="/company/up.svg" height={50} width={110} alt="down" className='hidden xl:block w-[40%]' />
                            <Image src="/company/down.svg" height={50} width={110} alt="down" className=' xl:hidden' />
                        </div>
                        <h3 className="company_process_card_title">Quality Assurance</h3>
                        <p className='text-center'>Testing functionality, bug fixing, optimization
                        </p>
                    </div>

                    <div className={"md:-mt-[80px] mt-4"}>
                        <div className="flex items-center gap-2 ">
                            <DevCard className={'hover:scale-105 duration-500'} customIcon={<Svg5 />} />
                            <Image src="/company/down.svg" height={50} width={110} alt="down" className='w-[40%]' />
                        </div>
                        <h3 className="company_process_card_title">Deployment</h3>
                        <p className='text-center'>Product Release, beta testing, delivery
                        </p>
                    </div>

                    <div className={"md:mt-[80px] mt-4"}>
                        <div className="flex items-center gap-2 ">
                            <DevCard className={'hover:scale-105 duration-500'} customIcon={<Svg6 />} />
                            <Image src="/company/down.svg" height={50} width={110} alt="down" className=' xl:hidden ' />
                        </div>
                        <h3 className="company_process_card_title">Maintenance</h3>
                        <p className='text-center'>Constant evaluation, monitoring, feedback, support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentProcess;