import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Tamper-Proof Evidence Management',
    description: 'Ensure evidence integrity with unalterable storage, enhancing trust in legal processes.',
    icon: '🛠️', 
  },
  {
    title: 'Smart Contract-Based Legal Agreements',
    description: 'Seal deals with blockchain contracts, ensuring clear terms & automated compliance.',
    icon: '🖼️',
  },
  {
    title: 'Decentralized Legal Consultation Platforms',
    description: 'Seek legal advice transparently, connecting directly with professionals, no intermediaries.',
    icon: '💳',
  },
  {
    title: 'Transparent Legal Fee Tracking',
    description: 'Monitor legal fees with clarity, ensuring fair billing & informed financial decisions.',
    icon: '📊',
  },
  {
    title: 'Immutable Intellectual Property Records',
    description: "Protect IP rights with permanent records, fostering innovation & upholding creators' rights.",
    icon: '🔐',
  },
  {
    title: 'Blockchain for Legal Document Notarization',
    description: 'Notarize documents on blockchain, ensuring authenticity & worldwide recognition.',
    icon: '💼',
  },
  {
    title: 'Real-Time Case Status Tracking',
    description: 'Stay updated with case progress, ensuring timely interventions & informed strategies.',
    icon: '🔗',
  },
  {
    title: 'Decentralized Legal Aid Funding',
    description: 'Raise & allocate legal aid funds transparently, promoting justice for all.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain-Enabled Patent Management',
    description: 'Manage patents with blockchain, ensuring swift processing & clear ownership.',
    icon: '⚙️',
  },
  {
    title: 'Legal Service Quality & Review System',
    description: 'Evaluate legal services based on transparent reviews, ensuring quality & trust.',
    icon: '⚙️',
  },
  {
    title: 'Smart Contracts for Dispute Resolutions',
    description: 'Automate & expedite dispute resolutions, ensuring swift justice & minimized litigation.',
    icon: '⚙️',
  },
  {
    title: 'Tamper-Proof Court Order Verification',
    description: 'Validate court orders with surety, ensuring legal compliance & transparent enforcement.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Legal Service Platform',
    description: 'Access a spectrum of legal services, fostering competitive pricing & diverse expertise.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Mergers & Acquisitions Records',
    description: 'Maintain permanent M&A records, ensuring transparent transitions & clear stakeholder understanding.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Uphold Justice with Blockchain’s Legal Revolution!" details="N3X Chain revolutionizes the legal sector with pioneering blockchain solutions. Securely store evidence, automate contract executions and verify document authenticity. With our innovative blockchain legal services, step into a future of enhanced transparency and expedited legal processes. Reinvent legal operations with N3X Chain." image={"/legal.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;