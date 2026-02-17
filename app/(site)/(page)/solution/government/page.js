import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Immutable Public Record Management',
    description: 'Maintain unalterable public records, ensuring transparency & long-term data integrity.',
    icon: '🛠️', 
  },
  {
    title: 'Blockchain-Verified Licenses & Permits',
    description: 'Issue and verify permits & licenses on blockchain, ensuring authenticity & fraud prevention.',
    icon: '🖼️',
  },
  {
    title: 'Blockchain for Tax Collection & Audits',
    description: 'Streamline tax processes with blockchain, ensuring efficient collection & transparent auditing.',
    icon: '💳',
  },
  {
    title: 'Transparent Grant & Subsidy Management',
    description: 'Monitor grants & subsidies transparently, ensuring equitable distribution & optimal utilization.',
    icon: '📊',
  },
  {
    title: 'Secure ID Verification Systems',
    description: 'Authenticate identities with utmost security, ensuring citizen protection & service accuracy.',
    icon: '🔐',
  },
  {
    title: 'Real-Time Infrastructure Monitoring',
    description: 'Track infrastructure live status, optimizing maintenance & timely interventions.',
    icon: '💼',
  },
  {
    title: 'Tamper-Proof Land & Property Registry',
    description: 'Ensure unalterable property records, reducing disputes & fostering public trust.',
    icon: '🔗',
  },
  {
    title: 'Blockchain-Based Social Welfare Systems',
    description: 'Distribute welfare transparently, ensuring fair allocations & reducing system abuse.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Public Service Applications',
    description: 'Access public services on decentralized platforms, ensuring service equity & swift responses.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Foreign Aid Tracking',
    description: 'Monitor foreign aid transparently, ensuring ethical use & reinforcing donor trust.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Crime & Incident Reporting',
    description: 'Report & track incidents securely, optimizing response times & public safety measures.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Environmental Data Management',
    description: 'Monitor environmental data transparently, promoting informed policies & public trust.',
    icon: '⚙️',
  },
  {
    title: 'Secure and Decentralized Census Systems',
    description: 'Conduct censuses securely & transparently, ensuring data accuracy & citizen privacy.',
    icon: '⚙️',
  },
  {
    title: 'Smart Contract-Enabled Legislation Processes',
    description: 'Automate legislative processes, ensuring transparent policy-making & public engagement..',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Redefine Governance by Blockchain's Transparency!" details="N3X Chain modernizes governmental systems using blockchain's unparalleled integrity and transparency. From secure digital voting to tamper-proof public records, we reshape governance processes, ensuring accountability, swift implementations, and enhanced citizen trust. Collaborate with Deepchain Labs for transformative government solutions." image={"/gov.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;