import React from 'react'

const ChatInput = () => {
  return (
    <div className='flex space-x-2 items-center mt-auto' >
      <form  className='flex items-cente justify-end w-full  space-x-2'>
        <input  className=" w-full rounded p-1 items-center justify-center border border-[#e5e7eb] px-3 text-sm text-black h-10 "type='text' placeholder='Type your query here' />
        <button className='bg-orange-500 text-white p-2  w-auto text-sm font-medium shdow-md hover:bg-orange-600 rounded-md'>Send</button>
      </form>
    </div>
  )
}

export default ChatInput
