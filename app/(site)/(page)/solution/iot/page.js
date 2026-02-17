import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Secure Device Identity Verification',
    description: 'Ensure device authenticity with strong security checks, reducing unauthorized access risks.',
    icon: '🛠️', 
  },
  {
    title: 'IoT Data Integrity & Authenticity',
    description: 'Guarantee data reliability with systems ensuring it remains untouched & original throughout its life.',
    icon: '🖼️',
  },
  {
    title: 'Blockchain for Smart Home Security',
    description: 'Upgrade home security with blockchain, safeguarding data and preventing unauthorized access.',
    icon: '💳',
  },
  {
    title: 'Tamper-Proof IoT Data Logging',
    description: 'Store IoT data securely with tamper-resistant logs, ensuring data remains unchanged & trustworthy.',
    icon: '📊',
  },
  {
    title: 'Smart Contracts for IoT Automation',
    description: 'Automate IoT processes with smart contracts, facilitating reliable, self-executing device interactions.',
    icon: '🔐',
  },
  {
    title: 'Device-to-Device Microtransactions',
    description: 'Empower devices for seamless transactions, enhancing inter-device operations & efficiency.',
    icon: '💼',
  },
  {
    title: 'Decentralized Data Marketplaces',
    description: 'Trade IoT data on decentralized platforms, ensuring authentic data & transparent dealings.',
    icon: '🔗',
  },
  {
    title: 'Blockchain-Enabled IoT Mesh Networks',
    description: 'Boost network efficiency & security with decentralized IoT mesh systems backed by blockchain.',
    icon: '⚙️',
  },
  {
    title: 'Energy Trading in Smart Grids',
    description: 'Optimize energy distribution & trading in smart grids, leveraging the transparency of blockchain.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized IoT Data Exchanges',
    description: 'Trade and exchange IoT data on a decentralized platform, ensuring security, fairness, & transparency.',
    icon: '⚙️',
  },
  {
    title: 'IoT-based Asset Management & Tracking',
    description: 'Track & manage assets in real-time, ensuring their safety & optimizing logistical operations.',
    icon: '⚙️',
  },
  {
    title: 'Consumer IoT Privacy Management',
    description: 'Empower users to control their IoT data, ensuring their privacy & reducing data misuse risks.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Connect Devices with Blockchain's IoT Backbone!" details="N3X Chain harnesses the power of blockchain for transformative IoT solutions. Enhance data integrity from IoT devices, streamline processes, and boost network scalability, all on a secure and tamper-proof platform. Experience unparalleled connectivity and innovation with Deepchain Labs' IoT integrations. Dive into a smarter, more connected future." image={"/iot.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;