import React from 'react'
import Fnav from '../../component/feed/Fnav';
import Sidebar from '../../component/feed/sidebar';
import FeedBody from './FeedBody';

const Feed = () => {
  return (
    <div>
      <Fnav/>

       <div class="grid grid-cols-6">
         <div class="w-full h-screen bg-white mr-1 col-span-1"><Sidebar/></div>
         <div class="col-span-4"><FeedBody/></div>
         <div class="h-screen  w-full col-span-1">03</div>
       </div>
    </div>
  )
}

export default Feed;