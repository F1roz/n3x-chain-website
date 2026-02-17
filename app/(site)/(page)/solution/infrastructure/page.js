import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Decentralized Data Storage Solutions',
    description: 'Store data on decentralized nodes, enhancing security & reducing single points of failure.',
    icon: '🛠️', 
  },
  {
    title: 'Blockchain-Verified Infrastructure Logs',
    description: 'Maintain and verify system logs with blockchain, ensuring traceability & transparency.',
    icon: '🖼️',
  },
  {
    title: 'Secure Inter-Server Communication',
    description: 'Facilitate secure server communications, preventing breaches & ensuring data integrity.',
    icon: '💳',
  },
  {
    title: 'Tamper-Proof Network Traffic Monitoring',
    description: 'Monitor network traffic securely, identifying anomalies & protecting against threats.',
    icon: '📊',
  },
  {
    title: 'Blockchain for Secure Remote Access',
    description: 'Enable remote access securely via blockchain, ensuring verified users & safeguarding data.',
    icon: '🔐',
  },
  {
    title: 'Immutable IT Asset Management',
    description: 'Track and manage IT assets on an unchangeable ledger, ensuring clarity & compliance.',
    icon: '💼',
  },
  {
    title: 'Secure Data Backup & Recovery Systems',
    description: 'Backup & recover data confidently with robust blockchain security layers.',
    icon: '🔗',
  },
  {
    title: 'Decentralized Content Delivery Networks',
    description: 'Optimize content delivery via decentralized pathways, ensuring faster distribution.',
    icon: '⚙️',
  },
  {
    title: 'Transparent IT Resource Billing',
    description: 'Experience clear & transparent billing for IT resources, eliminating discrepancies.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain for IoT Network Security',
    description: 'Secure IoT networks using blockchain, defend vulnerabilities & unauthorized access.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Incident & Breach Reporting',
    description: 'Record IT incidents permanently, ensuring transparency & aiding in future prevention.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain-Verified Software Licenses',
    description: 'Verify software licenses using blockchain, ensuring authenticity & combating piracy.',
    icon: '⚙️',
  },
  {
    title: 'Transparent IT Infrastructure Analytics',
    description: 'Access precise IT analytics, providing insights & facilitating informed decisions.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Boost IT Infrastructure with Blockchain Solutions!" details="N3X Chain presents advanced IT Infrastructure solutions, leveraging the latest in blockchain technology. Ensure a resilient, scalable, and secure foundation for your digital operations. Streamline deployments, bolster security, and achieve seamless integration. Revolutionize your IT landscape with N3X Chain' expertise." image={"/itf.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;