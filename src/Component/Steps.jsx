import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-44'>
            <h1 className="bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">
                Steps to remove background <br /> image in seconds
            </h1>
            <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
                <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 duration-500 transition-all ">
                    <img src={assets.upload_icon} alt="" className='max-w-9' />
                    <div className="">
                        <p className="text-xl font-medium ">Upload image</p>
                        <p className="text-sm text-neutral-500 mt-1">This is a demon text, will replace it later. <br /> This is a demo...</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 duration-500 transition-all ">
                    <img src={assets.remove_bg_icon} alt="" className='max-w-9' />
                    <div className="">
                        <p className="text-xl font-medium ">Remove background</p>
                        <p className="text-sm text-neutral-500 mt-1">This is a demon text, will replace it later. <br /> This is a demo...</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 duration-500 transition-all ">
                    <img src={assets.download_icon} alt="" className='max-w-9' />
                    <div className="">
                        <p className="text-xl font-medium ">Downloaad image</p>
                        <p className="text-sm text-neutral-500 mt-1">This is a demon text, will replace it later. <br /> This is a demo...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
