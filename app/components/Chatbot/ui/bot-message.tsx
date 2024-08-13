
import React from 'react'
import { RiRobot3Line } from 'react-icons/ri'

const BotMessage = () => {
  return (
    <div className='flex w-full my-2 p-2 '>
      <div className='flex border bg-slate-100 mr-2 rounded-full place-items-center  p-1 w-8'>
        <RiRobot3Line size={20}/>
      </div>
      <div>
        <p>Hello</p>
        <p>How may I help you ...?</p>
      </div>
    </div>
  )
}

export default BotMessage
