import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Decentralized Real Estate Marketplaces',
    description: 'Explore & list properties on a transparent platform, eliminating intermediaries for direct deals.',
    icon: '🛠️', 
  },
  {
    title: 'Smart Contract Lease & Rent Agreements',
    description: 'Seal rental deals with smart contracts, ensuring clear terms & automated compliance.',
    icon: '🖼️',
  },
  {
    title: 'Transparent Property History Tracking',
    description: "Access a property's history transparently, aiding informed purchase decisions.",
    icon: '💳',
  },
  {
    title: 'Secure Tenant Verification Systems',
    description: 'Screen tenants reliably, ensuring trustworthy occupants & reduced rental risks.',
    icon: '📊',
  },
  {
    title: 'Decentralized Property Management',
    description: 'Manage properties efficiently on a decentralized platform, optimizing operations & profits.',
    icon: '🔐',
  },
  {
    title: 'Transparent Construction Supply Chains',
    description: 'Track construction materials & processes, ensuring quality builds & stakeholder confidence.',
    icon: '💼',
  },
  {
    title: 'Peer-to-Peer Real Estate Financing',
    description: 'Connect directly with financiers, streamlining property financing and reducing costs',
    icon: '🔗',
  },
  {
    title: 'Tokenized Real Estate Investments',
    description: 'Invest in property with digital tokens for flexible, fractional ownership and trading.',
    icon: '⚙️',
  },
  {
    title: 'Smart Contract-Based Escrow Services',
    description: 'Ensure secure property transactions with trusted, automated escrow systems.',
    icon: '⚙️',
  },
  {
    title: 'Real-Time Utility & Maintenance Billing',
    description: 'Track & pay utility and maintenance bills in real-time, simplifying property management.',
    icon: '⚙️',
  },
  {
    title: 'Digital ID for Property Owners & Agents',
    description: 'Swiftly verify property stakeholders, fostering trust & streamlined real estate processes.',
    icon: '⚙️',
  },
  {
    title: 'Crowd-Sourced Real Estate Funding',
    description: 'Raise real estate capital from the crowd, ensuring transparency and community engagement.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain in Vacation Rental Management',
    description: 'Optimize vacation rentals with blockchain, ensuring guest trust & efficient operations.',
    icon: '⚙️',
  },
  {
    title: 'Real Estate Commission Tracking System',
    description: 'Monitor & validate commissions transparently, ensuring fair compensation for agents.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Secure Real Estate Deals with Blockchain Solutions!" details="N3X Chain reshapes the real estate landscape with groundbreaking blockchain solutions. Simplify property transactions, ensure tamper-proof land registries, and automate lease management. With our innovative blockchain real estate services, navigate a future of transparent and efficient property dealings. Revolutionize real estate with N3X Chain." image={"/realstate.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;