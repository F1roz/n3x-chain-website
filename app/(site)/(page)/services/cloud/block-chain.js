import React from 'react';
import { SiBinance, SiPolygon, SiSolana } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import SectionTitle from '@/app/(site)/component/common/sectionTitle';

const Card = ({ title, Icon, color }) => {
    return (
        <div className={`flex items-center gap-1 hover:text-[${color}] duration-500`}>
            <Icon size={30} />
            <h2 className='lg:text-2xl text-xl font-bold'>{title}</h2>
        </div>
    );
};

const BlockChain = () => {
    const blockchainData = [
        { title: 'Binance', icon: SiBinance, color: 'orange-500' },
        { title: 'Ethereum', icon: FaEthereum, color: '#5A32F0' },
        { title: 'TRON', icon: IoLogoElectron, color: '#B21D1D' },
        { title: 'Polygon', icon: SiPolygon, color: '#9C2DCA' },
        { title: 'Solana', icon: SiSolana, color: '#36D3AC' },
    ];

    return (
        <div className='my-[100px] relative'>
            <div className='max-w-[1230px] mx-auto font-poppins text-white px-3'>
                <SectionTitle title={"Unleashing the power of the crowd with cutting-edge blockchain!"} des={"Choose your blockchain for Cloude Services"} />
                <div className='flex flex-wrap justify-center xl:gap-[100px] lg:gap-20 sm:gap-10 gap-5 mt-10'>
                    {blockchainData.map((blockchain, index) => (
                        <Card
                            key={index}
                            title={blockchain.title}
                            Icon={blockchain.icon}
                            color={blockchain.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlockChain;
