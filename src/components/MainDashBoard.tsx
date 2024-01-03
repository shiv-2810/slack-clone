"use client"
import ChatInput from "./ChatInput"
import ChatTopHeader from "./ChatTopHeader"

const MainDashBoard = () => {

    return (
        <div className="w-full relative min-h-[calc(100vh-3rem)]  max-h-[calc(100vh-3rem)]">
            <ChatTopHeader />
            <ChatInput isDisabled />
        </div>
    )
}

export default MainDashBoard