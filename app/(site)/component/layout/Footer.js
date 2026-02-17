"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareYoutube } from "react-icons/fa6";
import DatePicker from "../common/datePicker";

const Footer = () => {
  return (
    <footer className=" bg-[#0F121F]  font-poppins z-0 relative pt-24">
      <div className="containers pt-[55px] pb-[65px] ">
        <div className="relative lg:flex hidden">
          <div className="absolute -top-[230px] right-0">
            <DatePicker />
          </div>
        </div>
        <Image
          src={"/logo.png"}
          width={500}
          height={200}
          alt="Logo"
          className="lg:w-[95px] lg:h-[68px] md:w-[70px] md:h-[50px] w-[60px] h-[40px]"
        />
        <h2 className="lg:text-[33px] text-[25px] font-semibold lg:leading-[49px] leading-9 text-[#80818B] mt-[30px]">
          Ready to easily create products with
        </h2>
        <h2 className="lg:text-[33px] text-[25px] font-semibold lg:leading-[49px] leading-9 lg:mb-[35px] mb-[25px] text-white">
          our Technologies
        </h2>
        {/* update */}
        <div className="flex items-center xl:gap-[85px] gap-8 flex-wrap">
          <div className="max-w-[323px]">
            <h4 className="font-medium text-white">About</h4>
            <p className="text-xs leading-[18px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              suspendisse mauris nisi sagittis, iaculis velit. Blandit
              consectetur lacus non metus. Neque sit cras lacinia nunc justo
              pulvinar fames.
            </p>
          </div>
          <Link href="#" className="font-medium text-white">
            Solution
          </Link>
          <Link href="#" className="font-medium text-white">
            Our Projects
          </Link>
          <Link href="#" className="font-medium text-white">
            Contact
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-[18px] md:justify-end justify-center mt-[58px] pb-12 text-white border-b border-[#80818B]">
            <FaFacebookSquare size={26} />
            <FaLinkedin size={26} />
            <RiInstagramFill size={26} />
            <FaBehanceSquare size={26} />
            <FaSquareYoutube size={26} />
          </div>
          <div className="flex sm:flex-row flex-col gap-4 items-center justify-between pt-[23px]">
            <p className="text-[13px] text-white">
              FANTASY 2023 all the Rights Reserved
            </p>
            <div className="flex items-center lg:gap-[66px] gap-[30px]">
              <Link href="#" className="text-[13px] text-white">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-[13px] text-white">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
