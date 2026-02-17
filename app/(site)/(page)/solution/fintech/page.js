import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'DAO Software',
    description: 'Quickly deploy DAO dapp for business, promoting transparent voting.',
    icon: '🛠️', 
  },
  {
    title: 'DAO NFT Marketplace',
    description: 'Develop DAO-based NFT platform for decentralized governance in trading.',
    icon: '🖼️',
  },
  {
    title: 'Payment gateway integration',
    description: 'Seamless payment integration with top fiat and crypto gateways.',
    icon: '💳',
  },
  {
    title: 'Trading platform integration',
    description: 'Improve DAO with digital trading, fair multi-token support.',
    icon: '📊',
  },
  {
    title: 'KYC integration',
    description: 'Implement a secure KYC solution for trusted DAO access.',
    icon: '🔐',
  },
  {
    title: 'Digital wallet integration',
    description: 'Streamlined crypto wallet: buy, store, send, swap in seconds.',
    icon: '💼',
  },
  {
    title: 'DAO node development',
    description: 'DAO network roles creation: Miners, voters, validators, and ensuring continuous operation.',
    icon: '🔗',
  },
  {
    title: 'DAO integration',
    description: 'Transparent solutions by community consensus: Crowdsourced, Decentralized, Democratic platform.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Redefine Finance with Blockchain's Fintech Solutions!" details="N3X Chain offers cutting-edge fintech solutions, leveraging the robustness of blockchain. Elevate financial operations, from lending to wealth management, ensuring robust security and unmatched efficiency with our groundbreaking blockchain fintech services. Dive into a future of seamless and secure financial operations with N3X Chain." image={"/landing.png"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;