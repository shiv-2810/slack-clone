import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, Menu, MenuSquare, Search } from "lucide-react";
import Link from "next/link";
import { url } from "inspector";

const HomePageTopHeader = () => {
  return (
    <div className="bg-[#541554] w-full flex justify-center">
      <div className="max-w-screen-xl  w-full  p-5">
        <div className="flex justify-between items-center">
          <div className="flex space-x-5 items-center">
            <Image
              className="cursor-pointer"
              src={require("../assets/slack.png")}
              alt="slack"
              width={100}
              height={50}
            />
            <ol className="hidden lg:flex space-x-4 ">
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-white hover:underline">
                    Features
                  </span>
                  <ChevronDown className="h-5 w-5 text-white " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex  items-center">
                  <span className="text-sm font-medium text-white hover:underline">
                    Solutions
                  </span>
                  <ChevronDown className="h-5 w-5 text-white " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-white hover:underline">
                    Enterprises
                  </span>
                  <ChevronDown className="h-5 w-5 text-white " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-white hover:underline">
                    Resources
                  </span>
                  <ChevronDown className="h-5 w-5 text-white " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-white">
                    Pricing
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex items-center space-x-9">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-white cursor-pointer" />
              <Menu className="h-5 w-5 lg:hidden text-white" />
              <span className="hidden text-sm cursor-pointer font-medium text-white hover:underline lg:flex">
                Sign in
              </span>
            </div>
            <Button
              className="hidden bg-[#541554] border-white w-36 h-11  rounded-[4px] text-white hover:border-[2px] hover:text-white hover:bg-[#541554]  mylg:flex"
              variant={"outline"}
            >
              TALK TO SALES
            </Button>
            <Button
              className="hidden border-white w-36 h-11  bg-white  rounded-[4px] text-[#4A154B]  hover:border-[2px] hover:border-[#4A154B] hover:text-[#4A154B] hover:bg-white lg:flex"
              variant={"default"}
            >
              TRY FOR FREE
            </Button>
          </div>
        </div>
        <div className="w-full mt-10 items-center justify-center midmd:flex">
          <div>
            <p className="text-4xl text-white md:text-6xl flex-1 text-center font-sans font-bold midmd:text-left">Made for people. <span className="text-[#ecb22e]">Built for productivity.</span></p>
            <p className="text-md text-white font-sans text-center flex-1 mt-4 tracking-wide midmd:text-left ">Connect the right people, find anything that you need and automate the rest. That’s work in Slack, your productivity platform.</p>
            <div className="flex  my-5 w-full flex-col space-y-3  myxl:flex-row myxl:items-center myxl:space-x-3 myxl:space-y-0">
              <Button
                className=" border-white flex-1 h-14  bg-white font-semibold rounded-[4px] text-[#4A154B]  hover:border-[2px] hover:border-[#4A154B] hover:text-[#4A154B] hover:bg-white"
                variant={"default"}
              >
                SIGN UP WITH EMAIL ADDRESS
              </Button>
              <Button
                className="bg-[#4285f4] flex-1  h-14 font-semibold  rounded-[4px] text-white hover:border-[2px] hover:text-white items-center justify-center "
                variant={"default"}
              >
                <div className=" text-right bg-white h-7 w-7 midmd:w-12 midmd:h-12 rounded-[2px] flex items-center justify-center">
                 <Image alt="google-icon" src={require('../assets/google.png')} width={20} />
                </div>
                SIGN UP WITH GOOGLE
              </Button>
            </div>
          </div>
          <div>
            <video autoPlay muted loop style={{ width: '98%', height: '100%', objectFit: 'cover' }}>
              <source src="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/mp4/ia4-hero-product-ui.IN.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTopHeader;
