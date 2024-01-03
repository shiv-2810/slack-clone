
import { Send } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface ChatInputProps {
  isDisabled: boolean;
}

const ChatInput = ({ isDisabled }: ChatInputProps) => {


  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="absolute bottom-0 left-0 w-full ">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-1 ">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <div className="relative border-1 rounded-md ring-1  ring-gray-300">
              <div className="w-full bg-gray-100 mb-2 flex gap-3 p-3 rounded-t-md">
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M4 2.75A.75.75 0 0 1 4.75 2h6.343a3.908 3.908 0 0 1 3.88 3.449A2.21 2.21 0 0 1 15 5.84l.001.067a3.901 3.901 0 0 1-1.551 3.118A4.627 4.627 0 0 1 11.875 18H4.75a.75.75 0 0 1-.75-.75V9.5a.75.75 0 0 1 .032-.218A.75.75 0 0 1 4 9.065V2.75Zm2.5 5.565h3.593a2.157 2.157 0 1 0 0-4.315H6.5v4.315Zm4.25 1.935H6.5v5.5h4.25a2.75 2.75 0 1 0 0-5.5Z" clip-rule="evenodd"></path></svg>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M7 2.75A.75.75 0 0 1 7.75 2h7.5a.75.75 0 0 1 0 1.5H12.3l-2.6 13h2.55a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5H7.7l2.6-13H7.75A.75.75 0 0 1 7 2.75Z" clip-rule="evenodd"></path></svg>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M11.721 3.84c-.91-.334-2.028-.36-3.035-.114-1.51.407-2.379 1.861-2.164 3.15C6.718 8.051 7.939 9.5 11.5 9.5a.76.76 0 0 1 .027.001h5.723a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h3.66c-.76-.649-1.216-1.468-1.368-2.377-.347-2.084 1.033-4.253 3.265-4.848l.007-.002.007-.002c1.252-.307 2.68-.292 3.915.16 1.252.457 2.337 1.381 2.738 2.874a.75.75 0 0 1-1.448.39c-.25-.925-.91-1.528-1.805-1.856Zm2.968 9.114a.75.75 0 1 0-1.378.59c.273.64.186 1.205-.13 1.674-.333.492-.958.925-1.82 1.137-.989.243-1.991.165-3.029-.124-.93-.26-1.613-.935-1.858-1.845a.75.75 0 0 0-1.448.39c.388 1.441 1.483 2.503 2.903 2.9 1.213.338 2.486.456 3.79.135 1.14-.28 2.12-.889 2.704-1.753.6-.888.743-1.992.266-3.104Z" clip-rule="evenodd"></path></svg>
                <div className="w-[0.7px] h-4 bg-gray-400"></div>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M12.306 3.755a2.75 2.75 0 0 1 3.889 0l.05.05a2.75 2.75 0 0 1 0 3.89l-3.18 3.18a2.75 2.75 0 0 1-3.98-.096l-.03-.034a.75.75 0 1 0-1.11 1.01l.03.033a4.25 4.25 0 0 0 6.15.147l3.18-3.18a4.25 4.25 0 0 0 0-6.01l-.05-.05a4.25 4.25 0 0 0-6.01 0L9.47 4.47a.75.75 0 1 0 1.06 1.06l1.776-1.775Zm-4.611 12.49a2.75 2.75 0 0 1-3.89 0l-.05-.05a2.75 2.75 0 0 1 0-3.89l3.18-3.18a2.75 2.75 0 0 1 3.98.096l.03.033a.75.75 0 1 0 1.11-1.009l-.03-.034a4.25 4.25 0 0 0-6.15-.146l-3.18 3.18a4.25 4.25 0 0 0 0 6.01l.05.05a4.25 4.25 0 0 0 6.01 0l1.775-1.775a.75.75 0 0 0-1.06-1.06l-1.775 1.775Z" clip-rule="evenodd"></path></svg>
                <div className="w-[0.6px] h-4 bg-gray-400"></div>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M3.792 2.094A.5.5 0 0 1 4 2.5V6h1a.5.5 0 1 1 0 1H2a.5.5 0 1 1 0-1h1V3.194l-.842.28a.5.5 0 0 1-.316-.948l1.5-.5a.5.5 0 0 1 .45.068ZM7.75 3.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10ZM7 10.75a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75Zm-4.293-3.36a.997.997 0 0 1 .793-.39c.49 0 .75.38.75.75 0 .064-.033.194-.173.409a5.146 5.146 0 0 1-.594.711c-.256.267-.552.548-.87.848l-.088.084a41.6 41.6 0 0 0-.879.845A.5.5 0 0 0 2 18h3a.5.5 0 0 0 0-1H3.242l.058-.055c.316-.298.629-.595.904-.882a6.1 6.1 0 0 0 .711-.859c.18-.277.335-.604.335-.954 0-.787-.582-1.75-1.75-1.75a1.998 1.998 0 0 0-1.81 1.147.5.5 0 1 0 .905.427.996.996 0 0 1 .112-.184Z" clip-rule="evenodd"></path></svg>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 0a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 7 3Zm.75 6.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 7a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10ZM3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path></svg>
                <div className="w-[0.7px] h-4 bg-gray-400"></div>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0V2.75ZM6.75 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM6 10.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z" clip-rule="evenodd"></path></svg>
                <div className="w-[0.7px] h-4 bg-gray-400"></div>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M12.48 2.926a.75.75 0 0 0-1.46-.352l-3.5 14.5a.75.75 0 0 0 1.46.352l3.5-14.5ZM5.763 5.204a.75.75 0 0 0-1.06.032l-4 4.25a.75.75 0 0 0 0 1.028l4 4.25a.75.75 0 0 0 1.092-1.028L2.28 10l3.516-3.736a.75.75 0 0 0-.032-1.06Zm8.472 0a.75.75 0 0 1 1.06.032l4 4.25a.75.75 0 0 1 0 1.028l-4 4.25a.75.75 0 0 1-1.092-1.028L17.72 10l-3.516-3.736a.75.75 0 0 1 .032-1.06Z" clip-rule="evenodd"></path></svg>
                <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="text-gray-400 w-4 h-4 cursor-pointer"><path fill="currentColor" fill-rule="evenodd" d="M9.212 2.737a.75.75 0 1 0-1.424-.474l-2.5 7.5a.75.75 0 0 0 1.424.474l2.5-7.5Zm6.038.265a.75.75 0 0 0 0 1.5h2a.25.25 0 0 1 .25.25v11.5a.25.25 0 0 1-.25.25h-13a.25.25 0 0 1-.25-.25v-3.5a.75.75 0 0 0-1.5 0v3.5c0 .966.784 1.75 1.75 1.75h13a1.75 1.75 0 0 0 1.75-1.75v-11.5a1.75 1.75 0 0 0-1.75-1.75h-2Zm-3.69.5a.75.75 0 1 0-1.12.996l1.556 1.753-1.556 1.75a.75.75 0 1 0 1.12.997l2-2.248a.75.75 0 0 0 0-.996l-2-2.252ZM3.999 9.06a.75.75 0 0 1-1.058-.062l-2-2.248a.75.75 0 0 1 0-.996l2-2.252a.75.75 0 1 1 1.12.996L2.504 6.251l1.557 1.75a.75.75 0 0 1-.062 1.06Z" clip-rule="evenodd"></path></svg>
              </div>
              <Textarea
                ref={textareaRef}
                rows={1}
                maxRows={4}
                onChange={() => console.log()
                }
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    textareaRef.current?.focus()
                  }
                }}
                placeholder="Message #hi.."
                className="resize-none pr-12 focus:ring-0 focus:outline-none border-0 text-base py-2 pb-5 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              />
              <div className="w-full flex  gap-3 p-3 ">
              <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="w-[1.2rem] h-[1.2rem] text-zinc-500"><path fill="currentColor" fill-rule="evenodd" d="M10.75 3.25a.75.75 0 0 0-1.5 0v6H3.251L3.25 10v-.75a.75.75 0 0 0 0 1.5V10v.75h6v6a.75.75 0 0 0 1.5 0v-6h6a.75.75 0 0 0 0-1.5h-6v-6Z" clip-rule="evenodd"></path></svg>
              <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="w-[1.2rem] h-[1.2rem] text-zinc-500"><path fill="currentColor" fill-rule="evenodd" d="M6.941 3.952c-.459-1.378-2.414-1.363-2.853.022l-4.053 12.8a.75.75 0 0 0 1.43.452l1.101-3.476h6.06l1.163 3.487a.75.75 0 1 0 1.423-.474l-4.27-12.81Zm1.185 8.298L5.518 4.427 3.041 12.25h5.085Zm6.198-5.537a4.74 4.74 0 0 1 3.037-.081A3.743 3.743 0 0 1 20 10.208V17a.75.75 0 0 1-1.5 0v-.745a7.971 7.971 0 0 1-2.847 1.355 2.998 2.998 0 0 1-3.15-1.143C10.848 14.192 12.473 11 15.287 11H18.5v-.792c0-.984-.641-1.853-1.581-2.143a3.24 3.24 0 0 0-2.077.056l-.242.089a2.222 2.222 0 0 0-1.34 1.382l-.048.145a.75.75 0 0 1-1.423-.474l.048-.145a3.722 3.722 0 0 1 2.244-2.315l.243-.09ZM18.5 12.5h-3.213c-1.587 0-2.504 1.801-1.57 3.085.357.491.98.717 1.572.57a6.47 6.47 0 0 0 2.47-1.223l.741-.593V12.5Z" clip-rule="evenodd"></path></svg>
              <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="w-[1.2rem] h-[1.2rem] text-zinc-500"><path fill="currentColor" fill-rule="evenodd" d="M2.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0ZM10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM7.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM14 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-6.385 3.766a.75.75 0 1 0-1.425.468C6.796 14.08 8.428 15 10.027 15c1.599 0 3.23-.92 3.838-2.766a.75.75 0 1 0-1.425-.468c-.38 1.155-1.38 1.734-2.413 1.734s-2.032-.58-2.412-1.734Z" clip-rule="evenodd"></path></svg>
              <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="w-[1.2rem] h-[1.2rem] text-zinc-500"><path fill="currentColor" fill-rule="evenodd" d="M2.5 10a7.5 7.5 0 1 1 15 0v.645c0 1.024-.83 1.855-1.855 1.855a1.145 1.145 0 0 1-1.145-1.145V6.75a.75.75 0 0 0-1.494-.098 4.5 4.5 0 1 0 .465 6.212A2.642 2.642 0 0 0 15.646 14 3.355 3.355 0 0 0 19 10.645V10a9 9 0 1 0-3.815 7.357.75.75 0 1 0-.865-1.225A7.5 7.5 0 0 1 2.5 10Zm7.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"></path></svg>
              <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="w-[1.2rem] h-[1.2rem] text-zinc-500"><path fill="currentColor" fill-rule="evenodd" d="M3.75 4.5a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-2.59a.75.75 0 0 1 1.124-.65l3.376 1.943V6.547l-3.376 1.944A.75.75 0 0 1 13 7.84V5.25a.75.75 0 0 0-.75-.75h-8.5Zm-2.25.75A2.25 2.25 0 0 1 3.75 3h8.5a2.25 2.25 0 0 1 2.25 2.25v1.294l2.626-1.512A1.25 1.25 0 0 1 19 6.115v7.77a1.25 1.25 0 0 1-1.874 1.083L14.5 13.456v1.294A2.25 2.25 0 0 1 12.25 17h-8.5a2.25 2.25 0 0 1-2.25-2.25v-9.5Z" clip-rule="evenodd"></path></svg>
              <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="w-[1.2rem] h-[1.2rem] text-zinc-500"><path fill="currentColor" fill-rule="evenodd" d="M10 2a3.5 3.5 0 0 0-3.5 3.5v3a3.5 3.5 0 1 0 7 0v-3A3.5 3.5 0 0 0 10 2ZM8 5.5a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0v-3ZM5 8.25a.75.75 0 0 0-1.5 0v.25a6.501 6.501 0 0 0 5.75 6.457V16.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.543A6.501 6.501 0 0 0 16.5 8.5v-.25a.75.75 0 0 0-1.5 0v.25a5 5 0 0 1-10 0v-.25Z" clip-rule="evenodd"></path></svg>
              <svg data-9gn="true" aria-hidden="true" viewBox="0 0 20 20" className="w-[1.2rem] h-[1.2rem] text-zinc-500"><path fill="currentColor" fill-rule="evenodd" d="M4.5 3h11A1.5 1.5 0 0 1 17 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3Zm-3 1.5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-11Zm11.64 1.391a.75.75 0 0 0-1.28-.782l-5.5 9a.75.75 0 0 0 1.28.782l5.5-9Z" clip-rule="evenodd"></path></svg>
              </div>
              {/* <Button  onClick={()=>{
                textareaRef.current?.focus()
              }} disabled={false} className="absolute bg-green-800 bottom-1.5 right-[8px] hover:bg-green-800 "  aria-label="send message"><Send className="h-4 w-4" /></Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
