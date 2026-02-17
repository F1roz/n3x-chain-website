import Image from 'next/image';
import React from 'react';

const Choosecard = ({ title, description, url }) => {
    return (
        <div className="flex items-center gap-8">
            <Image src={url} width={500} height={400} alt='image' className='w-[120px]' />
            <div>
                <h3 className="lg:text-xl text-lg font-semibold mb-2">{title}</h3>
                <p className="md:text-base text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Choosecard;