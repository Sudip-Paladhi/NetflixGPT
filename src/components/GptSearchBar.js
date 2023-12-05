import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-32 flex justify-center'>
    <form className='bg-black w-1/2 grid grid-cols-12'>
    <input className='p-4 m-4 col-span-9' type="text" placeholder='What would you like to watch today!'/> 
    <button className='py-2 px-4 m-4 bg-red-800 rounded-lg text-white col-span-3'>Search</button>
    </form>
    </div>
  )
}

export default GptSearchBar