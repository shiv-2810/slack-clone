import "../app/globals.css";
import { Button } from "./ui/button";

const Footer = () => {

    return (
        <>
            <div className="w-full bg-[#4a154b]" >
                <div className="w-full flex max-w-screen-xl mx-auto  flex-col items-center text-sm tracking-wide p-10 pt-28">
                    <h1 className="text-5xl font-semibold text-white text-center px-16">See all that you can accomplish with Slack</h1>
                    <div className="flex w-full  flex-col lg:flex-row lg:items-center lg:justify-center gap-2 p-10 pb-16">
                        <Button
                            className=" w-full py-8 border-[#4a154b] lg:w-48 lg:h-14  rounded-[4px] text-[#541554] hover:border-[2px]  transition-all duration-200 ease-in tracking-wider"
                            variant={"outline"}
                        >
                            TRY FOR FREE
                        </Button>
                        <Button
                            className=" bg-transparent w-full py-8   border-white border-[1px]  rounded-[4px] lg:w-48 lg:h-14   text-white  hover:text-white hover:border-[1.5px] transition-all duration-200 ease-linear hover:bg-transparent  tracking-wider"
                            variant={"default"}
                        >
                            TALK TO SALES
                        </Button>
                    </div>
                </div>
            </div>
            {/* <div className="w-full bg-white">
                <div className="w-full mt-20 flex max-w-screen-xl mx-auto  flex-col items-center text-sm tracking-wide">
                 
                </div>
            </div> */}
        </>
    )
}

export default Footer