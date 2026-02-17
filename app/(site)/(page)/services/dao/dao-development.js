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
                            DAO Development
                        </h3>
                        <p className="lg:text-lg text-base text-white lg:mt-[26px] mt-4 line-clamp-5 mb-10">N2X Chain enables you to create secure, scalable, and compliant DAOs. Whether it is for supply chain optimization, governance, fundraising, or investment, our skilled blockchain developers will create a system that is personalized to meet your demands. From ideation to deployment and beyond, we provide you with cooperation.</p>
                        <Button name={'Get a Quote'} />
                    </div>

                    <Image
                        alt="lan"
                        src={'/landing.png'}
                        height={500}
                        width={500}
                        className="w-[296px] h-[281px] lg:w-[450px] lg:h-[500px] object-fill"
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
