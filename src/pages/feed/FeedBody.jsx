import React from 'react'
import Stats from '../../component/feed/stats'
import CategoryCard from '../../component/feed/categoryCard'
import Post from '../../component/feed/post'

const FeedBody = () => {
  return (
    <div class="h-max bg-white dark:bg-neutral-700">

        {/*<Stats/>*/}
        <CategoryCard/>
        <Post/>
        <Post/>
        <Post/>

    </div>
  )
}

export default FeedBody