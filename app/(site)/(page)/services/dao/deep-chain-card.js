import React from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const DeepChainCard = ({ item }) => {
    return (
        <div className='border-2 border-primary rounded-[8px] px-8 py-5 cursor-pointer hover:bg-primary/20 hover:scale-105 transition duration-400'>
            <div className='flex items-center gap-6'>
                {item?.icon}
                <h1 className='lg:text-xl text-lg font-semibold'>{item?.title}</h1>
            </div>
            <div className='mt-6 flex justify-between items-center text-primary'>
                <h2 className=' font-medium lg:text-xl text-lg'>Follow us</h2>
                <IoArrowForwardCircleOutline size={30} className="text-primary" />
            </div>
        </div>
    );
};

export default DeepChainCard;