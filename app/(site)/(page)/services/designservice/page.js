import React from 'react';
import DaoDevelopment from './dao-development';
import DAOFeatures from './dao-future';
import Autonomous from './autonomous';
import Exploring from './exploring';
import FeaturesSection from './why-choose';
import BlockChain from './block-chain';
import DeepChain from './deep-chain';

const page = () => {
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

export default page;