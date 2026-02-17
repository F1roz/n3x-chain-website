import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Transparent Supply Chain Tracking',
    description: 'Seamlessly track products transparently from source to sale, ensuring genuine sourcing.',
    icon: '🛠️', 
  },
  {
    title: 'Blockchain-Verified Product Authenticity',
    description: 'Guarantee authentic products with blockchain verification, enhancing customer trust.',
    icon: '🖼️',
  },
  {
    title: 'Tamper-Proof Loyalty & Rewards Systems',
    description: 'Seamless payment integration with top fiat and crypto gateways.Secure loyalty program with precise point tracking, redemption, and fraud prevention.',
    icon: '💳',
  },
  {
    title: 'Decentralized Retail Marketplaces',
    description: 'Experience peer-to-peer retail trading, minimizing intermediaries and maximizing value.',
    icon: '📊',
  },
  {
    title: 'Immutable Customer Feedback & Reviews',
    description: 'Ensure every customer review is genuine and immutable, enhancing brand credibility.',
    icon: '🔐',
  },
  {
    title: 'Smart Contract-Based Supplier Agreements',
    description: 'Automate supplier deals with smart contracts, ensuring transparent, clear terms.',
    icon: '💼',
  },
  {
    title: 'Blockchain for Inventory Management',
    description: 'Optimize stock with real-time, tamper-proof tracking, preventing overselling.',
    icon: '🔗',
  },
  {
    title: 'Real-Time Sales & Analytics Tracking',
    description: 'Get instant sales insights with transparent, live data, driving timely decisions.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Return & Refund Tracking',
    description: 'Clarity in return processes with fully traceable actions, ensuring consumer trust.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Store Audit & Compliance Logs',
    description: 'Securely log every store audit, ensuring full compliance and traceability.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain for Point-of-Sale Systems',
    description: 'Upgrade checkouts with swift, secure blockchain-backed transactions.',
    icon: '⚙️',
  },
  {
    title: 'Tokenized Incentives for Shopping',
    description: 'Reward shoppers with tokens, enhancing loyalty and ensuring repeat visits.',
    icon: '⚙️',
  },
  {
    title: 'Secure Retail Customer Data Storage',
    description: 'Safeguard customer data with encrypted, tamper-proof storage solutions.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Retail Advertisement Platforms',
    description: 'Maximize ad reach and relevance with a decentralized, target-driven platform',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Seal Trust on Every Retail Product with Blockchain!" details="N3X Chain delivers transformative Retail solutions using advanced blockchain technology. Elevate customer experiences, ensure transparent transactions, and streamline inventory management. Harness the power of secure, decentralized networks to revolutionize your retail operations. Revolutionize retail dynamics with N3X Chain' innovations." image={"/retail.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;