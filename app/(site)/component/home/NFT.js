"use client";
import Image from "next/image";
import Button2 from "../common/button2";
import Marquee from "react-fast-marquee";

const NFT = () => {
  return (
    <div className="font-poppins relative">
      <div className="containers">
        <div className="lg:pt-[244px] pt-[50px] xl:pb-[102px] z-40 lg:pb-[70px] pb-10 flex items-center md:justify-start justify-center gap-3 flex-wrap">
          <Button2 name="Learning Mangement Sysytem" />
          <Button2 name="Digital publishing Sysytem" />
          <Button2 name="NFT Soluations Sysytem" />
          <Button2 name="E- Learning Platforms" />
          <Button2 name="E- Learning Platforms" />
        </div>
        <div className="flex items-center md:flex-row z-30  flex-col xl:gap-[237px] lg:gap-[100px] gap-16 xl:pb-[128px] lg:pb-[90px] pb-10">
          <div>
            <h3 className="heading2 2xl:pt-[110px] pt-[75px] sm:mt-[50px] lg:pt-[120px] xl:pt-[120px]">
              NFT Management System
            </h3>
            <p className="paragraph1 md:mb-[50px] md:mt-[28px] mt-5 mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              suspendisse mauris nisi sagittis, iaculis velit. Blandit
              consectetur lacus non metus. Neque sit cras lacinia nunc justo
              pulvinar fames. Non dictum ut morbi lobortis arcu velit.Commodo ut
              risus quam bibendum maecenas augue. Leo, at in aliquam ac
              sagittis, aliquam. Ultricies tempus, turpis egestas sed tristique
              amet. Quam arcu eu semper mattis lectus in amet adipiscing egestas
            </p>
          </div>
          <Image
            alt="nft"
            src="/nft.png"
            height={500}
            width={500}
            className="w-[296px] h-[281px] lg:w-[376px] z-30 lg:h-[358px] object-fill"
          ></Image>
        </div>

        <Marquee>
          <div className="flex items-center z-30  xl:gap-[90px] lg:gap-[50px] gap-[30px] flex-wrap xl:pb-[380px] lg:pb-[250px] pb-20">
            <Image
              alt="nf"
              src="/company/profil.png"
              height={30}
              width={139}
              className="h-[30px] object-fill"
            ></Image>
            <Image
              alt="nf"
              src="/company/cdn.png"
              height={30}
              width={139}
              className="h-[30px] object-fill"
            ></Image>
            <Image
              alt="nf"
              src="/company/kaspersky.png"
              height={30}
              width={139}
              className="h-[30px] object-fill"
            ></Image>
            <Image
              alt="nf"
              src="/company/datarobot.png"
              height={30}
              width={139}
              className="h-[30px] object-fill"
            ></Image>
            <Image
              alt="nf"
              src="/company/spacex.png"
              height={30}
              width={139}
              className="h-[30px] object-fill"
            ></Image>
          </div>
        </Marquee>
      </div>
      <Image
        src={"/Ellipse6.png"}
        width={1000}
        height={500}
        alt="elp"
        className="absolute !-z-10 h-[80%] w-[900px] -bottom-[15%] left-0"
      />
      <Image
        src={"/Vector5.png"}
        width={1000}
        height={500}
        alt="elp"
        className="absolute !-z-10 h-[90%] w-full -bottom-[30%]"
      />
      <Image
        src={"/Vector7.png"}
        width={1000}
        height={500}
        alt="elp"
        className="absolute !-z-10 h-[50%] w-[50% -bottom-[30%] right-0"
      />
    </div>
  );
};

export default NFT;
