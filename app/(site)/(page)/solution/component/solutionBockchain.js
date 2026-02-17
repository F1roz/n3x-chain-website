"use client";
import SectionTitle from "@/app/(site)/component/common/sectionTitle";
import Image from "next/image";
import { useState } from "react";

const BlockchainApp = () => {
    const [active, setActive] = useState(1);

    const content = [
        {
            id: 1,
            title: "Currently",
            description:
                "In conventional supply chains, data scatters wide, hindering seamless tracking from creation to delivery.",
            image: "/s1.png",
        },
        {
            id: 2,
            title: "Daily Purchases",
            description:
                "Daily purchases are often hindered by transaction delays, high fees, and the need for currency conversion.",
            image: "/s2.png",
        },
        {
            id: 3,
            title: "Securities Trading",
            description:
                "Securities trading is plagued by slow settlement times, regulatory complexities, and high transaction costs.",
            image: "/s3.png",
        },
    ];

    const activeContent = content.find(item => item.id === active);

    return (
        <div className="relative my-[100px] ">
            <Image src={'/Vector.png'} width={1000} height={500} alt='v' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[30%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='c' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:top-[30%]  w-full md:w-[60%] ' />
            <div className="containers flex flex-col items-center justify-center !font-poppins">
                <div className="text-center mb-8 lg:mt-16">
                    <div className="pb-10">
                        <SectionTitle title={"Blockchain applications in Retail"} des={"Navigating Energy Challenges through Blockchain"} />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setActive(1)}
                            className={`px-4 py-2 text-white rounded-lg ${active === 1 ? 'bg-mainGradient' : ''}`}
                        >
                           Customer Loyalty
                        </button>
                        <button
                            onClick={() => setActive(2)}
                            className={`px-4 py-2 text-white rounded-lg ${active === 2 ? 'bg-mainGradient' : ''}`}
                        >
                            Logistical Efficiency
                        </button>
                        <button
                            onClick={() => setActive(3)}
                            className={`px-4 py-2 text-white rounded-lg ${active === 3 ? 'bg-mainGradient' : ''}`}
                        >
                          Consumer Privacy
                        </button>
                    </div>
                </div>

                <div className="bg-[#FCF1F1] p-4 rounded-lg shadow-lg flex items-start md:flex-row flex-col lg:space-x-16 mb-10 lg:w-[70%] mx-auto">
                    <div className="lg:w-1/3">
                        <div className="flex flex-col  mt-8 pl-4">
                            <h3 className="text-[#2B79D3]">Use case {activeContent.id} : </h3>
                            <h3 className="text-[#030627] mb-2">{activeContent.title}</h3>
                            <Image
                                src={activeContent.image}
                                height={500}
                                width={500}
                                className="w-[296px] h-[281px] object-fill"
                                alt={activeContent.title}
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-blue-700">{activeContent.title}</h4>
                        <p className="mt-4 text-gray-700">{activeContent.description}</p>
                        <button className="mt-4 px-6 py-3 bg-mainGradient text-white rounded-full">
                            Improve with blockchain
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockchainApp;
