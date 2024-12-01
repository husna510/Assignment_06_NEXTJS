import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" flex  items-center w-full h-[800px] top-[141px] bg-white">
      <div className="flex items-center flex-col w-[640px] h-[300px] pr-[60px] pl-[80px] gap-[24px]">
        <div className="flex flex-col w-[500px] h-[212px] gap-[24px]">
          <h1 className="w-[500px] h-[134px] text-[56px] leading-[67.2px] font-bold text-black">
            Learn new skills online with ease
          </h1>
          <p className="w-[500px] h-[54px] text-[18px] leading-[27px] font-normal text-black">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className=" flex w-[358px] h-16 pt-4 gap-4">
            <button className=" w-[178px] h-[48px] rounded-[5px] border border-black  bg-black p-[12px] pr-[24px] pl-[24px] gap-[8px] ">
              <p className="flex w-[130px] h-[24px] text-white font-normal text-[16px]  leading-6 ">
                Start learning now
              </p>
            </button>
            <button className="w-[164px] h-[48px] rounded-[5px] border border-black flex items-center justify-center">
              <p className="font-normal text-[16px] text-black">
                Start learning now
              </p>
            </button>
          </div>
        </div>
      </div>

      <Image src="\Imagemain.svg" alt="model" width={640} height={900} />
    </div>
  );
};

export default Hero;
