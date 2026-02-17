import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FaNetworkWired,
  FaMoneyBillWave,
  FaCubes,
  FaLayerGroup,
  FaFileContract,
  FaSearchDollar,
  FaBitcoin,
  FaFileImage,
  FaWallet,
  FaShoppingCart,
  FaRobot,
  FaCoins,
  FaChartPie,
  FaMobileAlt,
  FaChartLine,
  FaPaintBrush,
  FaSync,
  FaBrain,
  FaServer,
  FaCloud,
  FaVrCardboard,
  FaDatabase,
} from "react-icons/fa";

const blockchainServices = [
  { link: "/services/dao", title: "DAO Development", icon: <FaNetworkWired /> },
  { link: '/services/defi', title: "DeFi Development", icon: <FaMoneyBillWave /> },
  { link: '/services/dapp', title: "DApp Development", icon: <FaCubes /> },
  { link: '/services/protocol', title: "Protocol Development", icon: <FaLayerGroup /> },
  { link: '/services/smartcontact', title: "Smart Contract Development", icon: <FaFileContract /> },
  { link: '/services/smartcontractaudit', title: "Smart Contract Audit", icon: <FaSearchDollar /> },
  { link: '/services/crypto', title: "Crypto Currency Development", icon: <FaBitcoin /> },
  { link: '/services/nft', title: "NFT Development", icon: <FaFileImage /> },
  { link: '/services/wallet', title: "Wallet Development", icon: <FaWallet /> },
  { link: '/services/nftmarket', title: "NFT Marketplace", icon: <FaShoppingCart /> },
  { link: '/services/tradingbot', title: "Trading Bot Development", icon: <FaRobot /> },
  { link: '/services/tokenization', title: "Tokenization", icon: <FaCoins /> },
  { link: '/services/tokenomics', title: "Tokenomics", icon: <FaChartPie /> },
];

const aiServices = [
  { link: '/services/aiml', title: "AI/ML", icon: <FaBrain /> },
];
const otherServices = [
  { link: '/services/application', title: "Application Development", icon: <FaMobileAlt /> },
  { link: '/services/business', title: "Business Analysis", icon: <FaChartLine /> },
  { link: '/services/designservice', title: "Design Service", icon: <FaPaintBrush /> },
  { link: '/services/digitaltrns', title: "Digital Transformation", icon: <FaSync /> },
  { link: '/services/devops', title: "DevOps Services", icon: <FaServer /> },
  { link: '/services/cloud', title: "Cloud Services", icon: <FaCloud /> },
  { link: '/services/immersive', title: "Immersive Services", icon: <FaVrCardboard /> },
  { link: '/services/dataScience', title: "Data Science", icon: <FaDatabase /> },

];
const ServiceBar = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-fit">
      <div className="h-[70vh] 2xl:h-[80vh] overflow-y-auto hide-scrollbar py-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-6 z-20  text-white">Blockchain</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {blockchainServices.map((service, index) => (
              <Link href={service?.link}>
                <div
                  key={index}
                  className="flex z-20  items-center cursor-pointer lg:gap-4 gap-2 p-2 border border-gray-700 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className=" z-20 text-blue-500 text-xl mr-3">{service.icon}</div>
                  <div className=" z-20 text-base text-white font-medium">{service.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl z-20 font-semibold mb-6 text-white">Artificial Intelligence (AI)</h2>
          <div className="grid z-20 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {aiServices.map((service, index) => (
              <Link href={service?.link} key={index}>
                <div className="flex z-20 items-center cursor-pointer lg:gap-4 gap-2 p-2 border border-gray-700 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-500 z-20 text-xl mr-3">{service.icon}</div>
                  <div className="text-white font-medium z-20 ">{service.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl z-20  font-semibold mb-6 mt-6 text-white">Others</h2>
          <div className="grid z-20  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {otherServices.map((service, index) => (
              <Link href={service?.link} key={index}>
                <div

                  className="flex z-20  items-center cursor-pointer lg:gap-4 gap-2 p-2 border border-gray-700 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-500 z-20  text-xl mr-3">{service.icon}</div>
                  <div className="text-white font-medium z-20 ">{service.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
