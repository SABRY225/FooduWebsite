import React,{useEffect,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


function Spinner() {
    const [count,setCount]= useState(5)
    const navigate =useNavigate()
    const location =useLocation()
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((preValue)=> --preValue)
        }, 1000);
        count === 0 && navigate('/login',{
            state:location.pathname
        })
        return ()=> clearInterval(interval)
    },[count,navigate,location])
  return (
<>
<div className='d-flex flex-column justify-content-center align-items-center'
style={{height:"100vh"}}
>
    <h1 className='Text-center'>redirecting to you in {count} second</h1>
<div class="spinner-border text-primary m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
</>
  )
}

export default Spinner
