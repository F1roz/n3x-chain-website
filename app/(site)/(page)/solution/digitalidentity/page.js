import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Secure Identity Verification Systems',
    description: 'Fortify identity checks, ensuring genuine access & mitigating identity fraud risks.',
    icon: '🛠️', 
  },
  {
    title: 'Decentralized Identity Management Platforms',
    description: 'Control your identity on decentralized platforms, ensuring privacy & autonomy.',
    icon: '🖼️',
  },
  {
    title: 'Tamper-Proof Biometric Data Storage',
    description: 'Store biometric data securely, preventing unauthorized access & preserving privacy',
    icon: '💳',
  },
  {
    title: 'Blockchain for KYC',
    description: 'Simplify KYC processes with blockchain, making verifications quicker & more reliable.',
    icon: '📊',
  },
  {
    title: 'Tokenized Assets Control Systems',
    description: 'Manage assets via tokens, ensuring clear ownership & efficient transfers.',
    icon: '🔐',
  },
  {
    title: 'Immutable Employment History Records',
    description: 'Preserve employment records permanently, ensuring authenticity & facilitating checks.',
    icon: '💼',
  },
  {
    title: 'Secure Digital Identity for IoT Devices',
    description: 'Authenticate IoT devices securely, fostering safer integrations & device communications.',
    icon: '🔗',
  },
  {
    title: 'Transparent Data Consent Management',
    description: 'Manage data permissions transparently, ensuring clarity & fostering user trust.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Privacy Control Platforms',
    description: 'Protect privacy on decentralized platforms, ensuring autonomy over personal data.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Academic Credential Verification',
    description: 'Verify credentials permanently, eliminating fake degrees & fostering trust.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain for Multi-Factor Authentication',
    description: 'Enhance login security with blockchain, ensuring robust & foolproof access.',
    icon: '⚙️',
  },
  {
    title: 'Secure Data Sharing with Third Parties',
    description: "Share data confidently, knowing it's secured & only accessed by authorized parties.",
    icon: '⚙️',
  },
  {
    title: 'Tamper-Proof Digital Signature Solutions',
    description: "Sign digitally with the certainty that signatures are authentic & can't be altered.",
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Protect Digital Identities with Blockchain Technology!" details="N3X Chain offers advanced Digital Identity solutions, enabling individuals and entities to authenticate identity, exchange e-documents, and access online services securely. Harness enhanced privacy and security, ensuring transparent, tamper-proof identification with our blockchain Digital Identity services. Elevate your users' trust with N3X Chain." image={"/dgi.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;