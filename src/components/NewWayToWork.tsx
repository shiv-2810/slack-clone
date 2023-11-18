import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowBigRight, ArrowRight, PlaySquare } from "lucide-react"

const NewWayToWork = () => {

    return (
        <div className="w-full bg-[#f4ede4] flex-1  h-7">
            <div className="w-full mt-16 mb-8 flex max-w-screen-xl mx-auto  flex-col items-center text-sm tracking-wide">
                <h1 className="font-bold text-2xl md:text-3xl">Take a deeper dive into a new way to work</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-7 lg:gap-8 px-36 lg:px-8 my-9">
                    <div className="p-3 min-h-[320px] bg-white w-[100%] hover:scale-105 hover:cursor-pointer transition  duration-150 ease-out hover:ease-in hover:shadow-2xl ">
                        <Image
                            className="cursor-pointer object-center w-[100%]"
                            src={require("../assets/dreamforce.png")}
                            alt="slack"
                        />
                        <p className="mt-3 text-xs text-zinc-800">Event</p>
                        <h1 className="text-xl font-bold mt-1">Ready for the future of AI in Slack?</h1>
                        <div className="flex justify-between mt-16">
                            <h1 className="text-[#1264a3] font-medium">WATCH ON DEMAND</h1>
                            <ArrowRight className="w-5 h-5 text-[#1264a3]" />
                        </div>
                    </div>
                    <div className="p-3 min-h-[320px] bg-white w-[100%] hover:scale-105 ease-in-out duration-200 hover:shadow-2xl hover:cursor-pointer">
                        <Image
                            className="cursor-pointer object-center w-[100%]"
                            src={require("../assets/world.jpeg")}
                            alt="slack"
                        />
                        <p className="mt-3 text-xs text-zinc-800">On demand</p>
                        <h1 className="text-xl font-bold mt-1">Ready for the future of AI in Slack?</h1>
                        <div className="flex justify-between mt-16">
                            <h1 className="text-[#1264a3] font-medium">WATCH ON DEMAND</h1>
                            <ArrowRight className="w-5 h-5 text-[#1264a3]" />
                        </div>
                    </div>
                    <div className="p-3 min-h-[320px] bg-white w-[100%] hover:scale-105 ease-in-out duration-200 hover:shadow-2xl hover:cursor-pointer">
                        <Image
                            className="cursor-pointer object-cover w-full"
                            src={require("../assets/promo.jpeg")}
                            alt="slack"
                        />
                        <p className="mt-3 text-xs text-zinc-800">Customer story</p>
                        <h1 className="text-xl font-bold mt-1">Ready for the future of AI in Slack?</h1>
                        <div className="flex justify-between mt-16">
                            <h1 className="text-[#1264a3] font-medium">WATCH ON DEMAND</h1>
                            <ArrowRight className="w-5 h-5 text-[#1264a3]" />
                        </div>
                    </div>
                    <div className="p-3 min-h-[320px] bg-white w-[100%] hover:scale-105 ease-in-out duration-200 hover:shadow-2xl hover:cursor-pointer">
                        <Image
                            className="cursor-pointer object-center w-[100%]"
                            src={require("../assets/boost.jpeg")}
                            alt="slack"
                        />
                        <p className="mt-3 text-xs text-zinc-800">Webinar</p>
                        <h1 className="text-xl font-bold mt-1">Ready for the future of AI in Slack?</h1>
                        <div className="flex justify-between mt-16">
                            <h1 className="text-[#1264a3] font-medium">WATCH ON DEMAND</h1>
                            <ArrowRight className="w-5 h-5 text-[#1264a3]" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewWayToWork