import React from 'react';
import Image from "next/image";
import Button from "@/app/(site)/component/common/button";
import CompanyHeading from "@/app/(site)/component/company/heading";
import MissionFeature from "@/app/(site)/component/company/missionFeature";
import OurVission from './ourVission';

const Mission = () => {
    return (
        <div className="relative ">
            <Image src={'/Ellipse6.png'} width={900} height={800} alt='shadow image' className='absolute top-0 left-0 -z-10' />
            <Image src={'/Ellipse4.png'} width={800} height={600} alt='shadow image' className='absolute h-[60%] -bottom-[200px] right-0 -z-10' />
            <Image
                src={'/Ellipse2.png'}
                width={600}
                height={500}
                alt="img"
                className="absolute right-0 -top-[300px] -z-10  "
            />
            <div
                className="relative container mx-auto px-4 lg:py-[130px]  py-[100px] font-jost">
                <CompanyHeading
                    subtitle={"Mission and Vision of Our Company"}
                    title={"N3X Chain can assist companies, startups and businesses develop when it comes to staying on top of the industry."} />

                <div className='lg:mt-[88px] mt-10'>
                    <MissionFeature />
                    <OurVission />
                </div>
            </div>
        </div>
    );
};

export default Mission;