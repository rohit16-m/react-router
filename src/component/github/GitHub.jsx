import React, { useEffect, useState } from 'react'

const GitHub = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response=> response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },
    [])

  return (
    <div className='text-center'>GitHub folowers = {data.followers}
        <img className='' src={data.avatar_url} width={300}/>
    </div>
  )
}

export default GitHub