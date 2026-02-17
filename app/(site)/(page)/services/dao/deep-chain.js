import React from 'react';
import DeepChainCard from './deep-chain-card';
import { FaFacebook, FaLinkedin, FaDiscord, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from 'next/image';


const DeepChain = () => {
    const items = [
        {
            title: "Facebook",
            icon: <FaFacebook size={40} className='text-primary' />
        },
        {
            title: "Linkedin",
            icon: <FaLinkedin size={40} className='text-primary' />
        },
        {
            title: "Discord",
            icon: <FaDiscord size={40} className='text-primary' />
        },
        {
            title: "Twitter",
            icon: <FaTwitter size={40} className='text-primary' />
        },
        {
            title: "Instagram",
            icon: <FaInstagramSquare size={40} className='text-primary' />
        },
        {
            title: "Gmail",
            icon: <BiLogoGmail size={40} className='text-primary' />
        },
    ]
    return (
        <div className='my-[100px] relative'>
            <Image src={'/Vector.png'} width={1000} height={500} alt='v' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[100%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='v' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:-top-[50%]  w-full md:w-[60%] ' />
            <div className=' text-white font-poppins  px-3'>
                <h2 className='heading2 mt-2  text-center'>Join N3X Chain global open-source community</h2>
                <div className='max-w-[1230px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
                    {
                        items?.map((item, index) => (
                            <DeepChainCard key={index} item={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default DeepChain;