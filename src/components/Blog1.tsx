import Image from "next/image";
import React from "react";

const Blog1 = () => {
  return (
    // maindiv
    <div className="flex flex-col items-center w-full h-auto top-[3326px] left-[100px] py-[112px] px-16 gap-[60px] bg-white">
      {/* poulation recommendation buttons div   */}
      <div className="flex flex-col justify-center w-[768-px] h-auto gap-4">
        <h1 className="w-[768px] h-[67px] font-bold text-[56px] leading-[67.2px] text-center text-black">
          Courses
        </h1>
        <p className="w-[768px] h-[27px] font-normal text-[18px] leading-[27px] text-center  text-black">
          Your Ultimate Guide to learning
        </p>
      </div>

      <div className="w-full h-auto flex flex-col gap-16 justify-center">
        <div className="w-auto h-auto flex justify-center">
          <button className="w-auto h-auto  border-b-[1px] border-[#676767] py-2 px-4 flex gap-2">
            <p className="w-[55px] h-6 font-normal text-[16px] leading-6 text-black">
              Popular
            </p>
          </button>
          <button className="w-auto h-auto   py-2 px-4 flex gap-2">
            <p className="w-[108px] h-6 font-normal text-[16px] leading-6 text-black">
              Recommended
            </p>
          </button>
          <button className="w-auto h-auto   py-2 px-4 flex gap-2">
            <p className="w-[77px] h-6 font-normal text-[16px] leading-6 text-black">
              Best Price
            </p>
          </button>
        </div>

        {/* information div all the information */}
        <div className="flex flex-col justify-center items-center w-full h-auto gap-16">
          {/* 2 rows 2 divs */}
          <div className="flex w-[1312px] h-auto gap-8">
            {/* 3 divs 3 blogs */}
            <div className="flex flex-col w-full h-auto rounded-[5px] gap-6 bg-[#F7F7F7]">
              <Image
                src="\blog1\Image1.svg"
                alt="UI/UX Design"
                width={416}
                height={300}
              />

              {/* written */}
              <div className="flex flex-col  w-full h-auto px-4 pb-6 gap-6">
                {/* first */}
                <div className="flex flex-col w-[382px] h-auto gap-2">
                  <div className="w-full h-auto flex gap-2">
                    <p className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-black">
                      Design
                    </p>
                    <div className="w-auto h-auto flex gap-1">
                      <Image
                        src="\blog1\Star 1.svg"
                        alt="blog2"
                        width={20}
                        height={20}
                      />
                      <p className="w-5 h-6 font-semibold text-[14px] leading-[21px] text-right">
                        5.0
                      </p>
                    </div>
                  </div>
                  <h5 className="w-[382px] h-[34px] font-bold text-[24px] leading-[33.6px] text-black">
                    UX/UI Design 201
                  </h5>
                  <p className="w-[382px] h-[48px] font-normal text-[16px] leading-6 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                {/* second */}
                <div className="flex w-[382px] h-auto gap-4">
                  <button className=" text-sm py-2 px-4 w-[117px] h-[40px] rounded-[5px] border-[1px] border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal text-[16px] leading-6 text-black">
                      Enroll Now
                    </p>
                  </button>
                  <button className=" text-sm py-2 px-4 w-[77px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px]">
                    <p className="w-[37px] h-6 font-medium text-[16px] leading-6 text-black">
                      $400
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full h-auto rounded-[5px] gap-6">
              {/* 3 divs 3 blogs */}
              <div className="flex flex-col w-full h-auto rounded-[5px] gap-6 bg-[#F7F7F7]">
                <Image
                  src="\blog1\Image2.svg"
                  alt="Programmimg"
                  width={416}
                  height={300}
                />

                {/* written */}
                <div className="flex flex-col  w-full h-auto px-4 pb-6 gap-6">
                  {/* first */}
                  <div className="flex flex-col w-[382px] h-auto gap-2">
                    <div className="w-full h-auto flex gap-2">
                      <p className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-black">
                        Programmimg
                      </p>
                      <div className="w-auto h-auto flex gap-1">
                        <Image
                          src="\blog1\Star 1.svg"
                          alt="blog2"
                          width={20}
                          height={20}
                        />
                        <p className="w-5 h-6 font-semibold text-[14px] leading-[21px] text-right">
                          5.0
                        </p>
                      </div>
                    </div>
                    <h5 className="w-[382px] h-[34px] font-bold text-[24px] leading-[33.6px] text-black">
                      Introduction to Python
                    </h5>
                    <p className="w-[382px] h-[48px] font-normal text-[16px] leading-6 text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  {/* second */}
                  <div className="flex w-[382px] h-auto gap-4">
                    <button className=" text-sm py-2 px-4 w-[117px] h-[40px] rounded-[5px] border-[1px] border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
                      <p className="w-[77px] h-[24px] font-normal text-[16px] leading-6 text-black">
                        Enroll Now
                      </p>
                    </button>
                    <button className=" text-sm py-2 px-4 w-[77px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px]">
                      <p className="w-[37px] h-6 font-medium text-[16px] leading-6 text-black">
                        $400
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto rounded-[5px] gap-6">
              {/* 3 divs 3 blogs */}
              <div className="flex flex-col w-full h-auto rounded-[5px] gap-6 bg-[#F7F7F7]">
                <Image
                  src="\blog1\Image3.svg"
                  alt="Business"
                  width={416}
                  height={300}
                />

                {/* written */}
                <div className="flex flex-col  w-full h-auto px-4 pb-6 gap-6">
                  {/* first */}
                  <div className="flex flex-col w-[382px] h-auto gap-2">
                    <div className="w-full h-auto flex gap-2">
                      <p className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-black">
                        Business
                      </p>
                      <div className="w-auto h-auto flex gap-1">
                        <Image
                          src="\blog1\Star 1.svg"
                          alt="blog2"
                          width={20}
                          height={20}
                        />
                        <p className="w-5 h-6 font-semibold text-[14px] leading-[21px] text-right">
                          5.0
                        </p>
                      </div>
                    </div>
                    <h5 className="w-[382px] h-[34px] font-bold text-[24px] leading-[33.6px] text-black">
                      Data Analysis for Beginners
                    </h5>
                    <p className="w-[382px] h-[48px] font-normal text-[16px] leading-6 text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  {/* second */}
                  <div className="flex w-[382px] h-auto gap-4">
                    <button className=" text-sm py-2 px-4 w-[117px] h-[40px] rounded-[5px] border-[1px] border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
                      <p className="w-[77px] h-[24px] font-normal text-[16px] leading-6 text-black">
                        Enroll Now
                      </p>
                    </button>
                    <button className=" text-sm py-2 px-4 w-[77px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px]">
                      <p className="w-[37px] h-6 font-medium text-[16px] leading-6 text-black">
                        $400
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 rows 2 divs */}
          <div className="flex w-[1312px] h-auto gap-8">
            {/* 3 divs 3 blogs */}
            <div className="flex flex-col w-full h-auto rounded-[5px] gap-6 bg-[#F7F7F7]">
              <Image
                src="\blog1\Image4.svg"
                alt="Art"
                width={416}
                height={300}
              />

              {/* written */}
              <div className="flex flex-col  w-full h-auto px-4 pb-6 gap-6">
                {/* first */}
                <div className="flex flex-col w-[382px] h-auto gap-2">
                  <div className="w-full h-auto flex gap-2">
                    <p className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-black">
                      Art
                    </p>
                    <div className="w-auto h-auto flex gap-1">
                      <Image
                        src="\blog1\Star 1.svg"
                        alt="blog2"
                        width={20}
                        height={20}
                      />
                      <p className="w-5 h-6 font-semibold text-[14px] leading-[21px] text-right">
                        5.0
                      </p>
                    </div>
                  </div>
                  <h5 className="w-[382px] h-[34px] font-bold text-[24px] leading-[33.6px] text-black">
                    Art Specialization
                  </h5>
                  <p className="w-[382px] h-[48px] font-normal text-[16px] leading-6 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                {/* second */}
                <div className="flex w-[382px] h-auto gap-4">
                  <button className=" text-sm py-2 px-4 w-[117px] h-[40px] rounded-[5px] border-[1px] border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal text-[16px] leading-6 text-black">
                      Enroll Now
                    </p>
                  </button>
                  <button className=" text-sm py-2 px-4 w-[77px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px]">
                    <p className="w-[37px] h-6 font-medium text-[16px] leading-6 text-black">
                      $400
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full h-auto rounded-[5px] gap-6">
              {/* 3 divs 3 blogs */}
              <div className="flex flex-col w-full h-auto rounded-[5px] gap-6 bg-[#F7F7F7]">
                <Image
                  src="\blog1\Image5.svg"
                  alt="Law"
                  width={416}
                  height={300}
                />

                {/* written */}
                <div className="flex flex-col  w-full h-auto px-4 pb-6 gap-6">
                  {/* first */}
                  <div className="flex flex-col w-[382px] h-auto gap-2">
                    <div className="w-full h-auto flex gap-2">
                      <p className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-black">
                        Law
                      </p>
                      <div className="w-auto h-auto flex gap-1">
                        <Image
                          src="\blog1\Star 1.svg"
                          alt="blog2"
                          width={20}
                          height={20}
                        />
                        <p className="w-5 h-6 font-semibold text-[14px] leading-[21px] text-right">
                          5.0
                        </p>
                      </div>
                    </div>
                    <h5 className="w-[382px] h-[34px] font-bold text-[24px] leading-[33.6px] text-black">
                      Rule of Law
                    </h5>
                    <p className="w-[382px] h-[48px] font-normal text-[16px] leading-6 text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  {/* second */}
                  <div className="flex w-[382px] h-auto gap-4">
                    <button className=" text-sm py-2 px-4 w-[117px] h-[40px] rounded-[5px] border-[1px] border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
                      <p className="w-[77px] h-[24px] font-normal text-[16px] leading-6 text-black">
                        Enroll Now
                      </p>
                    </button>
                    <button className=" text-sm py-2 px-4 w-[77px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px]">
                      <p className="w-[37px] h-6 font-medium text-[16px] leading-6 text-black">
                        $400
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto rounded-[5px] gap-6 ">
              {/* 3 divs 3 blogs */}
              <div className="flex flex-col w-full h-auto rounded-[5px] gap-6 bg-[#F7F7F7]">
                <Image
                  src="\blog1\Image6.svg"
                  alt="Tech"
                  width={416}
                  height={300}
                />

                {/* written */}
                <div className="flex flex-col  w-full h-auto px-4 pb-6 gap-6">
                  {/* first */}
                  <div className="flex flex-col w-[382px] h-auto gap-2">
                    <div className="w-full h-auto flex gap-2">
                      <p className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-black">
                        Tech
                      </p>
                      <div className="w-auto h-auto flex gap-1">
                        <Image
                          src="\blog1\Star 1.svg"
                          alt="blog2"
                          width={20}
                          height={20}
                        />
                        <p className="w-5 h-6 font-semibold text-[14px] leading-[21px] text-right">
                          5.0
                        </p>
                      </div>
                    </div>
                    <h5 className="w-[382px] h-[34px] font-bold text-[24px] leading-[33.6px] text-black">
                      Introduction to webflow
                    </h5>
                    <p className="w-[382px] h-[48px] font-normal text-[16px] leading-6 text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  {/* second */}
                  <div className="flex w-[382px] h-auto gap-4">
                    <button className=" text-sm py-2 px-4 w-[117px] h-[40px] rounded-[5px] border-[1px] border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
                      <p className="w-[77px] h-[24px] font-normal text-[16px] leading-6 text-black">
                        Enroll Now
                      </p>
                    </button>
                    <button className=" text-sm py-2 px-4 w-[77px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] flex gap-[8px]">
                      <p className="w-[37px] h-6 font-medium text-[16px] leading-6 text-black">
                        $400
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="w-auto h-auto px-4 py-2 text-lg  rounded-[5px] border border-black">
              <p className="w-[120px] h-6 font-normal text-[16px] leading-6 text-black">
                View All Courses
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
