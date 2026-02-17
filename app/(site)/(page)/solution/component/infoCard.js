import React from "react";
import { FaSellcast } from "react-icons/fa";

const InfoCard = ({ icon, title, description }) => {
    return (
        <div className="group bg-white/10 drop-shadow-sm text-white  rounded-lg p-4 text-center shadow-md transition-transform transform-gpu hover:rotate-6 hover:scale-105 duration-300 w-[290px]">
            <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <h3>{icon}</h3>
                </div>
            </div>
            <h5 className="text-base font-semibold tracking-tight mb-2">
                {title}
            </h5>
            <p className="font-normal  text-sm">
                {description}
            </p>
        </div>
    );
};

export default InfoCard;
