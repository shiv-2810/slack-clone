import Image from "next/image"

const TrustedCompanies = () => {

    return (
        <div className="w-full bg-[#f4ede4] flex-1  h-7">
            <div className="w-full flex max-w-screen-xl mx-auto  flex-col items-center text-sm tracking-wide">
                <p className="font-semibold text-zinc-900 mt-10 mb-3">TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
                <div className="flex  items-center flex-wrap justify-center space-x-12 mt-3 px-10 space-y-2">
                    <Image width={102} alt="SEEK" height={35} src={require('../assets/logo-seek.png')} />
                    <Image width={50} alt="SEEK" height={35} src={require('../assets/logo-xero.png')} />
                    <Image width={154} alt="SEEK" height={35} src={require('../assets/rea.png')} />
                    <Image width={118} alt="SEEK" height={35} src={require('../assets/rmit.png')} />
                    <Image width={90} alt="SEEK" height={35} src={require('../assets/logo-ibm.png')} />
                    <Image width={143} alt="SEEK" height={35} src={require('../assets/deliveroo.png')} />

                </div>
                <section className="my-14 lg:flex lg:items-center lg:px-20 lg:justify-between  lg:space-x-24">
                    <video autoPlay muted loop className="hidden w-[70%] lg:w-[55%] mb-10 lg:mb-0 md:flex">
                        <source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/speed.IN.mp4" type="video/mp4" />
                    </video>
                    <video autoPlay muted loop className="w-[55%]   mb-10 lg:mb-0 md:hidden">
                        <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/speed-mobile.mp4" type="video/mp4" />
                    </video>
                    <div className="w-2/3  md:px-20 lg:px-0">
                        <p className=" text-zinc-900 text-4xl lg:text-5xl flex-1 text-left md:text-center font-sans font-bold midmd:text-left">Move faster with your tools in one place</p>
                        <p className="text-md text-zinc-700 font-medium font-sans text-left md:text-center flex-1 mt-4 tracking-wide midmd:text-left ">Connect the right people, find anything that you need and automate the rest. That’s work in Slack, your productivity platform.</p>

                    </div>
                </section>

                <section className="my-14 flex flex-col-reverse items-end lg:flex-row  lg:items-center lg:px-20 lg:justify-between lg:space-x-24 ">
                    <div className="w-2/3  md:px-20 lg:px-0">
                        <p className=" text-zinc-900 text-4xl lg:text-5xl flex-1 text-left md:text-center font-sans font-bold midmd:text-left">Choose how you want to work</p>
                        <p className="text-md text-zinc-700 font-medium font-sans text-left md:text-center flex-1 mt-4 tracking-wide midmd:text-left ">In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live..</p>

                    </div>
                    <video autoPlay muted loop className="hidden w-[70%] lg:w-[55%] mb-10 lg:mb-0 md:flex">
                        <source src="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.IN.webm" type="video/mp4" />
                    </video>
                    <video autoPlay muted loop className="w-[50%]   mb-10 lg:mb-0 md:hidden">
                        <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility-mobile.mp4" type="video/mp4" />
                    </video>
                </section>

                <section className="my-14 lg:flex lg:items-center lg:px-20 lg:justify-between  lg:space-x-24">
                    <video autoPlay muted loop className="hidden w-[70%] lg:w-[55%] mb-10 lg:mb-0 md:flex">
                        <source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.IN.mp4" type="video/mp4" />
                    </video>
                    <video autoPlay muted loop className="w-[55%]   mb-10 lg:mb-0 md:hidden">
                        <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness-mobile.mp4" type="video/mp4" />
                    </video>
                    <div className="w-2/3  md:px-20 lg:px-0">
                        <p className=" text-zinc-900 text-4xl lg:text-5xl flex-1 text-left md:text-center font-sans font-bold midmd:text-left">Bring your team together</p>
                        <p className="text-md text-zinc-700 font-medium font-sans text-left md:text-center flex-1 mt-4 tracking-wide midmd:text-left ">At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default TrustedCompanies