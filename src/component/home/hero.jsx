import Navbar from "./navbar";
import Video from "./video";



function Hero(){
  return (<>
    
 <div className="bg-neutral-900">

 <Navbar />

 
<div class="bg-gradient-to-b from-violet-600/10 via-transparent">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-5">
   
    <div class="flex justify-center">
      <a class="group inline-block bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600" href="../figma.html">
        <p class="me-2 inline-block text-white text-sm">
          Roadmap for Startup
        </p>
        <span class="group-hover:bg-white/10 py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div>
    

    
    <div class="max-w-3xl text-center mx-auto">
      <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Now it's easier than ever to build Product
      </h1>
    </div>
   

    <div class="max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-400">We at vedarga provide tailored ecosystem for new startup to grow at 100X potential</p>
    </div>

   
    <div class="text-center">
      <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
        Get Set Build
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
    </div>
    
  </div>
</div>

 
 </div>

 {/*hero 2 start*/}


<div class="relative bg-neutral-900 overflow-hidden">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="max-w-2xl text-center mx-auto">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Designed for you to get more <span class="text-blue-600">simple</span></h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Build your business here. Take it anywhere.</p>
    </div>

    <div class="mt-10 relative max-w-5xl mx-auto">
      <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

      <div class="absolute inset-0 size-full">
        <div class="flex flex-col justify-center items-center size-full">
          <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Play the overview
          </a>
        </div>
      </div>

      <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
        <div class="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
      </div>

      <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div class="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
      </div>
    </div>
  </div>
</div>


 {/*hero 2 end*/}


</>
  )
}

export default Hero;