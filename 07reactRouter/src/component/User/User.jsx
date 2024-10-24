import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-center p-4 bg-gray-600 text-white text-3xl'>
      user : {userId}
    </div>
  )
}

export default User
