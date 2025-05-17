import React from 'react'

export default function Avatar({userName,src}) {
  return (
    <div className='avatar'>

        <p>{userName}</p>
       <img src={src} />
      
    </div>
  )
}
