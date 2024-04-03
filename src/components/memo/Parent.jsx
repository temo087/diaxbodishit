import React, { useState } from 'react'
import Child from './Childcomp'
export default function Parent() {
    const[count,setCount]=useState(0)
  return (
    <>
    <h1>
        {count}
    </h1>
    <button onClick={()=>{
        setCount(count + 1)
    }}>Inc</button>
<Child/>
    </>


    )
}
