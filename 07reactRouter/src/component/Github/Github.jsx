import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <div className='flex flex-col justify-center items-center text-center m-4 text-3xl p-4 bg-gray-600 text-white'>
      <img className='rounded-full' src={data.avatar_url} alt="Git Picture" width={200} />
      GitHub followers : {data.followers}
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fatch ('https://api.github.com/users/hiteshchoudhary')
//     return response
// }
