import React from 'react';
import CompanyHeading from './heading';
import Button from '../common/button';
import Image from 'next/image';

const MeetTeam = () => {
    return (
        <div className=' relative font-jost mt-[130px]'>
            <Image src={'/Ellipse6.png'} width={900} height={800} alt='shadow image' className='absolute h-[900px] -top-20 left-0 -z-10' />
            <div className='container mx-auto px-4 xl:px-0 '>
                <CompanyHeading
                    subtitle={"Meet Our Energetic Team"}
                    title={"Our team comprises experts, innovators, and achievers!"}
                />
                <p className='2xl:w-[50%] xl:w-[55%] lg:w-[60%] mx-auto text-base leading-[24px] font-poppins mt-4 text-center'>N3X Chain is a family of forward-looking top industry talents. Whether its businesses, SMEs, or even startups, our committed teams are ready to develop.</p>
                <div className='xl:mt-[88px] md:mt-10 mt-8'>
                    <div className="rounded-[8px] px-[2px] py-[2px] bg-gradient-to-r from-[#1FEBB0] via-[#30D3CE] to-[#069CFD] ">
                        <div className='bg-[#252839] rounded-[6px] flex justify-center py-[78px]'>
                            <div className='w-[520px] flex flex-col items-center '>
                                <h2 className='text-[48px]  font-semibold text-[#1FEBB0]'>We’re Hiring</h2>
                                <p className=' text-base leading-[24px] font-poppins mt-4 text-center md:mb-[48px] mb-8'>Are you a team player hoping to make a name for yourself in the workplace? So join us now.</p>
                                <Button name={'See Current openings'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetTeam;