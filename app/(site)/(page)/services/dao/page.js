'use client'
import DaoDevelopment from './dao-development';
import DAOFeatures from './dao-future';
import Autonomous from './autonomous';
import FeaturesSection from './why-choose';
import BlockChain from './block-chain';
import DeepChain from './deep-chain';
import Exploring from './exploring';

const Services = () => {
    return (
        <div>
            <DaoDevelopment />
            <DAOFeatures />
            <Autonomous />
            <Exploring />
            <FeaturesSection />
            <BlockChain />
            <DeepChain />
        </div>
    );
};

export default Services;