import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Transparent Seed-to-Sale Tracking',
    description: 'Monitor crop journeys transparently for authenticity and informed buying.',
    icon: '🛠️', 
  },
  {
    title: 'Blockchain-Based Farming Data Logs',
    description: 'Securely log farming data, promoting consistent practices & aiding in yield optimization.',
    icon: '🖼️',
  },
  {
    title: 'Tamper-Proof Organic Certification',
    description: 'Certify organic produce securely, ensuring trustworthiness & meeting consumer demands.',
    icon: '💳',
  },
  {
    title: 'Smart Contract Farm Lease Agreements',
    description: 'Automate lease processes, ensuring clear terms & fostering landlord-tenant harmony.',
    icon: '📊',
  },
  {
    title: 'Immutable Livestock Health Records',
    description: 'Maintain unalterable livestock health logs, aiding in disease prevention & care.',
    icon: '🔐',
  },
  {
    title: 'Real-Time Weather & Soil Monitoring',
    description: 'Monitor farm conditions live, promoting timely interventions & yield maximization.',
    icon: '💼',
  },
  {
    title: 'Secure Payment Solutions for Farmers',
    description: 'Facilitate transparent farmer payments, ensuring timely compensation & sustainability.',
    icon: '🔗',
  },
  {
    title: 'Decentralized Agri-Supply Chain Management',
    description: 'Manage supply chains transparently, ensuring product quality & fair pricing.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Pesticide & Fertilizer Records',
    description: 'Log chemical use securely, promoting sustainable practices & informed consumer choices.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Agri-Research Data Repositories',
    description: 'Share research transparently, fostering innovation & global agricultural advancements.',
    icon: '⚙️',
  },
  {
    title: 'Tokenized Incentives for Sustainable Farming',
    description: 'Reward eco-friendly practices with tokens, promoting sustainability & eco-consciousness.',
    icon: '⚙️',
  },
  {
    title: 'Secure Data for Genetically Modified Crops',
    description: 'Safeguard GM crop data, promoting research advancements without compromising ethics.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain-Verified Farm Equipment History',
    description: "Track equipment's history securely, ensuring informed purchases & maximizing farm efficiency",
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Harvest the Future with Blockchain's Agri-Solutions!" details="N3X Chain delivers transformative agriculture solutions powered by blockchain. Boost crop traceability, fortify farm data, and ensure transparent market pricing, all under a secure framework. With our blockchain agriculture solutions, step into an era of transparent, efficient, and sustainable farming practices. Cultivate the future of farming with N3X Chain." image={"/agr.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;