import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12 absolute'>
    <p className='text-6xl font-extrabold text-white'>{title}</p>
    <p className='py-6 text-lg w-1/3 text-white'>{overview}</p>
    <div>
    <button className='bg-white text-black p-3 px-10 text-xl rounded-lg hover:opacity-70'>▷ play</button>
    <button  className='mx-2 bg-gray-600 text-white p-3 px-10 text-xl bg-opacity-50 rounded-lg hover:opacity-80'>more info</button>
    </div>
    </div>
  )
}

export default VideoTitle;