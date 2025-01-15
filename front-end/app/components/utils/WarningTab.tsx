import React from 'react'

const WarningTab = () => {
  return (
        <div className='mx-auto chat-textbox-container-after text-left mb-[128px]'>
            <div className="flex justify-center">
                <div className="mb-2 flex flex-col gap-3.5 pt-2">
                    <div className="text-token-text-primary border-token-border-light bg-token-main-surface-primary w-[744.1px] flex w-full items-start rounded-2xl border text-sm bg-opacity-10 px-3 py-2.5 md:p-4">
                        <div className="grow pt-[2px] pl-1">
                            <span className="text-sm leading-none">By messaging ChatGPT, you agree to our <a href="https://openai.com/terms" target="_blank" className="text-token-text-primary underline decoration-token-text-primary" rel="noreferrer">Terms</a> and have read our <a href="https://openai.com/privacy" target="_blank" className="text-token-text-primary underline decoration-token-text-primary" rel="noreferrer">Privacy Policy</a>.</span>
                            <br />
                            Don't share sensitive info. Chats may be reviewed and used to train our models. <a href="https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance" target="_blank" className="text-token-text-primary underline">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WarningTab