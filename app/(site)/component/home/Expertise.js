"use client";
import Image from "next/image";

const Expertise = () => {
  return (
    <div className="font-poppins ">
      <Image src={'/Vector2.png'} width={1000} height={500} alt='v1' className='absolute -z-10 h-[25%] w-[50%] top-[52%]' />
      <Image src={'/Vector3.png'} width={1000} height={500} alt='v2' className='absolute -z-10 w-[50%] h-[30%] top-[54%] left-[25%]' />
      <Image src={'/Vector4.png'} width={1000} height={500} alt='v3' className='absolute -z-10 w-[50%] h-[30%] right-0 bottom-[10%]' />
      <div className="containers flex lg:flex-row items-center z-10 flex-col xl:gap-[237px] lg:gap-[100px] gap-16 ">
        <div className="flex items-center xl:gap-[55px] md:gap-[40px] gap-5 lg:w-1/2 w-full sm:justify-center px-3">
          <Image
            alt="piramid"
            src="/piramid.png"
            height={500}
            width={500}
            className="w-[200px] h-[340px] sm:w-[296px] z-20 lg:w-[376px] lg:h-[358px] object-fill"
          ></Image>
          <div className="h-full flex flex-col items-center z-20 mt-4 sm:mt-[50px] md:mt-0 lg:mt-14 xl:mt-8">
            <div className="relative flex items-center flex-col">
              <div className="piramid_text_top bg-[#7A6FE5]">
                <h4 className="piramid_text">
                  ERP
                </h4>
              </div>
              <div className="absolute top-3 sm:h-36 h-32 w-0.5 border-l-[3px] border-dashed"></div>
            </div>
            <div className="piramid_long border-[#505263]"></div>
            <div className="relative flex items-center flex-col">
              <div className="piramid_text_top bg-[#6930C3]">
                <h4 className="piramid_text">
                  Digital diaries
                </h4>
              </div>
              <div className="absolute top-3 z-20 piramid_long"></div>
            </div>
            <div className="piramid_long border-[#505263]"></div>
            <div className="relative flex z-20  items-center flex-col">
              <div className="piramid_text_top bg-[#8230C4]">
                <h4 className="piramid_text">
                  LMS
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full z-20">
          <h3 className="heading2 z-20 pt-[50px]">
            About Us
          </h3>
          <p className="paragraph1 md:mt-[28px] mt-5 mb-3 lg:w-full z-10">
          N3X Chain combines AI and blockchain expertise to develop cutting-edge solutions across web, mobile, and blockchain applications. Our passionate team is dedicated to providing innovative, scalable, and accessible tools that empower businesses and individuals to thrive in the digital era. From ideation to full deployment, delivering comprehensive solutions that drive innovation and success.
          </p>
          <p className="paragraph1 lg:w-full z-10">
            
          </p>
        </div>
      </div>
    </div >
  );
};

export default Expertise;
