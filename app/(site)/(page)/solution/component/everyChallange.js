import React from 'react';
import FinTechCard from './techCard';
import { FaBolt, FaBuilding, FaBullhorn, FaCar, FaDollarSign, FaGavel, FaGraduationCap, FaHandHoldingUsd, FaHeartbeat, FaIdBadge, FaLandmark, FaSeedling, FaServer, FaShieldAlt, FaShippingFast, FaTruck, FaWifi } from 'react-icons/fa';
import Image from 'next/image';
import SectionTitle from '@/app/(site)/component/common/sectionTitle';
const categories = [
    {
        title: "FinTech",
        icon: <FaDollarSign />,
        link: "/fintech",
    },
    {
        title: "IoT",
        icon: <FaWifi />,
        link: "/iot",
    },
    {
        title: "Supply Chain",
        icon: <FaTruck />,
        link: "/supply-chain",
    },
    {
        title: "Energy",
        icon: <FaBolt />,
        link: "/energy",
    },
    {
        title: "Education",
        icon: <FaGraduationCap />,
        link: "/education",
    },
    {
        title: "Real Estate",
        icon: <FaBuilding />,
        link: "/real-estate",
    },
    {
        title: "Advertising",
        icon: <FaBullhorn />,
        link: "/advertising",
    },
    {
        title: "Automotive",
        icon: <FaCar />,
        link: "/automotive",
    },
    {
        title: "Logistic",
        icon: <FaShippingFast />,
        link: "/logistic",
    },
    {
        title: "Legal",
        icon: <FaGavel />,
        link: "/legal",
    },
    {
        title: "Crowd Funding",
        icon: <FaHandHoldingUsd />,
        link: "/crowd-funding",
    },
    {
        title: "Government",
        icon: <FaLandmark />,
        link: "/government",
    },
    {
        title: "Health Care",
        icon: <FaHeartbeat />,
        link: "/health-care",
    },
    {
        title: "Agriculture",
        icon: <FaSeedling />,
        link: "/agriculture",
    },
    {
        title: "Insurance",
        icon: <FaShieldAlt />,
        link: "/insurance",
    },
    {
        title: "Digital Identity",
        icon: <FaIdBadge />,
        link: "/digital-identity",
    },
    {
        title: "IT Infrastructure",
        icon: <FaServer />,
        link: "/it-infrastructure",
    },
];

const EveryChallange = () => {
    return (
        <div className='relative mb-[150px] '>
            <Image src={'/Vector.png'} width={1000} height={500} alt='v' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[30%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='v' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:top-[30%]  w-full md:w-[60%] ' />
            <div className="containers !font-poppins ">
                <div className="py-10 mt-14 mb-14">
                    <SectionTitle title={"Innovations for Every Challenge"} des={"Other Blockchain solutions offered by N3X Chain"} />
                </div>
                <div className="flex justify-center flex-wrap gap-6 ">
                    {
                        categories?.map((item, index) => (
                            <FinTechCard item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default EveryChallange;