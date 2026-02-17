const SectionTitle = ({ title, des }) => {
    return (
        <div className="text-center">
            <h3 className=" text-xl font-medium text-white">
                {title}
            </h3>
            <div className="w-[150px] h-[1.5px] bg-white mx-auto mt-1 mb-4"></div>
            <h3 className="lg:text-[30px] sm:text-xl text-lg font-medium lg:leading-10 leading-[22px] text-white">
                {des}</h3>
        </div>
    );
};

export default SectionTitle;