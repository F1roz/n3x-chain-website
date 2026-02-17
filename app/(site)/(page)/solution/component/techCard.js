import Link from "next/link";

const FinTechCard = ({ item, key }) => {
    return (
        <Link href={item.link} className="relative p-6 bg-primary/20 shadow-md rounded-lg w-48 font-poppins h-48 border border-blue-400 transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-center h-24 w-24 mx-auto hexagon border border-primary bg-white transform transition duration-300 ">
                <div className="text-primary text-3xl transition duration-300 ">{item.icon}</div>
            </div>
            <div className="text-center text-primary mt-4 text-lg font-medium transform transition duration-300 hover:text-blue-700">
                {item.title}
            </div>
        </Link>
    );
};

export default FinTechCard;
