import React from 'react';

const DevCard = ({ customIcon, data, className }) => {
    return (
        <div className={className}>
            <div className="relative flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="138" height="158" viewBox="0 0 138 158" fill="none">
                    <path
                        d="M1.08399 39.7887L69 0.57735L136.916 39.7887V118.211L69 157.423L1.08399 118.211V39.7887Z"
                        stroke="url(#paint0_linear_5_956)"/>
                    <defs>
                        <linearGradient id="paint0_linear_5_956" x1="-12.4184" y1="64" x2="140.38" y2="149.472"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1FEBB0"/>
                            <stop offset="0.5581" stop-color="#30D3CE"/>
                            <stop offset="1" stop-color="#069CFD"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg className="absolute top-[8px] left-[7px]" xmlns="http://www.w3.org/2000/svg" width="124"
                     height="142"
                     viewBox="0 0 124 142" fill="none">
                    <path d="M1.0122 35.7887L62 0.57735L122.988 35.7887V106.211L62 141.423L1.0122 106.211V35.7887Z"
                          fill="#090808" stroke="url(#paint0_linear_5_955)"/>
                    <defs>
                        <linearGradient id="paint0_linear_5_955" x1="-11.1735" y1="57.519" x2="126.152" y2="134.336"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1FEBB0"/>
                            <stop offset="0.5581" stop-color="#30D3CE"/>
                            <stop offset="1" stop-color="#069CFD"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute">{customIcon}</div>
            </div>
            <div className={"text-center flex flex-col gap-2 mt-3"}>
                <h3 className="company_process_card_title">{data?.title}</h3>
                <p>{data?.description}</p>
            </div>
        </div>
    )
        ;
};

export default DevCard;
