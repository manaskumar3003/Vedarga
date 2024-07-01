import React from 'react'

const Post = () => {
  return (
    <div>
        <div className ="mt-10 h-[36rem]  ml-16 mr-16 bg-neutral-600 rounded-xl">
            <div className="grid grid-cols-2 divide-x divide-neutral-500 h-full">
                <div className="px-5 py-5">
                <div className="h-full w-full rounded-xl bg-neutral-700">
                <div className="p-4 h-full">
                  <img className=" h-full bg-neutral-800 rounded-xl" src="https://venturebeat.com/wp-content/uploads/2023/07/NVIDIA.jpg"/>
                </div>
                
                </div>
                </div>
                <div className="px-5 py-5">
                <div className="h-full w-full rounded-xl bg-neutral-700">
                  <div className="h-10 w-full">
                    <div className='flex items-center'>
                      <div className="pt-3 px-5">
                        <img className="inline-block size-[46px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
                      </div>
                      <div className=" font-bold text-gray-200">jarvis Pandey</div>
                    </div>

                  </div>
                  <hr className="h-px mt-8 mb-4 bg-neutral-200 border-0 dark:bg-neutral-600"></hr>
                  <div className="h-40 bg-neutral-800">

                  </div>

                </div>
                </div>

            </div>
        
        </div>
    </div>

  )
}

export default Post