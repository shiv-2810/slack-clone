import Image from "next/image"
import { Button } from "./ui/button"
import { PlaySquare } from "lucide-react"

const TeamsSlack = () => {

    return (
        <div className="w-full bg-white flex-1  h-7">
            <div className="w-full mt-20 flex max-w-screen-xl mx-auto  flex-col items-center text-sm tracking-wide">
                <h1 className="text-md text-3xl font-semibold lg:text-5xl lg:font-bold font-sans">Teams large and small rely on Slack</h1>
                <p className="my-8  text-zinc-800 text-[1.1rem] font-sans">Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                <div className="flex w-full px-10  flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 mb-10 items-center md:justify-center">
                    <Button
                        className=" bg-[#611f69] w-full border-white md:w-80 h-14  rounded-[4px]  text-white  hover:text-white hover:bg-[#400d40]  mylg:flex tracking-wider"
                        variant={"default"}
                    >
                        MEET SLACK FOR ENTERPRISE
                    </Button>
                    <Button
                        className="border-[#541554] w-full md:w-44 h-[3.4rem]   bg-white  tracking-wider  rounded-[4px] text-[#4A154B]  hover:border-[2px] hover:border-[#4A154B] hover:text-[#4A154B] hover:bg-white lg:flex"
                        variant={"outline"}
                    >
                        TALK TO SALES
                    </Button>
                </div>
                <div className="my-10 grid grid-cols-1 md:grid-cols-3 md:gap-20 place-items-center px-40">
                    <div className="flex text-center flex-col items-center md:items-start md:text-left ">
                        <h1 className="text-[#611f69] text-6xl font-bold">85%</h1>
                        <p>of users say that Slack has improved communication*</p>
                    </div>
                    <div className="flex text-center flex-col items-center md:items-start md:text-left">
                        <h1 className="text-[#611f69] text-6xl font-bold">85%</h1>
                        <p>of users say that Slack has improved communication*</p>
                    </div>
                    <div className="flex text-center flex-col items-center md:items-start md:text-left">
                        <h1 className="text-[#611f69] text-6xl font-bold">85%</h1>
                        <p>of users say that Slack has improved communication*</p>
                    </div>
                </div>

            </div>
            <div className="lg:flex lg:justify-between lg:items-center w-full space-x-10 my-16">
                <video autoPlay muted loop className=" w-[90%] lg:w-[50%] mb-10 lg:mb-0 md:flex rounded-r-full">
                    <source src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/Vodafone_08.mp4" type="video/mp4" />
                </video>
                <div>
                <h1 className="italic text-3xl text-zinc-800 font-light">‘Many technology employees were gravitating naturally to Slack. So we followed our users to what has become one of our most important tools.’</h1>
                <h1 className="mt-5 font-semibold">Matt Beal</h1>
                <p className="text-sm">Director of Technology Strategy and Architecture, Vodafone</p>
                </div>
            </div>
            <p className="text-center text-zinc-700 px-12 lg:px:32px text-sm mb-4">* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
        </div>
    )
}

export default TeamsSlack