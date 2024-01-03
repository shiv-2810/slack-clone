import DashboardTopbar from "@/components/DashboardTopbar";
import MainDashBoard from "@/components/MainDashBoard";
import SideBar from "@/components/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Page = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    return (
        <div className="min-h-screen max-h-screen">
        <DashboardTopbar />
        <div className="fixed top-11 w-full  min-h-[calc(100vh-2.75rem)]  flex justify-between">
            <SideBar />

            <MainDashBoard />

        </div>
        </div>
    )
}

export default Page