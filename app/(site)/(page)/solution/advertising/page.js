import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Transparent Ad Spend Tracking',
    description: 'Monitor ad expenditures transparently, ensuring budget efficiency & maximizing ROI.',
    icon: '🛠️', 
  },
  {
    title: 'Decentralized Ad Exchange Platforms',
    description: 'Trade ad spaces on decentralized platforms, ensuring fairness, transparency & optimal reach.',
    icon: '🖼️',
  },
  {
    title: 'Blockchain-Based Ad Metrics Verification',
    description: 'Validate ad metrics with blockchain, ensuring genuine results & data-driven decisions.',
    icon: '💳',
  },
  {
    title: 'Tamper-Proof Campaign Reporting',
    description: 'Receive campaign reports that resist alterations, guaranteeing accuracy & trust in results.',
    icon: '📊',
  },
  {
    title: 'Tokenized Incentives for Ad Viewers',
    description: 'Reward viewers with tokens, driving engagement & maximizing ad impact.',
    icon: '🔐',
  },
  {
    title: 'Decentralized Influencer Partnerships',
    description: 'Partner with influencers on a transparent platform for authentic engagements and clear terms.',
    icon: '💼',
  },
  {
    title: 'Smart Contract Ad Delivery Assurance',
    description: 'Guarantee ad delivery with smart contracts, ensuring commitments and satisfying advertisers.',
    icon: '🔗',
  },
  {
    title: 'Real-Time Ad Bidding Systems',
    description: 'Bid for ad spaces in real-time, optimizing ad placements & ensuring competitive prices.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain in Affiliate Marketing',
    description: 'Enhance affiliate marketing with blockchain, ensuring transparent tracking & reliable payouts.',
    icon: '⚙️',
  },
  {
    title: 'Secure User Consent Management',
    description: 'Capture & manage user consents securely, ensuring compliance & respecting user choices',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Ad Creative Repositories',
    description: 'Store & access ad creatives on decentralized platforms, ensuring security & ease of access.',
    icon: '⚙️',
  },
  {
    title: 'Audience Engagement & Loyalty Tokens',
    description: 'Boost audience loyalty with token rewards, driving repeat engagements & brand loyalty.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Brand Safety Tools',
    description: 'Protect brand reputation on decentralized platforms, ensuring safe ad placements.',
    icon: '⚙️',
  },
  {
    title: 'Revenue Split & Payout Automation',
    description: 'Automate ad revenue distribution for fair payouts and reduce operational overhead.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Maximize Ads with Blockchain's Verifiable Insights!" details="N3X Chain redefines advertising with trailblazing blockchain solutions. Enhance ad verifiability, streamline campaign audits, and ensure transparent ad spend. With our pioneering blockchain advertising services, step into an era of accountable and optimized ad campaigns. Transform your advertising journey with N3X Chain." image={"/advertise.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;