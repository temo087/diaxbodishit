import  { useContext } from 'react'
import { GlobalContext } from '../App'

export default function GrandChild() {
    const context = useContext(GlobalContext)
    if(!context){
        return null
    }
    const{text,setText}=context
  return (
    <div>
<input type="text" onChange={(e)=>{
    setText(e.target.value)
}} />
    </div>
  )
}
