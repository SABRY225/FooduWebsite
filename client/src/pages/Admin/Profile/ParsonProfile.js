import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ParsonProfile() {
  const [user, setUser] = useState([]);
  useEffect(() => { axios.get('http://localhost:8000/api/v1/auth/profileadmin').then(res => { setUser(res.data) })
    }, [user])
  return (
    <div className='container'>
      <div className='row'>
        <h3><i className="fas fa-sharp fa-user"></i>  Info Admin</h3>
        <hr></hr>
        <div className='row'>
          <div className='col md-3 text-center'>
            <img src={user.imgAdmin} class="img-fluid" alt="Admin Photo" style={{width:200,height:180,borderRadius:50}}/>
          </div>
        </div>
        <div className='row m-3'>
          <div className='col md-3 text-center'>
            <input type='text' className='form-control' value={user.name} disabled />
          </div>
          <div className='col md-3 text-center'>
            <input type='text' className='form-control' value={user.lname} disabled />
          </div>
        </div>
        <div className='row m-3'>
          <div className='col md-3 text-center'>
            <input type='text' className='form-control' value={user.email} disabled />
          </div>
          <div className='col md-3 text-center'>
            <input type='text' className='form-control' value={user.address} disabled />
          </div>
        </div>
        <div className='row m-3'>
          <div className='col md-3 text-center'>
            <input type='text' className='form-control' value={user.phone} disabled />
          </div>
          <div className='col md-3 text-center'>
            <input type='text' className='form-control' value={user.jobtitle} disabled/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParsonProfile
