import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Tamper-Proof Delivery Records',
    description: 'Ensure delivery integrity with unalterable records, fostering trust & reducing disputes.',
    icon: '🛠️', 
  },
  {
    title: 'Blockchain-Based Inventory Management',
    description: 'Optimize stock with blockchain, ensuring accurate tracking & efficient inventory turnover.',
    icon: '🖼️',
  },
  {
    title: 'Decentralized Carrier Reputation Systems',
    description: 'Evaluate carriers on a transparent platform, making informed partnerships & service choices.',
    icon: '💳',
  },
  {
    title: 'Smart Contract-Based Cargo Agreements',
    description: 'Secure cargo deals with smart contracts, ensuring clear terms & automated compliance.',
    icon: '📊',
  },
  {
    title: 'Real-Time Temperature & Condition Monitoring',
    description: 'Monitor cargo conditions live, ensuring product quality & timely intervention if needed.',
    icon: '🔐',
  },
  {
    title: 'Blockchain-Verified Logistics Partnerships',
    description: 'Form partnerships with verified entities, enhancing collaboration & service reliability.',
    icon: '💼',
  },
  {
    title: 'Decentralized Return & Refund Tracking',
    description: 'Track returns & refunds transparently, improving customer trust & operational efficiency.',
    icon: '🔗',
  },
  {
    title: 'Secure Data Sharing Among Stakeholders',
    description: 'Safely share data, ensuring operational cohesion & data integrity across logistics chains.',
    icon: '⚙️',
  },
  {
    title: 'Tokenized Logistics Incentives & Rewards',
    description: 'Reward stakeholders with tokens, driving performance & ensuring stakeholder loyalty.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Warehousing Solutions',
    description: 'Decentralized platform for warehouse management: optimize space, and ensure safety.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Route Optimization & Analytics',
    description: 'Optimize routes transparently, ensuring timely deliveries & reduced transportation costs.',
    icon: '⚙️',
  },
  {
    title: 'Secure Payment Solutions for Logistics',
    description: 'Streamline payments securely for swift transactions and reduced overheads.',
    icon: '⚙️',
  },
  {
    title: 'Real-time Demand & Supply Matching',
    description: 'Match logistics demand & supply in real-time, ensuring optimal resource utilization.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain-Based Packaging Authenticity',
    description: 'Verify packaging genuineness, safeguarding against counterfeits & ensuring product quality.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Consistent Deliveries via Blockchain's Logistics!" details="N3X Chain optimizes logistics using transformative blockchain solutions. Streamline shipments, enable real-time tracking, and ensure end-to-end transparency. With our advanced blockchain logistics services, journey into a future of efficient, traceable, and secured freight management. Navigate logistics excellence with N3X Chain." image={"/logistic.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;