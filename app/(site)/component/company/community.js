import Image from 'next/image';
import React from 'react';
const Community = () => {
    const socialMedia = [
        {
            name: 'Facebook',
            icon: '/fa.png',
            link: 'https://www.facebook.com'
        },
        {
            name: 'Linkedin',
            icon: '/in.png',
            link: 'https://www.linkedin.com'
        },
        {
            name: 'Discord',
            icon: '/di.png',
            link: 'https://www.discord.com'
        },
        {
            name: 'Twitter',
            icon: '/tw.png',
            link: 'https://www.twitter.com'
        },
        {
            name: 'Instagram',
            icon: '/insta.png',
            link: 'https://www.instagram.com'
        },
        {
            name: 'Gmail',
            icon: '/gm.png',
            link: 'https://www.gmail.com'
        },

    ]
    return (
        <div className='relative font-jost mt-[130px] md:mb-[220px] pb-[60px]'>
            <Image src={'/Ellipse6.png'} width={900} height={900} alt='shadow image' className='absolute -top-[200px]  left-0 -z-10 w-[1200px]' />
            <Image src={'/Ellipse2.png'} width={800} height={900} alt='shadow image' className='absolute w-[1200px]  md:-bottom-[800px] bottom-0 right-0 -z-10' />
            <div className='container mx-auto px-4 xl:px-0 '>
                <h2 className='xl:text-[48px] md:text-3xl text-xl text-center'>Join N3X Chain global open-source community</h2>
                <div className='xl:mt-[88px] md:mt-10 mt-8 grid grid-cols-1 lg:grid-cols-3 2xl:gap-[80px] x:gap-10 gap-8'>
                    {
                        socialMedia?.slice(0, 3).map((item, index) => (
                            <div className="rounded-[8px] group hover:scale-105  duration-500 shadow-lg shadow-[#686BD47D] px-[2px] py-[2px] bg-gradient-to-r from-[#1FEBB0] via-[#30D3CE] to-[#069CFD] ">
                                <div key={index} className='bg-[#0a090a] rounded-[6px]  px-10 py-5 '>
                                    <div className='flex items-center gap-4'>
                                        <Image src={item?.icon} width={600} height={500} alt='facebook' className='w-[48px] h-[48px]' />
                                        <h2 className='text-2xl text-white '>{item?.name}</h2>
                                    </div>
                                    <div className='mt-[32px] flex items-center justify-between cursor-pointer'>
                                        <h2 className='text-gradient text-base'>Follow us</h2>
                                        <Image src={'/arrow.png'} width={600} height={500} alt='arrow' className='w-[32px] h-[32px] hover:scale-110 duration-300' />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='xl:mt-10 mt-8 grid grid-cols-1 lg:grid-cols-3 2xl:gap-[80px] x:gap-10 gap-8'>
                    {
                        socialMedia?.slice(3, 6).map((item, index) => (
                            <div className="rounded-[8px] shadow-lg group hover:scale-105 duration-500 shadow-[#686BD47D] px-[2px] py-[2px] bg-gradient-to-r from-[#1FEBB0] via-[#30D3CE] to-[#069CFD] ">
                                <div key={index} className='bg-[#0a090a] rounded-[6px]  px-10 py-5 '>
                                    <div className='flex items-center gap-4'>
                                        <Image src={item?.icon} width={600} height={500} alt='facebook' className='w-[48px] h-[48px]' />
                                        <h2 className='text-2xl text-white '>{item?.name}</h2>
                                    </div>
                                    <div className='mt-[32px] flex items-center justify-between cursor-pointer'>
                                        <h2 className='text-gradient text-base'>Follow us</h2>
                                        <Image src={'/arrow.png'} width={600} height={500} alt='arrow' className='w-[32px] h-[32px] hover:scale-110 duration-300 ' />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Community;