import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Tamper-Proof Origin Verification',
    description: 'Confidently verify product origins with unalterable systems, ensuring genuine sourcing.',
    icon: '🛠️', 
  },
  {
    title: 'Real-Time Goods Tracking Systems',
    description: 'Live-track goods for enhanced visibility, accuracy, and trust in your supply chain journey.',
    icon: '🖼️',
  },
  {
    title: 'Decentralized Supplier Validation',
    description: 'Evaluate suppliers on a decentralized platform, boosting trust and reducing bias points.',
    icon: '💳',
  },
  {
    title: 'Smart Contracts for Order Fulfillment',
    description: 'Automate order process for on-time, accurate deliveries with blockchain-backed contracts.',
    icon: '📊',
  },
  {
    title: 'Transparent Inventory Management',
    description: 'Gain clear insights into inventory, ensuring efficient stock management & reduced wastage.',
    icon: '🔐',
  },
  {
    title: 'Blockchain-Enabled Quality Checks',
    description: 'Ensure product quality through blockchain checks, elevating trust and reducing defects.',
    icon: '💼',
  },
  {
    title: 'Decentralized Return & Warranty System',
    description: 'Streamline returns & warranty claims on a transparent, user-friendly decentralized platform.',
    icon: '🔗',
  },
  {
    title: 'Blockchain for Green Supply Chain',
    description: 'Promote eco-friendly practices with blockchain, sustaining every step of the supply chain.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Shipping & Handling Logs',
    description: 'Maintain immutable shipping records, boosting accountability and reducing disputes.',
    icon: '⚙️',
  },
  {
    title: 'Counterfeit Goods Preventio',
    description: 'Ensure product authenticity and combat counterfeits with advanced blockchain verification',
    icon: '⚙️',
  },
  {
    title: 'Secure Data Sharing Among Stakeholders',
    description: 'Securely share data with partners, protecting sensitive information and promoting collaboration.',
    icon: '⚙️',
  },
  {
    title: 'Supplier Rating & Review Systems',
    description: 'Access honest reviews & ratings, aiding informed supplier selection and partnership decisions.',
    icon: '⚙️',
  },
  {
    title: 'Product Recall Efficiency Solutions',
    description: 'Enhance recall processes for rapid response and minimal disruption with blockchain efficiency.',
    icon: '⚙️',
  },
  {
    title: 'Sustainable Sourcing Verification',
    description: 'Validate eco-friendly sourcing practices, promoting sustainability and boosting brand credibility.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Fortify Supply Chains with Robust Blockchain Solutions!" details="N3X Chain revolutionizes supply chain management using advanced blockchain technology. Streamline workflows from origin to distribution, reduce overheads, and ensure real-time traceability. With our state-of-the-art blockchain supply chain solutions, witness enhanced transparency and efficiency. Step into the future of frictionless trade." image={"/supplychain.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;