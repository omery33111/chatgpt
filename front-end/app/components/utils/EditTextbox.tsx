import React from 'react'

const EditTextbox = () => {
  return (
    <div className="group/conversation-turn relative flex w-full min-w-0 flex-col">
        <div className="flex-col gap-1 md:gap-3">
            <div className="flex max-w-full flex-col flex-grow">
                <div className="rounded-3xl bg-token-main-surface-tertiary px-3 py-3" style = {{backgroundColor: "grey"}}>
                    <div className="m-2 max-h-[25dvh] overflow-auto">
                        <div className="grid">
                            <textarea className="col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0 m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"></textarea>
                            <span className="invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0"></span>
                        </div>
                    </div>
                    <div className="flex space-x-2 mr-[8px]" style = {{direction: "rtl", gap: "8px"}}>
                        <button className="bg-white text-black w-[61.67px] h-[38px] py-1 rounded-[30px] border border-gray-300 text-sm whitespace-nowrap font-semibold hidden md:block enabled:hover:bg-[rgba(0,0,0,0.020)]">
                            Send
                        </button>
                        <button className="bg-black text-white w-[71.86px] h-[38px] py-1 rounded-[30px] text-sm whitespace-nowrap font-semibold enabled:hover:bg-[rgba(0,0,0,0.87)]">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditTextbox