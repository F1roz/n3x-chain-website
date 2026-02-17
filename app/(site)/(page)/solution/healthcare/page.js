import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Secure Patient Data Management',
    description: 'Safeguard patient data with blockchain, ensuring privacy & facilitating swift care decisions.',
    icon: '🛠️', 
  },
  {
    title: 'Tamper-Proof Prescription Tracking',
    description: 'Track prescriptions securely, ensuring correct medications & preventing misuse.',
    icon: '🖼️',
  },
  {
    title: 'Blockchain-Verified Medical Credentials',
    description: 'Verify medical credentials with surety, upholding professional standards & patient trust.',
    icon: '💳',
  },
  {
    title: 'Immutable Medical Procedure Records',
    description: 'Keep unchangeable procedure records, aiding in accurate diagnosis & follow-up care.',
    icon: '📊',
  },
  {
    title: 'Transparent Medical Billing Systems',
    description: 'Monitor billing transparently, ensuring fair charges & aiding patient financial planning.',
    icon: '🔐',
  },
  {
    title: 'Secure Cross-Hospital Data Sharing',
    description: 'Share patient data securely across hospitals, ensuring coordinated & informed care.',
    icon: '💼',
  },
  {
    title: 'Blockchain for Genetic Data Protection',
    description: 'Safeguard genetic data, ensuring research advancements without compromising privacy.',
    icon: '🔗',
  },
  {
    title: 'Decentralized Telemedicine Platforms',
    description: 'Access remote healthcare securely, promoting timely care & reducing physical barriers.',
    icon: '⚙️',
  },
  {
    title: 'Real-Time Drug Supply Chain Tracking',
    description: 'Track drug supplies live, ensuring authenticity & timely medication access.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain-Enabled Patient Consent',
    description: 'Manage patient consents securely, ensuring ethical procedures & upholding patient rights.',
    icon: '⚙️',
  },
  {
    title: 'Secure Health Insurance Claim Processing',
    description: 'Process claims transparently & swiftly, reducing fraud & promoting timely care.',
    icon: '⚙️',
  },
  {
    title: 'Immutable Vaccination Records',
    description: 'Maintain unchangeable vaccination data, aiding in public health decisions & travel.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Medical Research Funding',
    description: 'Allocate research funds transparently, fostering innovation & public trust in studies.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Health & Fitness Data',
    description: 'Access & control health data on decentralized platforms, promoting holistic wellness.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Elevate Health Care by Blockchain’s Data Security!" details="N3X Chain innovates health care through the potency of blockchain. Ensure patient data confidentiality, streamline medical records, enhance diagnosis traceability, and foster secure telehealth platforms. With our innovative blockchain services, embrace a future of integrated, secure, and patient-centric care. Revolutionize health dynamics with  N3X Chain." image={"/health.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;