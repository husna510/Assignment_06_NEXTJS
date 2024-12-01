import React from "react";
import Image from "next/image";

const Sec3 = () => {
  return (
    <div className="flex w-full h-auto top-[1038px] left-[100px] p-[80px] pr-16 pl-16 gap-16 bg-[#F7F7F7]">
      <h5 className="flex w-[320px] h-[68px] font-bold text-[24px] leading-[33.6px] text-black">
        Trusted by 2000+ companies worldwide.
      </h5>
      <div className="flex w-[880px] h-auto py-[8.74px] gap-[19.12px]">
        <Image
          src="\symbols\1logo.svg"
          alt="logo1"
          width={123.8}
          height={38.52}
        />
        <Image
          src="\symbols\2logo.svg"
          alt="logo2"
          width={123.8}
          height={38.52}
        />
        <Image
          src="symbols\3logo.svg"
          alt="logo3"
          width={123.8}
          height={38.52}
        />
        <Image
          src="symbols\4logo.svg"
          alt="logo4"
          width={123.8}
          height={38.52}
        />
        <Image
          src="symbols\5logo.svg"
          alt="logo5"
          width={123.8}
          height={38.52}
        />
        <Image
          src="symbols\6logo.svg"
          alt="logo6"
          width={123.8}
          height={38.52}
        />
      </div>
    </div>
  );
};

export default Sec3;
