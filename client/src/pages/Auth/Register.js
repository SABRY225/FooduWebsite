import React, {useState} from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [password,setPassword]=useState("");
    const [questions,setAnswer]=useState("");
    const navigate = useNavigate();
    const handelEvent =async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post('http://localhost:8000/api/v1/auth/register',{
                name,email,phone,address,password,questions
            })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/login");
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Something went Wrong")
        }
    }
    return (
        <>
            <div className='register form-container'>
                <h1 className='m-5'>Register Pages</h1>
                <form onSubmit={handelEvent} >
                    <div class="mb-3 ">
                        <input type="text" class="form-control" id="exampleInputName" placeholder='Enter Your Name'  value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail" placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputphone" placeholder='Enter Your Phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputAddress" placeholder='Enter Your Address' value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputanswer" placeholder='What is the best club in the world for you?' value={questions} onChange={(e)=>{setAnswer(e.target.value)}} required/>
                    </div>
                    <div className='text-center'>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Register
