import React from 'react';

const Button = ({ name }) => {
    return (
        <button
            className={`relative text-[#003456] font-semibold md:px-[55px] cursor-pointer md:py-3 px-6 py-2 rounded-[2.5px] font-poppins overflow-hidden z-30`}
            style={{
                background: 'linear-gradient(to right, rgba(31, 235, 176, 1), rgba(48, 211, 206, 1), rgba(6, 156, 253, 1))',
                boxShadow: '0px 0px 10px rgba(104, 107, 212, 1)',
            }}
        >
            <span className="relative z-10">{name}</span>
            <div
                className="absolute inset-0 border-2 border-transparent rounded-[2.5px] transition-all duration-300 ease-out"
                style={{
                    background: 'linear-gradient(to right, rgba(31, 235, 176, 1), rgba(48, 211, 206, 1), rgba(6, 156, 253, 1))',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                }}
            />
            <div
                className="absolute inset-0 transition-all duration-300 ease-out rounded-[2.5px] bg-transparent hover:border-[2px] hover:border-white"
            />
        </button>
    );
};

export default Button;
