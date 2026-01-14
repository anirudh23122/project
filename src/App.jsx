import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex p-10 justify-between items-start gap-4'>
       <div className='flex p-10 w-1/2 items-start flex-col gap-4'>
         <input type="text" 
        placeholder = "enter notes  heading"
        className='px-5 py-2 border-2 rounded'
        />
      <input type="text" 
      placeholder='enter details'
      className='px-5 py-2  border-2 h-20 rounded'
      /> 
      <button className='bg-white text-black px-5 py-2 rounded'>Add Notes</button>
       </div>
      <img className='h-60' src="https://gallery.yopriceville.com/downloadfullsize/send/14426" alt="" />
      </form>
      
    </div>
  )
}

export default App
