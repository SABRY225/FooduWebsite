import React, {useState} from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate ,useLocation} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {useAuth} from "../../Context/Context"
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handelEvent =async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post('http://localhost:8000/api/v1/auth/login',{
                email,password
            })
            if (res && res.data.success) {
                toast.success(res.data.message)
                localStorage.setItem("auth",JSON.stringify(res.data));
                setAuth({
                    user:res.data.user,
                    token:res.data.token,
                });
                navigate(location.state || "/");
                console.log(location.state);
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Something went Wrong")
        }
    }
    return (
        <div className='register form-container'>
        <h1 className='m-5'>Login Pages</h1>
        <form onSubmit={handelEvent} >
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail" placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>

            <div class="mb-3">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            <div className='text-center'>
            <button type="button" class="btn btn-secondary" onClick={()=>{navigate('/forget-password')}} >Forget Password</button>
            </div>
            <div className='text-center'>
            <button type="submit" class="btn btn-secondary" >Submit</button>
            </div>
        </form>
    </div>
    )
}

export default Login
