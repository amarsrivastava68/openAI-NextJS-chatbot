
import React from 'react'
import { RiUser3Line } from 'react-icons/ri'

const UserMessage = () => {
  return (
    <div className='flex w-full my-2 p-2 '>
      <div className='flex border bg-slate-100 mr-2 rounded-full place-items-center  p-1 w-8'>
        <RiUser3Line size={20}/>
      </div>
      <div>
        <p>User</p>
        <p>I need help with my computer .</p>
      </div>
    </div>
  )
}

export default UserMessage
