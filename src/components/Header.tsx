import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="w-full h-auto top-[100px] left-[100px] pr-16 pl-[62px] bg-[#F7F7F7] shadow-inner ">
        <div className="flex  w-full max-w-[1154px] h-auto mx-8 my-2 py-3 px-4 items-center justify-between ">
          <div className="flex items-center gap-4 ">
            <p className="text-[#000000] font-normal text-[14px] leading-[21px]  hidden sm:block">
              Phone Number: 956 742 455 678
            </p>
            <span className="border-l border-[#000000] h-4 "></span>
            <p className="text-[#000000] font-normal text-[14px] leading-[21px]">
              Email: info@ddsgnr.com
            </p>
          </div>

          <div className="flex gap-[12px] items-center">
            <Link href="/">
              <Image
                src="/Facebook.svg"
                alt="Facebook"
                width={18}
                height={18}
                className="object-contain"
              />
            </Link>
            <Link href="/">
              <Image
                src="/twiter.svg"
                alt="Twitter"
                width={18}
                height={15.3}
                className="object-contain"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={18}
                height={18}
                className="object-contain"
              />
            </Link>
            <Link href="/">
              <Image
                src="/linkedIn.svg"
                alt="LinkedIn"
                width={18}
                height={18}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex items-center   w-[1280px] h-[72px] border-b border-[#6767] bg-[#F7F7F7] px-[64px]"
        style={{
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-center w-[1152px] h-[44px]  justify-between">
          <Image
            src="\Logo.svg"
            alt="Logo"
            width={130.6}
            height={30.38}
            className="w-[130.6px] h-[30.38px]"
          />

          <div className="flex w-[910px] h-11 gap-8 bg-white">
            <div className="flex flex-row items-center bg-[#FFFFFF] w-[687px] h-[44px] gap-[32px]">
              <div className="flex items-center w-[64px] h-11 bb-[1px] p-[10px] gap-[10px] border-b border-black b-[1px] ">
                <Link
                  href="./"
                  className="w-[44px] h-[24px] font-normal text-[16px] leading-[24px] text-black "
                >
                  Home
                </Link>
              </div>

              <div className="flex w-[79px] h-11 bb-[1px] p-[10px] gap-[10px]">
                <Link
                  href="./"
                  className="w-[59px] h-[24px] text-[16px] leading-6 font-normal text-black"
                >
                  Courses
                </Link>
              </div>

              <div className="flex gap-[10px] p-[10px] w-[81px] h-11">
                <Link
                  href="./"
                  className="w-[61px] h-[24px] font-normal text-[16px] leading-6 text-black"
                >
                  Services
                </Link>
              </div>

              <div className="flex w-[113px] h-11 p-[10px] gap-[10px]">
                <Link
                  href="./"
                  className="w-[93px] h-6 font-normal text-[16px] leading-6 text-black"
                >
                  Achievement
                </Link>
              </div>

              <div className="flex w-[104px] h-11 p-[10px] gap-[10px]">
                <Link
                  href="./"
                  className="w-[66px] h-6 font-normal text-[16px] leading-6 text-black"
                >
                  About Us
                </Link>
              </div>

              <div className="flex w-[113px] h-11 p-[10px] gap-[10px]">
                <Link
                  href="./"
                  className="w-[84px] h-6 font-normal text-[16px] leading-6 text-black"
                >
                  Testimonial
                </Link>
              </div>
            </div>

            <div className="flex w-[191px] h-10 gap-4 items-center">
              <button className="w-[80px] h-[40px] rounded-[5px] border border-[#000000] px-[20px] py-[8px] gap-[8px] text-black font-normal text-[12px]">
                Login
              </button>
              <button className="w-[95px] h-[40px] rounded-[5px] border border-[#000000] px-[20px] py-[8px] gap-[8px] bg-[#000000] text-[#FFFFFF] font-normal text-[12px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
