import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-6 md:px-24 absolute'>
    <p className='text=2xl md:text-6xl font-extrabold text-white'>{title}</p>
    <p className='hidden md:inline-block py-6 text-lg w-1/3 text-white'>{overview}</p>
    <div className='my-2 md:m-0'>
    <button className='bg-white text-black p-1 md:p-3 px-4 md:px-10 text-xl rounded-lg hover:opacity-70'>▷ play</button>
    <button  className='hidden md:inline-block mx-2 bg-gray-600 text-white p-4 py-1 md:py-4 px-3 md:px-12 text-xl bg-opacity-50 rounded-lg hover:opacity-80'>more info</button>
    </div>
    </div>
  )
}

export default VideoTitle;