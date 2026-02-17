"use client";
import Button from "@/app/(site)/component/common/button";
import { companyLogos } from "@/app/(site)/utils/menu";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const DaoDevelopment = () => {
    return (
        <div className="font-poppins relative z-0 ">
            <Image src={'/Ellipse.png'} width={500} height={500} alt='el' className='absolute -z-10 top-0 left-0' />
            <Image src={'/Ellipse2.png'} width={1000} height={500} alt='el' className='absolute right-0 top-[300px] 2xl:top-20 -z-10' />
            <div className="containers pt-32">
                <div className="flex items-center md:flex-row flex-col xl:gap-[237px] lg:gap-[100px] gap-16 xl:pb-[128px] lg:pb-[90px] pb-10">
                    <div className="lg:w-1/2">
                        <h3 className="heading2">
                        Tokenomics
                        </h3>
                        <p className="lg:text-lg text-base text-white lg:mt-[26px] mt-4 line-clamp-5 mb-10">N3X Chain ensures every token has a story, and every blockchain a legend. We turn your blockchain ideas into thriving economies. Our experts specialize in creating token systems that add value, incentives, and growth potential to your projects. We are the ones that design new economic galaxies, not just digital assets. Imagine your ideal universe, and we'll create it.</p>
                        <Button name={'Get a Quote'} />
                    </div>

                    <Image
                        alt="lan"
                        src={'/tokenomic.png'}
                        height={500}
                        width={500}
                        className=" object-fill z-50"
                    ></Image>
                </div>
            </div>
            <Marquee className="h-fit mb-[100px] mt-[50px] py-[40px] z-10">
                <div className="flex items-center xl:gap-[90px] lg:gap-[50px] gap-[30px] flex-wrap ">
                    {companyLogos.map((logo, index) => (
                        <Image
                            key={index}
                            alt={logo.alt}
                            src={logo.src}
                            height={30}
                            width={139}
                            className="h-[30px] object-fill"
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default DaoDevelopment;
