import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="flex w-full h-auto top-[682px] p-20 gap-20 bg-white">
      <div className="flex  flex-col gap-20 w-full h-auto ">
        <div className=" flex w-full h-auto justify-between">
          <div className="w-[500px] h-auto ">
            <p className="font-semibold w-[500px] h-[27px] text-[18px] leading-[27px] text-black">
              Subscribe to our newsletter
            </p>
            <p className="w-[500px] h-6 font-normal text-[16px] leading-6 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="w-[400px] h-auto flex flex-col gap-4 justify-end">
            <div className="w-full h-auto flex gap-4">
              <div className="w-full h-auto justify-between ">
                <div className="flex gap-2 w-full h-auto rounded-[5px] border border-black bg-white p-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-[241px] h-6 font-normal text-[16px] leading-6 text-[#505050] focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <button className="w-auto h-auto py-3 px-6 gap-2 rounded-[5px] border border-black">
                <p className="w-[71px] h-6 font-normal text-[16px] leading-6 text-black">
                  Subscribe
                </p>
              </button>
            </div>

            <div>
              <span className="w-full h-[18px] font-normal text-[12px] leading-[18px]  text-black">
                By subscribing you agree to our{" "}
                <Link href="./" className="underline">
                  Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full  grid grid-cols-4 h-auto  gap-20 ">
          <div className="w-full h-auto ">
            <Image
              src="\Logo.svg"
              alt="logo"
              width={1000}
              height={40}
              className="pt-[20px] pb-[29px] gap-[10.5px]"
            />
          </div>

          <div className="w-full h-auto flex flex-col  gap-4">
            <p className="w-[250px] h-6 font-semibold text-4 leading-6 text-black">
              Courses
            </p>
            <div className="w-full h-auto flex flex-col gap-4">
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Business
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Development
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Technology
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Designe
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Programming
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col  gap-4">
            <p className="w-[250px] h-6 font-semibold text-4 leading-6 text-black">
              Resources
            </p>
            <div className="w-full h-auto flex flex-col gap-4">
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Career
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Resume
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Learning
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Interview Preparation
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Jobs
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col  gap-4">
            <p className="w-[250px] h-6 font-semibold text-4 leading-6 text-black">
              About Us
            </p>
            <div className="w-full h-auto flex flex-col gap-4">
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Contact
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Help/Support
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  FAQ
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Terms and Conditions
                </p>
              </div>
              <div className="w-full h-auto pt-2 pb-2">
                <p className="w-[250px] h-[21px] text-black font-normal text-[14px] leading-[21px]">
                  Partners
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-black w-[1120px] h-[1px]" />
        <div className="w-full h-[57px] flex gap-8 ">
          <div className="w-full h-auto justify-between">
            <div className="w-auto h-auto flex gap-6">
              <p className="w-[195px] h-[21px] font-normal text-[14px] leading-[21px] text-black">
                2023 Ddsgnr. All right reserved.
              </p>
              <div className="w-auto h-auto flex gap-6">
                <Link
                  href="./"
                  className="underline w-[87px] h-[21px] text-[14px] font-normal leading-[21px] text-black"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="./"
                  className="underline w-[105px] h-[21px] text-[14px] font-normal leading-[21px] text-black"
                >
                  Terms of Service
                </Link>
                <Link
                  href="./"
                  className="underline w-[105px] h-[21px] text-[14px] font-normal leading-[21px] text-black"
                >
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex justify-end gap-3">
           <div className="w-6 h-6"> <FaFacebookF className="w-[10px] h-[18px] mt-[3px] ml-[7px]"/></div>
           <div className="w-6 h-6"><FaInstagram className="w-[18px] h-[18px] mt-[3px] ml-[3px]"/></div>
           <div className="w-6 h-6"> <FaTwitter className="w-[18px] h-[15px] mt-[4.5px] ml-[3px]"/></div>
           <div className="w-6 h-6"> <FaLinkedin className="w-[18px] h-[18px] mt-[3px] ml-37px]"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
