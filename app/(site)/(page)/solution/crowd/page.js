import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Transparent Fund Allocation Tracking',
    description: 'Monitor funds transparently, ensuring donors see how their contributions are utilized.',
    icon: '🛠️', 
  },
  {
    title: 'Tokenized Investment Opportunities',
    description: 'Invest in unique opportunities via tokens, allowing fractional ownership & diverse portfolios.',
    icon: '🖼️',
  },
  {
    title: 'Smart Contract-Based Pledges',
    description: 'Commit to pledges via smart contracts, automating rewards & ensuring donor trust.',
    icon: '💳',
  },
  {
    title: 'Decentralized Crowdfunding Platforms',
    description: 'Raise funds on a transparent platform, maximizing reach & minimizing fees.',
    icon: '📊',
  },
  {
    title: 'Peer-to-Peer Funding without Intermediaries',
    description: 'Connect directly with backers, ensuring more funds go to the cause, not intermediaries.',
    icon: '🔐',
  },
  {
    title: 'Real-time Campaign Performance Analytics',
    description: 'Track campaign performance live, allowing swift strategy pivots & optimized fund-raising.',
    icon: '💼',
  },
  {
    title: 'Secure & Immediate Fund Transfers',
    description: 'Transfer funds swiftly & securely, ensuring quick access & maximized project momentum.',
    icon: '🔗',
  },
  {
    title: 'Equity Crowdfunding',
    description: 'Raise funds for equity transparently, ensuring clear ownership stakes & minimized disputes.',
    icon: '⚙️',
  },
  {
    title: 'Tamper-Proof Feedback & Review System',
    description: 'Get genuine feedback, fostering trust among backers & continuous project improvement.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Refund & Return Processes',
    description: 'Manage refunds transparently, ensuring donor trust & streamlined operations.',
    icon: '⚙️',
  },
  {
    title: 'Crowdfunding Campaign Authenticity Checks',
    description: 'Verify campaign genuineness, ensuring donor trust & upholding platform integrity.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Project Budget Management',
    description: 'Manage budgets transparently, ensuring backers see financial responsibility in action.',
    icon: '⚙️',
  },
  {
    title: 'Token-Based Incentives for Promotions',
    description: 'Incentivize promotions with tokens, driving campaign visibility & supporter engagement.',
    icon: '⚙️',
  },
  {
    title: 'Intellectual Property Rights Management',
    description: 'Protect campaign-related IP, fostering innovation & ensuring creator rights.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Boost Trust in Crowdfunding with Blockchain Solutions!" details="N3X Chain transforms crowdfunding platforms, capitalizing on blockchain's unparalleled transparency and security. From campaign validation to seamless fund transfers, we innovate crowdfunding avenues, ensuring trustworthy, swift, and foolproof financial engagements. Partner with Deepchain Labs for groundbreaking blockchain crowdfunding solutions." image={"/crowd.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;