import Image from 'next/image';
import React from 'react';

const ExploringCard = ({data}) => {
    return (
        <div className='relative cursor-pointer hover:scale-110 transition-transform duration-300'>
            <div className='lg:w-[238px] lg:h-[238px] w-[200px]  h-[200px] border rounded-[15px] z-0 bg-white/10 drop-shadow-sm text-black rotate-45 border-blue-400/50 absolute'></div>
            <div className='lg:w-[238px] lg:h-[238px] w-[200px] h-[200px] flex flex-col items-center '>
                <Image src={data?.icon} width={500} height={400} alt='image' className='w-[70px] h-[70px] z-10' />
                <h2 className='text-center lg:text-xl text-base mt-6 font-bold w-[200px] text-white z-10'>{data?.title}</h2>
            </div>
        </div>
    );
};

export default ExploringCard;
