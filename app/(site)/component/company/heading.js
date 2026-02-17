import React from 'react';

const CompanyHeading = ({subtitle,title}) => {
    return (
        <div className='lg:w-[70%] w-full mx-auto'>
            <h2 className={"missionContentCount border-b-[2px] border-b-[#1FEBB0] pb-[10px] w-fit mx-auto"}>{subtitle}</h2>
            <h1 className={"companyMissionTitle mt-4"}>{title}</h1>
        </div>
    );
};

export default CompanyHeading;