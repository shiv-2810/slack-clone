"use client"
import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const FloatingNav = () => {

    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(currentScrollPos > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 z-10 w-full px-11  lg:w-[100%] lg:max-w-screen-xl bg-white lg:rounded-full text-white p-5 transform transition duration-500 ease-in-out ${visible ? 'translate-y-0 lg:translate-y-4' : '-translate-y-full'} shadow-xl`}>
            <div className="flex justify-between items-center">
                <div className="flex space-x-5 items-center">
                    <Image
                        className="cursor-pointer"
                        src={require("../assets/slackBlack.png")}
                        alt="slack"
                        width={100}
                        height={50}
                    />
                    <ol className="hidden lg:flex space-x-4 ">
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-zinc-950 hover:underline">
                    Features
                  </span>
                  <ChevronDown className="h-5 w-5 text-zinc-950 " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex  items-center">
                  <span className="text-sm font-medium text-zinc-950 hover:underline">
                    Solutions
                  </span>
                  <ChevronDown className="h-5 w-5 text-zinc-950 " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-zinc-950 hover:underline">
                    Enterprises
                  </span>
                  <ChevronDown className="h-5 w-5 text-zinc-950 " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-zinc-950 hover:underline">
                    Resources
                  </span>
                  <ChevronDown className="h-5 w-5 text-zinc-950 " />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex">
                  <span className="text-sm font-medium text-zinc-950">
                    Pricing
                  </span>
                </div>
              </li>
            </ol>
                </div>
                <div className="flex items-center space-x-9">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-zinc-950 cursor-pointer" />
              <Menu className="h-5 w-5 lg:hidden text-zinc-950" />
              <span className="hidden text-sm cursor-pointer font-medium text-zinc-950 hover:underline lg:flex">
                Sign in
              </span>
            </div>
            <Button
              className="hidden  border-[#541554] w-36 h-11  rounded-[4px] text-[#541554] hover:border-[2px]  transition-all duration-200 ease-in  mylg:flex"
              variant={"outline"}
            >
              TALK TO SALES
            </Button>
            <Button
              className=" bg-[#611f69] hidden  border-white  rounded-[4px] w-36 h-11  text-white  hover:text-white hover:bg-[#400d40]  lg:flex"
              variant={"default"}
            >
              TRY FOR FREE
            </Button>
          </div>
            </div>
        </div>
    )

}

export default FloatingNav