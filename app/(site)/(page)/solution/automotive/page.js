import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Secure Vehicle Identity & History',
    description: 'Trace car histories & identities, ensuring informed purchases & transparent ownership transfers.',
    icon: '🛠️', 
  },
  {
    title: 'Tamper-Proof Odometer Readings',
    description: 'Guarantee genuine mileage, safeguarding against odometer fraud and misinformation.',
    icon: '🖼️',
  },
  {
    title: 'Blockchain for Vehicle Parts Authenticity',
    description: "Verify car parts' genuineness, ensuring safety, quality, & optimal vehicle performance.",
    icon: '💳',
  },
  {
    title: 'Smart Contract Car Leasing & Sales',
    description: 'Seamlessly lease or sell vehicles via smart contracts, ensuring transparent & secure deals.',
    icon: '📊',
  },
  {
    title: 'Decentralized Vehicle Service Records',
    description: "Access a car's complete service history on decentralized platforms for informed decisions.",
    icon: '🔐',
  },
  {
    title: 'Tokenized Incentives for Drivers',
    description: 'Reward drivers with tokens for safe driving or eco-friendly practices, promoting good behavior.',
    icon: '💼',
  },
  {
    title: 'Decentralized Ride-Sharing Platforms',
    description: 'Hail a ride on decentralized platforms, ensuring peer-to-peer connections & reduced costs.',
    icon: '🔗',
  },
  {
    title: 'Automated Toll & Parking Payments',
    description: 'Streamline toll & parking fees with automated blockchain payments for seamless drives.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain for Autonomous Vehicle Data',
    description: 'Securely manage & utilize autonomous car data, fostering innovation & ensuring safety.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Car Insurance Platforms',
    description: 'Get car insurance on decentralized platforms, ensuring transparent claims & premium calculations.',
    icon: '⚙️',
  },
  {
    title: 'Smart Contract-Based Warranty Systems',
    description: 'Activate & utilize vehicle warranties via smart contracts for transparent & hassle-free claims.',
    icon: '⚙️',
  },
  {
    title: "Secure Driver's License Verification",
    description: 'Swiftly verify driver licenses, ensuring roadway safety & compliance with regulations.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain-Enabled Car Financing',
    description: 'Facilitate car loans via blockchain for transparent terms and swift processing.',
    icon: '⚙️',
  },
  {
    title: 'Vehicle Tokenization & Investment',
    description: 'Invest in vehicles via tokens, enabling fractional ownership & new investment avenues.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Drive into the Future with Blockchain in Automotive!" details="N3X Chain accelerates the automotive sector with dynamic blockchain solutions. Authenticate vehicle histories, streamline parts traceability, and enhance smart contract leasing. With our trailblazing blockchain automotive services, drive into a future of secure, transparent, and efficient vehicle management. Ignite automotive innovation with N3X Chain." image={"/automotive.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;