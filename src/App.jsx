import React, { useState } from 'react'

const App = () => {

const[title, setTitle] = useState('')
const[detail, setDetail] = useState('')
const[task, setTask] = useState([])

const submitHandler =(e) => {
e.preventDefault()
const isTask = [...task]
isTask.push({title,detail})
setTask(isTask)


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

      <button className='bg-white text-black active:scale-90 font-medium w-full px-5 py-2 outline-none rounded'>Add Notes</button>
      
      
      </form>

      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
        {task.map(function(elem,idx){
         return <div key={idx} className='relative h-52 w-40 bg-cover rounded-xl text-black py-8 px-4 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='leading-snug mt-4 font-medium text-blue-900' >{elem.detail}</p>
         </div>     
        
        })}

       </div>
      </div>
      
    </div>
  )
}

export default App
