"use client";
import Image from "next/image";
import InfoCard from "./infoCard";
import SectionTitle from "@/app/(site)/component/common/sectionTitle";

const SolutionServices = ({ services }) => {
    return (
        <div className=" font-poppins relative z-0">
            <Image src={'/Vector.png'} width={1000} height={500} alt='v' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[30%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='v' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:top-[30%]  w-full md:w-[60%] ' />
            <div className="containers">
                <div className="pb-10">
                    <SectionTitle title={"Reimagine the Retail Experience"} des={"Blockchain Solutions for Retail from N3X Chain"} />
                </div>
                <div className="flex flex-wrap justify-center gap-8 py-8">

                    {
                        services.map((service, index) => (
                            <InfoCard title={service.title} description={service.description} icon={service.icon} />
                        ))
                    }
                </div>

            </div>
        </div>
    );
};
export default SolutionServices;