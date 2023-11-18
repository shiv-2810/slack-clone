import { ChevronDown, Edit, Edit2, Edit3 } from "lucide-react"

const SideBar = () => {

    return (
        <div className=" max-h-screen min-h-screen bg-[#401341] w-64 flex flex-col">
            <div className="border-t-[1px] border-b-[1px] border-[rgb(82,38,83)] p-2 flex justify-between items-center px-4">
                <div className="flex gap-1 cursor-pointer hover:bg-[#8b418c4e] px-2 p-1 hover:rounded-md">
                    <h1 className="text-white font-bold">Rugas</h1>
                    <ChevronDown className="text-white w-4" />
                </div>
                <div className="cursor-pointer rounded-full bg-white p-2">
                    <Edit className="w-3 h-3" />
                </div>
            </div>
            <div className="border-b-[1px] border-[rgb(82,38,83)] p-3 flex flex-col justify-between items-center px-4">
                <div className="flex gap-1 w-full cursor-pointer hover:bg-[#8b418c4e] px-2 p-1 hover:rounded-md items-center">
                    <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-white w-4 h-4"><path fill="currentColor" fill-rule="evenodd" d="M4.836 3A1.836 1.836 0 0 0 3 4.836v7.328c0 .9.646 1.647 1.5 1.805V7.836A3.336 3.336 0 0 1 7.836 4.5h6.133A1.837 1.837 0 0 0 12.164 3H4.836ZM1.5 12.164a3.337 3.337 0 0 0 3.015 3.32A3.337 3.337 0 0 0 7.836 18.5h3.968c.73 0 1.43-.29 1.945-.805l3.946-3.946a2.75 2.75 0 0 0 .805-1.945V7.836a3.337 3.337 0 0 0-3.015-3.32A3.337 3.337 0 0 0 12.164 1.5H4.836A3.336 3.336 0 0 0 1.5 4.836v7.328ZM7.836 6A1.836 1.836 0 0 0 6 7.836v7.328C6 16.178 6.822 17 7.836 17H11.5v-4a1.5 1.5 0 0 1 1.5-1.5h4V7.836A1.836 1.836 0 0 0 15.164 6H7.836Zm8.486 7H13v3.322L16.322 13Z" clip-rule="evenodd"></path></svg>
                    <p className="text-zinc-200 font-extralight text-sm">Canvases</p>
                </div>
                <div className="flex gap-1 w-full cursor-pointer hover:bg-[#8b418c4e] px-2 p-1 hover:rounded-md items-center">
                    <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-white w-4 h-4"><path fill="currentColor" fill-rule="evenodd" d="M8.86 1.328a2.15 2.15 0 0 1 2.28 0l6.118 3.824a1.59 1.59 0 0 1 0 2.696l-6.118 3.824a2.15 2.15 0 0 1-2.28 0L2.742 7.848a1.59 1.59 0 0 1 0-2.696L8.86 1.328ZM10.345 2.6a.65.65 0 0 0-.69 0L3.537 6.424a.09.09 0 0 0 0 .152L9.655 10.4a.65.65 0 0 0 .69 0l6.118-3.824a.09.09 0 0 0 0-.152L10.344 2.6Zm-8.246 7.462a.75.75 0 0 1 1.033-.239L9.655 13.9a.647.647 0 0 0 .688.001l6.519-4.074a.75.75 0 0 1 .795 1.272l-6.52 4.074a2.147 2.147 0 0 1-2.277 0l-6.523-4.078a.75.75 0 0 1-.238-1.033Zm1.033 3.261a.75.75 0 1 0-.795 1.272l6.523 4.077a2.147 2.147 0 0 0 2.277.001l6.52-4.074a.75.75 0 0 0-.795-1.272l-6.52 4.074a.647.647 0 0 1-.687 0l-6.523-4.078Z" clip-rule="evenodd"></path></svg>
                    <p className="text-zinc-200 font-extralight text-sm">Files</p>
                </div>
            </div>
   



        </div>
    )
}

export default SideBar