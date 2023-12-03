import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
    <p className='text-6xl font-bold'>{title}</p>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div>
    <button className='bg-gray-600 text-black p-4 px-16 text-xl bg-opacity-50 rounded-lg'>▷ play</button>
    <button  className='mx-2 bg-gray-600 text-black p-4 px-16 text-xl bg-opacity-50 rounded-lg'>more</button>
    </div>
    </div>
  )
}

export default VideoTitle;