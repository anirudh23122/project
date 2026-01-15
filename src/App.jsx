import React, { useState } from 'react'

const App = () => {
const[title, setTitle] = useState('')
const[detail, setDetail] = useState('')
const submitHandler =(e) => {
e.preventDefault()
console.log(title, detail);
setTitle('')
setDetail('')
}

  return (
    <div className='h-screen lg:flex bg-black text-white '>
    
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
      className='flex p-10 lg:w-1/2 gap-4 flex-col items-start '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
         
        <input type="text" 
        placeholder = "enter notes  heading"
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
        value={title}
        onChange={(e) =>{
            setTitle(e.target.value)
        }}
        />

      <textarea
      placeholder='enter details'
      className='px-5 py-2 w-full font-medium border-2 h-20 outline-none rounded'
      value={detail}
      onChange={(e) => {
           setDetail(e.target.value)
      }}
      /> 

      <button className='bg-white text-black font-medium w-full px-5 py-2 outline-none rounded'>Add Notes</button>
      
      
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
       <h1 className='text-3xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        <div className="h-50 w-40 rounded-2xl bg-white"></div>
        <div className="h-50 w-40 rounded-2xl bg-white"></div>
        <div className="h-50 w-40 rounded-2xl bg-white"></div>
        <div className="h-50 w-40 rounded-2xl bg-white"></div>

        </div>
      </div>
      
    </div>
  )
}

export default App
