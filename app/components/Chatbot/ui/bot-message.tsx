import React from 'react'
import { RiRobot3Line } from 'react-icons/ri'
import { Message } from '../chatbot'
const BotMessage = ({role, content}:Message) => {
  return (
    <div className='flex items-start w-full my-2 '>
      <div className='flex border bg-slate-100 mr-2 rounded-full  w-10 h-10 items-center justify-center'>
        <RiRobot3Line size={20} />
      </div>
      <div className='flex flex-col'>
        <p className='font-semibold'>{role}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default BotMessage
