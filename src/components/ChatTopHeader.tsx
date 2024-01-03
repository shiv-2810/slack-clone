import { ChevronDown, PersonStandingIcon } from "lucide-react"

const ChatTopHeader = () =>{

    return(
     <div className="ticky w-full  p-2 flex justify-between items-center border-b-[0.6px]  border-zinc-400">
      <div className="flex items-center gap-1 p-1 rounded-md hover:bg-gray-100">
        <h1 className="font-bold font-sans ">Shivam Kumar</h1>
        <ChevronDown className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-1 pr-4">
      <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-zinc-500 w-5 h-5"><path fill="currentColor" fill-rule="evenodd" d="M4 1a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 4 1Zm5.25.5a.75.75 0 0 0 0 1.5h5.5A2.25 2.25 0 0 1 17 5.25v5.5h-4.75a1.5 1.5 0 0 0-1.5 1.5V17h-5.5A2.25 2.25 0 0 1 3 14.75v-5.5a.75.75 0 0 0-1.5 0v5.5a3.75 3.75 0 0 0 3.75 3.75h5.736c.729 0 1.428-.29 1.944-.805l4.765-4.765a2.75 2.75 0 0 0 .805-1.944V5.25a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm3 14.753 4.003-4.003H12.25v4.003Z" clip-rule="evenodd"></path></svg>
      <h1 className="text-zinc-600 text-sm">Canvas</h1>
      </div>
     </div>
    )
}

export default ChatTopHeader