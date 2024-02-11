import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { storage} from '../../../config/firebase';
import {ref, getDownloadURL, uploadBytesResumable,uploadBytes} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
function EditeParsonProfile() {
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const navigate = useNavigate();
  const handleSubmit =  (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage,`Admin/${file.name}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then(async (url) => {
            const imgAdmin = url;
            const res = await axios.post('http://localhost:8000/api/v1/auth/editeprofileadmin', {
              name, email, phone, address, jobtitle, lname, imgAdmin
            })
            if (res.data.success) {
              toast.success(res.data.message)
              navigate("/deshboard/admin");
            } else {
              toast.error(res.data.message)
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div className='container'>
      <div className='row'>
        <h3><i className="fas fa-pen"></i>  Edit Info Admin</h3>
        <hr></hr>
        <div className='row'>
          <form onSubmit={handleSubmit}>
            <div className='row text-center'>
              <div class="mb-3 text-center">
                <label for="description" class="form-label" >Enter Image Admin</label>
                <div className="input-div-2">
                  <input class="input"  type="file"  required />
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col md-3 text-center'>
                <input type='text' className='form-control' placeholder='Enter First Name' value={name} onChange={(e) => { setName(e.target.value) }} required />
              </div>
              <div className='col md-3 text-center'>
                <input type='text' className='form-control' placeholder='Enter Last Name' value={lname} onChange={(e) => { setLName(e.target.value) }} required />
              </div>
            </div>
            <div className='row m-3'>
              <div className='col md-3 text-center'>
                <input type='text' className='form-control' placeholder='Enter Gmail' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
              </div>
              <div className='col md-3 text-center'>
                <input type='text' className='form-control' placeholder='Enter Address' value={address} onChange={(e) => { setAddress(e.target.value) }} required />
              </div>
            </div>
            <div className='row m-3'>
              <div className='col md-3 text-center'>
                <input type='text' className='form-control' placeholder='Enter Phone Number' value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
              </div>
              <div className='col md-3 text-center'>
                <input type='text' className='form-control' placeholder='Enter Job title' value={jobtitle} onChange={(e) => { setJobTitle(e.target.value) }} required />
              </div>
            </div>
            <div className='row m-3'>
              <div className='col md-3 text-center'>
                <button type="submit" class="btn btn-dark" >Submit</button>
              </div>
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default EditeParsonProfile