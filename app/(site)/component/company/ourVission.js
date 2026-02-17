import React from 'react';
import { IconSvg } from "@/app/(site)/component/company/svgs";
import Image from "next/image";

const OurVission = () => {
    return (

        <div
            className={`lg:grid lg:grid-cols-2 xl:gap-[163px] lg:gap-[100px] md:gap-10 gap-6 flex flex-col-reverse items-center  `}
        >
            <div className="h-full flex items-center lg:justify-end justify-center gap-4 ">
                <Image
                    src={"/vission.png"}
                    alt={"vision"}
                    height={600}
                    width={900}
                    className="object-contain md:w-[372px] md:h-[372px] w-[80%] h-[80%] "
                />
            </div>
            <div>
                <h3 className="sub_header_company md:mb-6 mb-3 lg:mt-[88px] md:mt-10 max-w-[700px]">Our Vision</h3>
                <p className="paragraph1 max-w-[700px]">
                    We want to be the engine that propels the digital revolution and imagine an era of limitless innovation. We work hard to develop ground-breaking technologies that will bring in a time of seamless connectedness, unmatched efficiency, and infinite potential.
                </p>
                <div className="flex flex-col lg:gap-5 md:gap-3 gap-1 lg:mt-10 mt-6 max-w-[700px] relative md:-ms-[25px] ">
                    <div className="flex items-center gap-4 max-w-[600px]">
                        <IconSvg content={"01"} />
                        <p className="lg:text-xl text-base lg:leading-[32px] leading-8">
                            Be the preferred choice for clients seeking game-changing, transformative solutions.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 max-w-[600px]">
                        <IconSvg content={"02"} />
                        <p className="lg:text-xl text-base lg:leading-[32px] leading-8">
                            Create an inclusive ecosystem that connects tech service providers and seekers.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 max-w-[600px]">
                        <IconSvg content={"03"} />
                        <p className="lg:text-xl text-base lg:leading-[32px] leading-8">

                            Build a thriving community around our platform for shared progress.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 max-w-[600px]">
                        <IconSvg content={"04"} />
                        <p className="lg:text-xl text-base lg:leading-[32px] leading-8">
                            Our vision is to leave a lasting legacy of positive change through tech empowerment.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurVission;
