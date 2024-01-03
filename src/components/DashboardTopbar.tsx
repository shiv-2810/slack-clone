import { Clock } from "lucide-react"

const DashboardTopbar = () =>{

    return(
        <div className="h-11 bg-[#350D36] w-full fixed flex items-center ">
            <div className="w-60  h-6 bg-transparent flex justify-end mr-6 mt-1">
                <Clock className="text-white w-5 h-5" />
            </div>
            <div className="rounded-md bg-[#76567793] w-7/12 h-6 flex justify-between px-3 items-center">
                <p className="text-xs text-white font-light">Search Rugas</p>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-white h-4 w-4"><path fill="currentColor" fill-rule="evenodd" d="M13.5 3.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.386.25a2.501 2.501 0 0 1 4.772 0h1.864a.75.75 0 0 1 0 1.5h-1.864a2.501 2.501 0 0 1-4.771 0H2.25a.75.75 0 0 1 0-1.5h8.864Zm-7 5.75a2.501 2.501 0 0 1 4.772 0h8.864a.75.75 0 0 1 0 1.5H8.886a2.501 2.501 0 0 1-4.772 0H2.25a.75.75 0 0 1 0-1.5h1.864ZM6.5 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 5.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.386.25a2.501 2.501 0 0 1 4.772 0h2.864a.75.75 0 0 1 0 1.5h-2.864a2.501 2.501 0 0 1-4.771 0H2.25a.75.75 0 0 1 0-1.5h7.864Z" clip-rule="evenodd"></path></svg>
            </div>
            
        </div>
    )
}

export default DashboardTopbar