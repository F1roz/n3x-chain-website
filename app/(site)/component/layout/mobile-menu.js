'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaEnvelope, FaFacebookF, FaGamepad, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { Collapse } from 'antd';
import { menus } from '../../utils/menu';

const { Panel } = Collapse;

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const handleCollapseChange = (key) => {
    setActiveKey(key);
  };


  return (
    <>
      <div onClick={() => setOpen(true)} className="lg:hidden cursor-pointer flex gap-5 items-center">
        <FaBars size={30} />
      </div>
      <div
        className={
          open
            ? 'fixed left-0 top-0 w-[100%] h-fit lg:hidden bg-[#111014] text-white p-6 ease-in duration-500 z-50'
            : 'fixed left-[-100%] w-[100%] top-0 bg-[#111014] h-fit p-6 lg:hidden ease-in duration-500 z-50'
        }
      >
        <div className="z-40">
          <div className="flex justify-between border-b pb-8 border-white">
            <Link onClick={() => setOpen(false)} href={'/'}>
              <Image
                src={'/logo.png'}
                width={500}
                height={200}
                alt="Logo"
                className="lg:w-[95px] lg:h-[68px] md:w-[70px] md:h-[50px] w-[60px] h-[40px]"
              />
            </Link>
            <IoCloseSharp onClick={() => setOpen(false)} className="z-30" size={40} />
          </div>
          <div>
            <Collapse
              accordion
              bordered={false}
              className="bg-transparent text-white capitalize"
              onChange={handleCollapseChange}
              activeKey={activeKey}
            >
              {menus.map((menu, index) => (
                <Panel
                  header={menu.title}
                  key={index.toString()}
                  className={`!text-white border-b border-white ${activeKey === index.toString() && menu.subMenus.length < 5
                    ? 'h-[40vh] overflow-y-auto'
                    : ''
                    }`}
                ><div className={` ${menu.subMenus.length > 3 ? 'h-[20vh] overflow-y-auto' : ''}`}>
                    {menu.subMenus.map((subItem, subIndex) => (
                      <Link
                        onClick={() => setOpen(false)}
                        key={subIndex}
                        href={subItem.link}
                        className="block py-2 px-4 text-white"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </Panel>
              ))}
              <Link
                onClick={() => setOpen(false)}
                href={"/company"}
                className="block py-2 px-4 text-white"
              >
                Company
              </Link>
            </Collapse>
            <div className="flex gap-4 justify-center pt-8 border-t">
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white">
                <FaFacebookF className="text-blue-500 text-xl" />
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white">
                <FaLinkedinIn className="text-blue-500 text-xl" />
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white">
                <FaEnvelope className="text-blue-500 text-xl" />
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white">
                <FaTwitter className="text-blue-500 text-xl" />
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white">
                <FaGamepad className="text-blue-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
