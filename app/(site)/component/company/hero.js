'use client';
import Image from 'next/image';
import Button from "@/app/(site)/component/common/button";

const HeroCompany = () => {
    return (
        <div className="relative ">
            <Image
                src={'/Ellipse.png'}
                width={1000}
                height={500}
                alt="img"
                className="absolute -z-10 top-0 left-0"
            />
            <Image
                src={'/Ellipse2.png'}
                width={1000}
                height={500}
                alt="img"
                className="absolute right-0 top-[300px] 2xl:top-20 -z-10"
            />
            <div
                className="relative containers mx-auto px-4 md:pt-[200px] xl:pb-[224px] lg:pb-[150px] pt-[120px] sm:pb-[100px] pb-[60px]  font-jost flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="long_header_company !font-semibold text-white leading-none">
                        The Technology
                    </h1>
                    <h1 className="long_header_company !font-semibold text-[#1FEBB0]">
                        You Can Trust
                    </h1>
                    <h1 className="company_subtitle lg:mt-12 md:mt-6 mt-3 flex md:flex-row items-center text-start md:text-center">
                        <span className="mr-4 font-semibold">About Us</span>
                        <div
                            className="flex-1 h-[2px]"
                            style={{
                                background: "linear-gradient(111deg, #1FEBB0 11.37%, #30D3CE 44.62%, #069CFD 83.42%)",
                            }}
                        ></div>
                    </h1>
                    <p className="paragraph1 md:mb-[50px] md:mt-[28px] mt-5 mb-7 z-10 max-w-[666px] mx-auto lg:mx-0">
                        N3X Chain excels in delivering cutting-edge web, mobile, blockchain, and AI solutions,
                        masterfully blending youthful creativity with seasoned expertise. Driven by an unwavering focus
                        on client satisfaction and a hunger for success, we empower businesses to surpass their highest
                        potential by fueling technological growth and harnessing the power of artificial intelligence.
                    </p>
                    <Button name="Get a Quote" className="z-10" />
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center w-full">
                    <div
                        className="lg:w-full max-w-[808px] h-[300px] sm:h-[400px] md:h-[500px] xl:h-[522px]  relative w-[90%] sm:w-[80%] "
                    >
                        {/*  */}
                        <Image
                            src="/company/company1.png"
                            height={824}
                            width={936}
                            alt="hero"
                            className="absolute inset-0 m-auto w-full h-full"
                        />

                        <Image
                            src="/company/hero.png"
                            height={824}
                            width={936}
                            alt="hero"
                            className="absolute inset-0 lg:left-20  m-auto xl:h-[400px] h-[70%] xl:w-full !w-[70%] sm:!w-[65%] left-10 "
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroCompany;
