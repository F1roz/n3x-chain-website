"use client";
import {Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown} from "react-icons/fa";
import ServiceBar from "../home/serviceBar";
import SolutionBar from "../home/solutionBar";
import MobileMenu from "./mobile-menu";

const Header = () => {
  
  const menus = ["services", "solutions", "company"];

  return (
    <nav className="containers z-50 flex items-center justify-between absolute top-0 w-full py-5 font-jost">
      <Link href={'/'}>
        <Image
          src={"/logo.png"}
          width={500}
          height={200}
          alt="Logo"
          className="lg:w-[95px] lg:h-[68px] md:w-[70px] md:h-[50px] w-[60px] h-[40px]"
        />
      </Link>
      <menu className="text-white ">
        <ul className="lg:flex items-center gap-[35px] hidden text-[15px] font-medium leading-[22px] capitalize ">
          {menus.map((item, index) => (
            <div key={index} className="">
              {item === "services" && (
                <Popover content={<ServiceBar />}>
                  <div className="flex items-center gap-2 ">
                    <Link className="z-40 " href={"#"}>
                      {item}
                    </Link>
                    <FaAngleDown />
                  </div>
                </Popover>
              )}
              {item === "solutions" && (
                <Popover content={<SolutionBar />}>
                  <div className="flex items-center gap-2">
                    <Link className="z-40" href={"#"}>
                      {item}
                    </Link>
                    <FaAngleDown />
                  </div>
                </Popover>
              )}
              {item !== "services" && item !== "solutions" && (
                <Link className="z-40" href={item ==="company" ? "/company": item==="our labs" ? "/labs":"/blogs"}>
                  {item}
                </Link>
              )}
            </div>
          ))}
        </ul>
        {/* small device */}
          <MobileMenu menus={menus}/>     
      </menu>
    </nav>
  );
};

export default Header;
