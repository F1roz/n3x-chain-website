import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Decentralized Energy Trading Platforms',
    description: 'Trade energy on a decentralized platform, maximizing efficiency and cutting middlemen costs.',
    icon: '🛠️', 
  },
  {
    title: 'Renewable Energy Certificates Tracking',
    description: 'Trace green energy contributions with ease, promoting transparent renewable energy claims.',
    icon: '🖼️',
  },
  {
    title: 'Peer-to-Peer Energy Exchanges',
    description: 'Directly exchange energy with peers, fostering community-based energy sharing & reducing costs.',
    icon: '💳',
  },
  {
    title: 'Secure Microgrid Transactions',
    description: 'Ensure safe & tamper-proof microgrid transactions, maximizing grid stability & trust.',
    icon: '📊',
  },
  {
    title: 'Energy Usage & Consumption Monitoring',
    description: 'Monitor energy use in real-time, optimizing consumption & assisting in sustainable choices.',
    icon: '🔐',
  },
  {
    title: 'Transparent Carbon Credit Trading',
    description: 'Trade carbon credits with clarity & confidence, ensuring eco-friendly business practices.',
    icon: '💼',
  },
  {
    title: 'Real-time Demand Response Solutions',
    description: 'Adapt to energy demands instantly for efficient power distribution and reduced wastage.',
    icon: '🔗',
  },
  {
    title: 'Blockchain-Based Energy Financing',
    description: 'Access transparent financing for energy projects backed by the trust & efficiency of blockchain.',
    icon: '⚙️',
  },
  {
    title: 'Energy Asset Lifecycle Management',
    description: 'Manage energy assets end-to-end from installation to retirement with blockchain solutions.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Energy Resource Planning',
    description: 'Plan energy resources on decentralized platforms, ensuring optimization & stakeholder inout',
    icon: '⚙️',
  },
  {
    title: 'Blockchain for Energy Storage Management',
    description: 'Efficiently manage stored energy, ensuring optimal distribution & reduced losses.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Power Purchase Agreements',
    description: 'Secure energy contracts on a decentralized platform, ensuring clarity, fairness & adherence.',
    icon: '⚙️',
  },
  {
    title: 'Remote Asset Maintenance & Verification',
    description: 'Validate and maintain energy assets remotely, ensuring operational efficiency & uptime.',
    icon: '⚙️',
  },
  {
    title: 'Energy Efficiency & Savings Tracking',
    description: 'Monitor and optimize energy-saving efforts, driving sustainable operations & cost reductions.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Power Tomorrow with Blockchain Energy Solutions!" details="N3X Chain pioneers in blockchain-driven energy solutions. Optimize energy distribution, ensure transparent consumption tracking, and drive sustainability using our advanced solutions. With our innovative blockchain energy services, experience a shift towards efficient and green energy systems. Power the future of energy management with N3X Chain" image={"/energy.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;