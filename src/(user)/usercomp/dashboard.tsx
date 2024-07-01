import React from 'react'
import Topcard from '../pages/dashboard/Topcard'
import { CardsStats } from '../pages/dashboard/area'
import Calendar from '../pages/dashboard/Transactions'
import { Notification } from '../pages/dashboard/notification'



const Dashboard = () => {
  return (
    <div className="pl-24 pr-24 pt-10 h-full w-full bg-gray-100">
      <Topcard/>
      {/*calender and graph*/}
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Calendar/>
        </div>
        <div>
          <CardsStats/>
          <Notification/>
          </div>

      </div>
      
      
    </div>
  )
}

export default Dashboard