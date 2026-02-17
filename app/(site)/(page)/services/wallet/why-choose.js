import React from 'react';
import Choosecard from './chooseCard';
import Image from 'next/image';
import { Features, walletFeatures } from '@/app/(site)/utils/menu';
import SectionTitle from '@/app/(site)/component/common/sectionTitle';

const FeaturesSection = () => {


    return (
        <div className='relative lg:my-[200px] my-[100px] font-poppins text-white'>
            <Image src={'/Vector.png'} width={1000} height={500} alt='d' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[30%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='d' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:top-[30%]  w-full md:w-[60%] ' />
            <div>
                <SectionTitle title={"Trust us with your project"} des={"Why choose us for Wallet development"} />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 mb-[100px] max-w-[1230px] mx-auto ">
                    {walletFeatures.map((feature, index) => (
                        <Choosecard
                            key={index}
                            url={feature?.url}
                            title={feature?.title}
                            description={feature?.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
