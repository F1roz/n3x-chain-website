import Link from "next/link";
import React from "react";
import {
  FaCreditCard,
  FaWifi,
  FaBoxes,
  FaBolt,
  FaBook,
  FaBuilding,
  FaBullhorn,
  FaCar,
  FaTruck,
  FaGavel,
  FaHandHoldingUsd,
  FaLandmark,
  FaHeartbeat,
  FaTractor,
  FaShieldAlt,
  FaFingerprint,
  FaServer,
  FaStore,
} from "react-icons/fa";

const additionalServices = [
  { link: "/solution/fintech", title: "FinTech", icon: <FaCreditCard /> },
  { link: "/solution/iot", title: "IOT", icon: <FaWifi /> },
  { link: "/solution/supplychain", title: "Supply Chain", icon: <FaBoxes /> },
  { link: "/solution/energy", title: "Energy", icon: <FaBolt /> },
  { link: "/solution/education", title: "Education", icon: <FaBook /> },
  { link: "/solution/realstate", title: "Real Estate", icon: <FaBuilding /> },
  { link: "/solution/advertising", title: "Advertising", icon: <FaBullhorn /> },
  { link: "/solution/automotive", title: "Automotive", icon: <FaCar /> },
  { link: "/solution/logistic", title: "Logistics", icon: <FaTruck /> },
  { link: "/solution/legal", title: "Legal", icon: <FaGavel /> },
  { link: "/solution/crowd", title: "Crowd Funding", icon: <FaHandHoldingUsd /> },
  { link: "/solution/government", title: "Government", icon: <FaLandmark /> },
  { link: "/solution/healthcare", title: "Health Care", icon: <FaHeartbeat /> },
  { link: "/solution/agriculture", title: "Agriculture", icon: <FaTractor /> },
  { link: "/solution/insurance", title: "Insurance", icon: <FaShieldAlt /> },
  { link: "/solution/digitalidentity", title: "Digital Identity", icon: <FaFingerprint /> },
  { link: "/solution/infrastructure", title: "IT Infrastructure", icon: <FaServer /> },
  { link: "/solution/retail", title: "Retail", icon: <FaStore /> },
];

const SolutionBar = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 via-gray-800 z-20  to-gray-900">
      <div className="grid grid-cols-2 md:grid-cols-3 z-20  lg:grid-cols-4 gap-4">
        {additionalServices.map((service, index) => (
          <Link
            key={index}
            href={service?.link}
            className="flex items-center lg:gap-4 gap-2 p-2 z-20 cursor-pointer border border-gray-700 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-500 text-2xl mr-3 z-20 ">{service.icon}</div>
            <div className="text-white z-20  font-medium">{service.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionBar;
