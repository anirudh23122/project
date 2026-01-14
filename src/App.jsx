import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex p-10 justify-between items-start '>

       <div className='flex p-10 w-1/2 items-start flex-col gap-4'>
         
         <input type="text" 
        placeholder = "enter notes  heading"
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
        />

      <textarea
      placeholder='enter details'
      className='px-5 py-2 w-full font-medium border-2 h-20 outline-none rounded'
      /> 

      <button className='bg-white text-black font-medium w-full px-5 py-2 outline-none rounded'>Add Notes</button>
       </div>
      
      </form>
      
    </div>
  )
}

export default App
