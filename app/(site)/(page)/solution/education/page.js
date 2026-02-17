import React from 'react';
import SolutionHero from '../component/solutionHero';
import SolutionServices from '../component/solutionServices';
import BlockchainApp from '../component/solutionBockchain';
import EveryChallange from '../component/everyChallange';
const services = [
  {
    title: 'Tamper-Proof Digital Certificates',
    description: 'Ensure the integrity of digital credentials, making forgery a thing of the past with blockchain.',
    icon: '🛠️', 
  },
  {
    title: 'Blockchain-Based Attendance Systems',
    description: 'Track attendance reliably, offering transparency and reducing discrepancies in student records.',
    icon: '🖼️',
  },
  {
    title: 'Secure Student Data Management',
    description: 'Protect student information with top-notch security, ensuring privacy & data integrity.',
    icon: '💳',
  },
  {
    title: 'Decentralized Educational Resources',
    description: 'Access and share resources on a decentralized platform, fostering collaboration and growth.',
    icon: '📊',
  },
  {
    title: 'Digital ID for Students and staff',
    description: 'Simplify identification with digital IDs, ensuring fast, reliable access to services & resources.',
    icon: '🔐',
  },
  {
    title: 'Smart Contract-Based Enrollment',
    description: 'Automate and secure enrollment process for seamless, tamper-proof admissions.',
    icon: '💼',
  },
  {
    title: 'Real-Time Skills Verification Platforms',
    description: 'Verify skills instantly, ensuring students & professionals showcase genuine capabilities.',
    icon: '🔗',
  },
  {
    title: 'Secure Research Collaboration Tools',
    description: 'Collaborate on research projects with assured data protection & transparency.',
    icon: '⚙️',
  },
  {
    title: 'Blockchain-Enabled Exam Management',
    description: 'Streamline exams with blockchain, ensuring fairness, transparency, & reduced malpractice risks.',
    icon: '⚙️',
  },
  {
    title: 'Transparent Fund Allocation & Tracking',
    description: 'Track educational funds with clarity, ensuring proper allocation & transparent usage.',
    icon: '⚙️',
  },
  {
    title: 'Decentralized Tutoring & Mentorship',
    description: 'Connect with tutors on a decentralized platform for personalized learning experiences.',
    icon: '⚙️',
  },
  {
    title: 'Research Publication Authenticity Check',
    description: 'Fund education through crowds, promoting transparency and community involvement.',
    icon: '⚙️',
  },
  {
    title: 'Crowdsourced Educational Funding',
    description: 'Fund education initiatives through the crowd, promoting transparency & community involvement.',
    icon: '⚙️',
  },
];

const page = () => {
  return (
    <div>
      <SolutionHero heading="Redefine Learning through Blockchain Innovations!" details="N3X Chain empowers the education sector with transformative blockchain solutions. Securely verify credentials, streamline course registrations, and safeguard student data. With our pioneering blockchain education services, embrace a future of enhanced transparency and academic integrity. Elevate learning experiences with N3X Chain." image={"/education.webp"} />
      <SolutionServices services={services} />
      <BlockchainApp />
      <EveryChallange />
    </div>
  );
};

export default page;