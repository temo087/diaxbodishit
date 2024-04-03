import  { useState } from 'react'

export default function TxtsShowHide() {

    const[hide,setHide]=useState(true)
  return (
    <div>
 {hide === true? <h1>hello world</h1> : ""}
    <button onClick={()=> setHide(!hide)}>Show/Hide</button>
    </div>
  )
}
