import React from "react";

const Layout240 = () => {
  return (
    // h-[488px]
    <div className="flex  w-full h-auto top-[2272px] left-[100px] py-[112px] px-16  gap-20 bg-white">
      <div className="flex flex-col flex-grow gap-8 w-full h-auto bg-[#FFFFFF]">
        <div className="flex-col flex-grow w-full h-auto gap-6">
          <h2 className="w-[1152px] h-[58px] font-bold text-[48px] leading-[57.6px] text-center">
            Our Achivements
          </h2>
          <p className="w-[1152px] h-[54px] font-normal text-[18px] text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className="flex justify-center items-center w-full h-auto gap-6">
          <div className="flex w-[616px] h-[96px] p-2 gap-6">
            <div className="flex flex-col w-full h-auto gap-2 items-center justify-center">
              <h3 className="font-bold text-[40px] leading-[48px] text-black">
                +200
              </h3>
              <p className="font-normal text-[16px] leading-6 text-black">
                Courses
              </p>
            </div>
            <div className="flex flex-col w-full h-auto gap-2 items-center justify-center">
              <h3 className="font-bold text-[40px] leading-[48px] text-black">
                50K
              </h3>
              <p className="font-normal text-[16px] leading-6 text-black">
                Mentors
              </p>
            </div>
          </div>
          <div className="flex w-[616px] h-[96px] p-2 gap-6">
            <div className="flex flex-col w-full h-auto gap-2 items-center justify-center">
              <h3 className="font-bold text-[40px] leading-[48px] text-black">
                370k
              </h3>
              <p className="font-normal text-[16px] leading-6 text-black">
                Students
              </p>
            </div>
            <div className="flex flex-col w-full h-auto gap-2 items-center justify-center">
              <h3 className="font-bold text-[40px] leading-[48px] text-black">
                +100
              </h3>
              <p className="font-normal text-[16px] leading-6 text-black">
                Recognition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout240;
