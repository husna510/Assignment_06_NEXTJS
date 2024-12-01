import React from "react";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className="flex flex-col w-full h-[auto] top-[5886px] py-[112px] px-16 gap-[18px] bg-[#F7F7F7]">
      <div className="flex flex-col w-auto h-auto gap-6">
        <h2 className="w-[560px] h-[58px] font-bold text-[48px] leading-[57.6px] text-black">
          Customer testimonials
        </h2>
        <p className="w-[560px] h-[27px] font-normal text-[18px] leading-[27px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full h-auto flex flex-col  gap-[48px]">
        <div className="w-full h-auto flex  gap-8">
          <div className="w-full h-auto border p-8 flex flex-col gap-6 border-black ">
            <div className="w-auto h-auto flex gap-1">
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
            </div>
            <div className="w-full h-auto flex flex-col gap-6">
              <p className="w-[298.67px] h-[135px] font-normal text-[18px] leading-[27px] text-black">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="w-auto h-auto flex  gap-5">
                <div className="w-[56px] h-[56px] ">
                  <Image
                    src="\team\T3.svg"
                    alt="James Nduku"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div className="w-auto h-auto flex flex-col">
                  <p className="w-[99px] h-6 font-semibold text-[16px] leading-6 text-black">
                    James Nduku
                  </p>
                  <p className="w-[139px] h-[24px] font-normal text-[16px] leading-6 text-black">
                    Software Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto border p-8 flex flex-col gap-6 border-black ">
            <div className="w-auto h-auto flex gap-1">
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
            </div>
            <div className="w-full h-auto flex flex-col gap-6">
              <p className="w-[298.67px] h-[135px] font-normal text-[18px] leading-[27px] text-black">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="w-auto h-auto flex  gap-5">
                <div className="w-[56px] h-[56px] ">
                  <Image
                    src="\team\T1.svg"
                    alt="Erick Kipkemboi"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div className="w-auto h-auto flex flex-col">
                  <p className="w-[117px] h-6 font-semibold text-[16px] leading-6 text-black">
                    Erick Kipkemboi
                  </p>
                  <p className="w-[101px] h-[24px] font-normal text-[16px] leading-6 text-black">
                    Scrum Master
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto border p-8 flex flex-col gap-6 border-black ">
            <div className="w-auto h-auto flex gap-1">
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
              <IoIosStar className="w-5 h-[18.89px] text-black" />
            </div>
            <div className="w-full h-auto flex flex-col gap-6">
              <p className="w-[298.67px] h-[135px] font-normal text-[18px] leading-[27px] text-black">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="w-auto h-auto flex  gap-5">
                <div className="w-[56px] h-[56px] ">
                  <Image
                    src="\team\T6.svg"
                    alt="Stephen Kerubo"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div className="w-auto h-auto flex flex-col">
                  <p className="w-[115px] h-6 font-semibold text-[16px] leading-6 text-black">
                    Stephen Kerubo
                  </p>
                  <p className="w-[109px] h-[24px] font-normal text-[16px] leading-6 text-black">
                    UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-auto ">
        <div className="w-auto h-auto flex gap-2">
          <p className="w-2 h-2 text-black">●</p>
          <p className="text-[#8D8D8D] w-2 h-2">●</p>
          <p className="text-[#8D8D8D] w-2 h-2">●</p>
          <p className="text-[#8D8D8D] w-2 h-2">●</p>
          <p className="text-[#8D8D8D] w-2 h-2">●</p>
        </div>
        <div className="w-auto h-auto flex gap-[15px] justify-end">
          <div className="flex w-auto h-auto rounded-[50px] border border-black p-3 gap-2">
            <IoIosArrowRoundBack className="w-6 h-6  " />
          </div>

          <div className="flex w-auto h-auto rounded-[50px] border border-black p-3 gap-2">
            <IoIosArrowRoundForward className="w-6 h-6  " />
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
