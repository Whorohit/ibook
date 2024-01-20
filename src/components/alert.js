import React,{useContext} from 'react'
import Notecontext from '../context/Notes/Context'


export default function Alert( ) {
    const a = useContext(Notecontext)
    const {alert}=a
  return (
   <div  className='  w-100  ' style={{height:"30px", zIndex:"400",position:'absolute',}}>
    {
      alert && <div class={`alert alert-${alert.types} my-0 h-20`} role="alert">
      <strong> {alert.msg}</strong>
      </div>
    }
   </div>
  )
}