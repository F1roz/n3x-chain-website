"use client";
import Button from "@/app/(site)/component/common/button";
import Image from "next/image";

const SolutionHero = ({ heading, details, image }) => {
    return (
        <div className=" font-poppins z-0 lg:mt-32 mt-[8rem]">
            <Image src={'/Ellipse.png'} width={500} height={500} alt='v' className='absolute -z-10 top-0 left-0' />
            <Image src={'/Ellipse2.png'} width={1000} height={500} alt='v' className='absolute right-0 top-[300px] 2xl:top-20 -z-10' />
            <div className="containers">
                <div className="flex items-center md:flex-row flex-col xl:gap-[237px] lg:gap-[100px] gap-16 xl:pb-[128px] lg:pb-[90px] pb-10">
                    <div className="lg:w-1/2">
                        <h3 className="lg:text-[33px] text-[25px] font-semibold lg:leading-[49px] leading-9 text-white">
                            {heading}
                        </h3>
                        <p className="lg:text-lg text-base text-white lg:mt-[26px] mt-4 line-clamp-5 mb-10">{details}</p>
                        <Button name={'Get a Quote'} />
                    </div>

                    <Image
                        src={image}
                        height={500}
                        width={500}
                        className="w-[296px] h-[281px] lg:w-[450px] lg:h-[500px] object-fill"
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default SolutionHero;