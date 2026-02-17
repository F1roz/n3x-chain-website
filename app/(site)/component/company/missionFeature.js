import React from 'react';
import { IconSvg } from "@/app/(site)/component/company/svgs";
import Image from "next/image";

const MissionFeature = () => {
    return (

        <div>
            <div
                className={`grid lg:grid-cols-2 xl:gap-[163px] lg:gap-[100px] md:gap-10 gap-6  `}
            >
                <div>
                    <h3 className="sub_header_company md:mb-6 mb-3  max-w-[700px]">Our Mission</h3>
                    <p className="paragraph1 max-w-[700px]">
                        At N3X Chain, our mission is clear and resolute: to innovate, empower,
                        and transform the digital landscape. We are committed to harnessing cutting-edge technology and
                        expertise to solve complex challenges, drive growth, and shape a brighter digital future. With
                        unwavering dedication.
                    </p>
                    <div className="flex flex-col lg:gap-5 md:gap-3 gap-1 lg:mt-10 mt-6 max-w-[700px] ">
                        <div className="flex items-center gap-4 max-w-[600px]">
                            <IconSvg content={"01"} />
                            <p className="lg:text-xl text-base lg:leading-[32px] leading-8">
                                Deliver unmatched value to clients through excellence in
                                technology and service.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 max-w-[600px]">
                            <IconSvg content={"02"} />
                            <p className="lg:text-xl text-base lg:leading-[32px] leading-8">
                                Develop innovation, deliver value, and uphold integrity in all of our work.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 max-w-[600px]">
                            <IconSvg content={"03"} />
                            <p className="lg:text-xl text-base lg:leading-[32px] leading-8">
                                Prioritize affordability, accessibility, and innovation in all our endeavors.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 max-w-[600px]">
                            <IconSvg content={"04"} />
                            <p className="lg:text-xl text-base lg:leading-[32px] leading-8">
                                To ensure client satisfaction by prioritizing trust, value, and support.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-full flex items-center  gap-4  ">
                    <Image
                        src={"/mission.png"}
                        alt={"vision"}
                        height={600}
                        width={900}
                        className="object-contain md:w-[372px] md:h-[372px] w-[80%] h-[80%] "
                    />
                </div>
            </div>
        </div>
    );
};

export default MissionFeature;
