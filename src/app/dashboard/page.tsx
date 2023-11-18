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
            <div className="relative top-12  min-h-[calc(100vh-2.5rem)]  flex justify-between">
                <SideBar />

                <MainDashBoard />

            </div>
        </div>
    )
}

export default Page