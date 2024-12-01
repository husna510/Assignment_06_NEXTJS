import Image from "next/image";
import React from "react";
import { CiVolumeHigh } from "react-icons/ci";
import { PiShuffleThin } from "react-icons/pi";
import { PiMicrophoneLight } from "react-icons/pi";
import { BsLink } from "react-icons/bs";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { PiBriefcaseLight } from "react-icons/pi";
import { PiBookOpenTextThin } from "react-icons/pi";
import { BiBook } from "react-icons/bi";
import { PiPenNibStraightLight } from "react-icons/pi";


const Team16 = () => {
  return (
    <div className="flex flex-col  w-full h-auto top-[1266px] left-[100px] py-[112px] gap-[80px] bg-white">
      <div className="flex flex-col w-auto h-auto gap-[35.7px] justify-center items-center">
        <h2 className=" w-[768px] h-[58px] font-bold text-[48px] leading-[57.6px] text-black">
          Explore Courses By Category
        </h2>
        <p className=" w-[768px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      <div className="w-full h-auto flex gap-[96px] bg-white">
        <div className="flex w-full h-auto gap-6">
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
            <PiPenNibStraightLight className="w-8 h-8 text-[#292D32]"/>

            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Design & Development
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <div>
                <CiVolumeHigh className="w-8 h-8 text-[#292D32]" />
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Marketing
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <div>
                <PiShuffleThin className="w-8 h-8 text-[#292D32]" />
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Development{" "}
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex gap-[96px] bg-white">
        <div className="flex w-full h-auto gap-6">
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <PiMicrophoneLight className="w-8 h-8  text-[#292D32]" />
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Communication{" "}
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <BsLink className="w-8 h-8  text-[#292D32]" />
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Digital Marketing{" "}
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <HiOutlineArrowsRightLeft className="w-8 h-8  text-[#292D32]" />
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Self Development{" "}
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex gap-[96px] bg-white">
        <div className="flex w-full h-auto gap-6">
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <PiBriefcaseLight className="w-8 h-8  text-[#292D32]" />
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Business{" "}
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <PiBookOpenTextThin className="w-8 h-8  text-[#292D32]" />
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Finance{" "}
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-[5px] p-4 gap-8 bg-[#F7F7F7]">
            <div className="w-auto h-auto rounded-[5px] p-[34px] flex gap-[10px] bg-white">
              <BiBook className="w-8 h-8  text-[#292D32]" />
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <p className="w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-black">
                Consulting{" "}
              </p>
              <p className="w-[246.7px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team16;
